import dotenv from "dotenv";
import path from "path";

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const apiKey = process.env.OPENROUTER_API_KEY;

if (!apiKey) {
    console.error("Error: OPENROUTER_API_KEY not found in .env.local");
    process.exit(1);
}

async function listModels() {
    try {
        console.log("Checking available models via OpenRouter API...");
        const response = await fetch("https://openrouter.ai/api/v1/models", {
            headers: {
                "Authorization": `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`API Request Failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const models = data.data || [];

        console.log("\nAvailable Models:");
        models.forEach((m: any) => {
            console.log(`- ${m.id} (${m.name})`);
        });

        if (models.length === 0) {
            console.log("No models found.");
        }

    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
