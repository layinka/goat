// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Avnu swap tool
 */
export const AVNU_SWAP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 0.1 ETH for USDC on Starknet",
        },
        referenceOutputs: {
            tool: "executeSwap",
            response:
                '{"sellTokenAddress":"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7","buyTokenAddress":"0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8","sellAmount":"100000000000000000"}',
        },
    },
    {
        inputs: {
            query: "Exchange 500 USDC for DAI on Starknet with 1% slippage",
        },
        referenceOutputs: {
            tool: "executeSwap",
            response:
                '{"sellTokenAddress":"0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8","buyTokenAddress":"0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3","sellAmount":"500000000","slippage":1}',
        },
    },
];

/**
 * Combined dataset for all Avnu tools
 */
export const AVNU_ALL_TOOLS_DATASET: EvalDataset = [...AVNU_SWAP_DATASET];
