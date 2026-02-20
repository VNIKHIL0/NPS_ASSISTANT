const fs = require('fs');
const path = require('path');
const https = require('https');

// Simple env loader
const envPath = path.resolve(process.cwd(), '.env.local');
let apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
    if (match) {
        apiKey = match[1].trim();
    }
}

if (!apiKey) {
    console.error("Error: GOOGLE_GENERATIVE_AI_API_KEY not found in .env.local or environment");
    process.exit(1);
}

console.log("Checking available models via API...");
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        try {
            if (res.statusCode !== 200) {
                throw new Error(`API Request Failed: ${res.statusCode} ${res.statusMessage}`);
            }
            const json = JSON.parse(data);
            const models = json.models || [];

            console.log("\nAvailable Models (Names only):");
            let foundValid = false;
            models.forEach((m) => {
                if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")) {
                    console.log(`- ${m.name}`);
                    foundValid = true;
                }
            });

            if (!foundValid) {
                console.log("No generateContent models found.");
            }
        } catch (e) {
            console.error("Error parsing response:", e.message);
            console.log("Raw response:", data.substring(0, 500));
        }
    });
}).on('error', (e) => {
    console.error("Error making request:", e.message);
});
