import * as fs from "node:fs";
import * as path from "node:path";

// Component types to generate scripts for
const componentTypes = ["plugins", "adapters", "wallets"];

// Template for test-eval.ts
const testEvalTemplate = (componentType: string, componentName: string) => `import { runEvals } from "@goat-sdk/core";
import { ChatOpenAI } from "@langchain/openai";
// TODO: Import appropriate wallet client and plugins
import { ALL_TOOLS_DATASET } from "./src/eval";

require("dotenv").config();

// Set up LLM
const llm = new ChatOpenAI({
    modelName: "gpt-4o-mini",
    temperature: 0.3,
});

// TODO: Create wallet client appropriate for this component

async function runTest() {
    try {
        const result = await runEvals(
            ALL_TOOLS_DATASET,
            {
                wallet: null, // TODO: Add appropriate wallet
                plugins: [], // TODO: Add appropriate plugins
                llm,
            },
            "${componentName} Evaluation Tests",
        );

        console.log("\\nEvaluation Summary:");
        console.log(\`Success: \${result.success}\`);
        console.log(\`Total: \${result.results.length}\`);
        console.log(\`Passed: \${result.results.filter((r) => r.passed).length}\`);
        console.log(\`Failed: \${result.results.filter((r) => !r.passed).length}\`);
    } catch (error) {
        console.error("Error running evaluations:", error);
    }
}

runTest();
`;

// Generate scripts for all components
for (const componentType of componentTypes) {
    const componentsPath = path.join(__dirname, "packages", componentType);
    const components = fs
        .readdirSync(componentsPath)
        .filter((dir) => fs.statSync(path.join(componentsPath, dir)).isDirectory());

    for (const component of components) {
        const evalDirPath = path.join(componentsPath, component, "src", "eval");
        const testFilePath = path.join(componentsPath, component, "test-eval.ts");

        // Only generate if eval directory exists but test file doesn't
        if (fs.existsSync(evalDirPath) && !fs.existsSync(testFilePath)) {
            console.log(`Generating test script for ${componentType}/${component}`);
            fs.writeFileSync(testFilePath, testEvalTemplate(componentType, component));
        }
    }
}

console.log("Script generation completed");
