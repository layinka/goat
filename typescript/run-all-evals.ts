import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

// Component types to test
const componentTypes = ["plugins", "adapters", "wallets"];

// Function to run tests for a component type
function runTestsForComponentType(componentType: string) {
    console.log(`\n=== Running tests for ${componentType} ===\n`);

    const componentsPath = path.join(__dirname, "packages", componentType);
    const components = fs
        .readdirSync(componentsPath)
        .filter((dir) => fs.statSync(path.join(componentsPath, dir)).isDirectory());

    for (const component of components) {
        const testFilePath = path.join(componentsPath, component, "test-eval.ts");

        if (fs.existsSync(testFilePath)) {
            console.log(`Testing ${component}...`);
            try {
                execSync(`ts-node ${testFilePath}`, { stdio: "inherit" });
                console.log(`✅ ${component} tests completed successfully\n`);
            } catch (error) {
                console.error(`❌ ${component} tests failed:`, error);
            }
        } else {
            console.log(`⚠️ ${component} does not have a test file\n`);
        }
    }
}

// Run tests for all component types
for (const componentType of componentTypes) {
    runTestsForComponentType(componentType);
}

console.log("\n=== All evaluation tests completed ===\n");
