import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";
import { languageFullNames } from "@/constants/translations";

const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
    fetch: async (url, options) => {
        if (options && options.body) {
            try {
                const body = JSON.parse(options.body as string);
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

export async function POST(req: Request) {
    const { data, language } = await req.json();
    const fullLanguage = languageFullNames[language as keyof typeof languageFullNames] || "English";

    console.log(`Generating plan for language: ${fullLanguage} (${language})`);

    const systemPrompt = `NPS Consultant. Concise roadmap based on: Age:${data.age}, Inc:₹${data.income}, Ret:${data.retirementAge}, Sav:₹${data.savings}, Goal:₹${data.pensionGoal}, Risk:${data.riskProfile}. Language:${fullLanguage}.
    Markdown output: 1.Summary 2.Growth(${data.retirementAge}) 3.Allocation 4.Steps.`;

    try {
        const result = await streamText({
            model: openrouter("google/gemini-2.5-flash"),
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Generate NPS roadmap in ${fullLanguage}.` }
            ],
        });

        return result.toTextStreamResponse();
    } catch (error) {
        console.error("Error in AI Plan API:", error);
        return new Response(JSON.stringify({ error: "Failed to generate plan" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
