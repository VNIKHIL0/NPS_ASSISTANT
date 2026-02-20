import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import path from "path";

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

if (!apiKey) {
    console.error("Error: GOOGLE_GENERATIVE_AI_API_KEY not found in .env.local");
    process.exit(1);
}

async function listModels() {
    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        // Note: genAI.getGenerativeModel is for usage, for listing we might need to use fetch if the SDK doesn't expose listModels easily in this version, 
        // but older SDKs did. Let's try to use the raw API via fetch to be sure.

        console.log("Checking available models via API...");
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);

        if (!response.ok) {
            throw new Error(`API Request Failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const models = data.models || [];

        console.log("\nAvailable Models:");
        models.forEach((m: any) => {
            if (m.supportedGenerationMethods?.includes("generateContent")) {
                console.log(`- ${m.name} (${m.displayName})`);
            }
        });

        if (models.length === 0) {
            console.log("No models found.");
        }

    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
