import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, UIMessage } from 'ai';
import { languageFullNames, Language } from '@/constants/translations';

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
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
        if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
            console.error("API Key MISSING in route.ts");
        } else {
            console.log("API Key Present (Length: " + process.env.GOOGLE_GENERATIVE_AI_API_KEY.length + ")");
        }

        const targetLanguage = languageFullNames[language as Language] || "English";
        const coreMessages = convertToCoreMessages(messages);

        const result = await streamText({
            model: google('gemini-flash-latest'),
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
