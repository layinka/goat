import { MockWalletClient, runEvals } from "@goat-sdk/core";
import { zeroEx } from "../0x.plugin";
import { ZEROX_ALL_TOOLS_DATASET } from "./dataset";
import { ChatOpenAI } from '@langchain/openai';

require("dotenv").config();

// Set up LLM
const langchainLLM = new ChatOpenAI({
	modelName: "gpt-4o-mini",
	temperature: 0.3,
});

// Create LLM wrapper
const llm = {
	invoke: async (params: {
		messages: { role: string; content: string }[];
		tools: {
			type: string;
			function: { name: string; description: string; parameters: unknown };
		}[];
	}) => {
		const response = await langchainLLM.invoke(params.messages, {
			tools: params.tools,
		});

		return {
			tool_calls: response.tool_calls?.map((call) => ({
				name: call.name,
				args: call.args,
			})),
		};
	},
};

// Create wallet client
async function runTest() {
	try {
		const result = await runEvals(
			ZEROX_ALL_TOOLS_DATASET,
			{
				wallet: new MockWalletClient() as any,
				plugins: [zeroEx({ apiKey: "" })],
				llm,
			},
			"0x Plugin Evaluation Tests",
		);

		console.log("\nEvaluation Summary:");
		console.log(`Success: ${result.success}`);
		console.log(`Total: ${result.results.length}`);
		console.log(`Passed: ${result.results.filter((r) => r.passed).length}`);
		console.log(`Failed: ${result.results.filter((r) => !r.passed).length}`);
	} catch (error) {
		console.error("Error running evaluations:", error);
	}
}

runTest();
