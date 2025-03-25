// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Balmy quote tool
 */
export const BALMY_QUOTE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get a quote for swapping 0.1 ETH to USDC using Balmy",
        },
        referenceOutputs: {
            tool: "getQuote",
            response:
                '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","order":{"type":"sell","amount":"100000000000000000"},"slippagePercentage":0.5}',
        },
    },
    {
        inputs: {
            query: "How much USDC can I get for 0.5 ETH on Balmy?",
        },
        referenceOutputs: {
            tool: "getQuote",
            response:
                '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","order":{"type":"sell","amount":"500000000000000000"},"slippagePercentage":0.5}',
        },
    },
];

/**
 * Dataset for testing Balmy swap execution tool
 */
export const BALMY_SWAP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 0.1 ETH for USDC using Balmy",
        },
        referenceOutputs: {
            tool: "executeSwap",
            response:
                '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","order":{"type":"sell","amount":"100000000000000000"},"slippagePercentage":0.5}',
        },
    },
    {
        inputs: {
            query: "Execute a swap of 500 USDC for DAI on Balmy with 1% slippage",
        },
        referenceOutputs: {
            tool: "executeSwap",
            response:
                '{"tokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOut":"0x6B175474E89094C44Da98b954EedeAC495271d0F","order":{"type":"sell","amount":"500000"},"slippagePercentage":1}',
        },
    },
];

/**
 * Combined dataset for all Balmy tools
 */
export const BALMY_ALL_TOOLS_DATASET: EvalDataset = [...BALMY_QUOTE_DATASET, ...BALMY_SWAP_DATASET];
