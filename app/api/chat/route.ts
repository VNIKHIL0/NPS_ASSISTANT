import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText, UIMessage } from 'ai';
import { languageFullNames, Language } from '@/constants/translations';

const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
    fetch: async (url, options) => {
        if (options && options.body) {
            try {
                const body = JSON.parse(options.body as string);
                // Force max_tokens to 1000 to avoid OpenRouter requesting 65535 tokens
                body.max_tokens = 1000;
                options.body = JSON.stringify(body);
            } catch (e) {
                // Ignore parse errors
            }
        }
        return fetch(url, options);
    }
});

export const maxDuration = 30;

function convertToCoreMessages(messages: UIMessage[]) {
    return messages.map((msg) => {
        let textContent = '';
        if (msg.parts && Array.isArray(msg.parts)) {
            textContent = msg.parts
                .filter((p: any) => p.type === 'text')
                .map((p: any) => p.text)
                .join('');
        } else if (typeof (msg as any).content === 'string') {
            textContent = (msg as any).content;
        }
        return {
            role: msg.role as 'user' | 'assistant',
            content: textContent,
        };
    });
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages, language } = body;
        console.log("Chat Route Hit. Language:", language);
        if (!process.env.OPENROUTER_API_KEY) {
            console.error("API Key MISSING in route.ts");
        } else {
            console.log("API Key Present (Length: " + process.env.OPENROUTER_API_KEY.length + ")");
        }

        const targetLanguage = languageFullNames[language as Language] || "English";
        const coreMessages = convertToCoreMessages(messages);

        const result = await streamText({
            model: openrouter('google/gemini-2.5-flash'),
            system: `NPS Expert. Respond in ${targetLanguage}. Be concise & accurate.`,
            messages: coreMessages,
        });

        return result.toUIMessageStreamResponse();
    } catch (error) {
        console.error("Chat API Error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error", details: error instanceof Error ? error.message : String(error) }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
