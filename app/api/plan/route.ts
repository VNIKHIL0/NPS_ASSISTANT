import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { languageFullNames } from "@/constants/translations";

export const maxDuration = 30;

export async function POST(req: Request) {
    const { data, language } = await req.json();
    const fullLanguage = languageFullNames[language as keyof typeof languageFullNames] || "English";

    console.log(`Generating plan for language: ${fullLanguage} (${language})`);

    const systemPrompt = `NPS Consultant. Concise roadmap based on: Age:${data.age}, Inc:₹${data.income}, Ret:${data.retirementAge}, Sav:₹${data.savings}, Goal:₹${data.pensionGoal}, Risk:${data.riskProfile}. Language:${fullLanguage}.
    Markdown output: 1.Summary 2.Growth(${data.retirementAge}) 3.Allocation 4.Steps.`;

    try {
        const result = await streamText({
            model: google("gemini-1.5-flash-latest"),
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
