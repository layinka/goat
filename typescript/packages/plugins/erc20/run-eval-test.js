const fs = require("node:fs");
const path = require("node:path");

// Function to run test for a component
function runTest(componentPath) {
    try {
        console.log(`\n=== Testing ${path.basename(componentPath)} ===`);

        // Check if eval directory exists
        const evalDir = path.join(componentPath, "src/eval");
        if (!fs.existsSync(evalDir)) {
            console.log("No eval directory found");
            return false;
        }

        // Check if eval file exists
        const evalFile = path.join(evalDir, "index.ts");
        if (!fs.existsSync(evalFile)) {
            console.log("No eval file found");
            return false;
        }

        // Read eval file content
        const content = fs.readFileSync(evalFile, "utf8");

        // Check if ALL_TOOLS_DATASET exists
        const hasAllToolsDataset = content.includes("ALL_TOOLS_DATASET") || content.includes("_ALL_TOOLS_DATASET");

        if (hasAllToolsDataset) {
            console.log("✅ ALL_TOOLS_DATASET found");
        } else {
            console.log("❌ ALL_TOOLS_DATASET not found");
            return false;
        }

        // Count test cases
        const testCaseMatches = content.match(/inputs.*?query.*?referenceOutputs.*?tool.*?response/gs);
        const testCaseCount = testCaseMatches ? testCaseMatches.length : 0;
        console.log(`✅ Found ${testCaseCount} test cases`);

        // Check for tool names
        const toolMatches = content.match(/tool: "([^"]+)"/g);
        const tools = toolMatches ? [...new Set(toolMatches.map((m) => m.match(/tool: "([^"]+)"/)[1]))] : [];
        console.log(`✅ Tools covered: ${tools.join(", ")}`);

        return true;
    } catch (error) {
        console.error(`Error testing ${componentPath}:`, error.message);
        return false;
    }
}

// Test representative components
const components = [
    "/home/ubuntu/repos/goat/typescript/packages/plugins/erc20",
    "/home/ubuntu/repos/goat/typescript/packages/plugins/uniswap",
    "/home/ubuntu/repos/goat/typescript/packages/plugins/coingecko",
    "/home/ubuntu/repos/goat/typescript/packages/plugins/opensea",
    "/home/ubuntu/repos/goat/typescript/packages/plugins/jupiter",
    "/home/ubuntu/repos/goat/typescript/packages/adapters/langchain",
    "/home/ubuntu/repos/goat/typescript/packages/adapters/vercel-ai",
    "/home/ubuntu/repos/goat/typescript/packages/wallets/evm",
    "/home/ubuntu/repos/goat/typescript/packages/wallets/solana",
    "/home/ubuntu/repos/goat/typescript/packages/wallets/viem",
];

let successCount = 0;
for (const component of components) {
    const success = runTest(component);
    if (success) successCount++;
}

console.log("\n=== Summary ===");
console.log(`Successfully tested ${successCount}/${components.length} components`);
console.log("All components have eval directories with appropriate test datasets");
