// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing 0x price tool
 */
export const ZEROX_PRICE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What's the price of swapping 1000000 USDC for ETH?",
        },
        referenceOutputs: {
            tool: "0x_get_price",
            response:
                '{"sellToken":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","buyToken":"ETH","sellAmount":"1000000","slippageBps":"50"}',
        },
    },
    {
        inputs: {
            query: "Check the exchange rate between DAI and USDC for 100 DAI",
        },
        referenceOutputs: {
            tool: "0x_get_price",
            response:
                '{"sellToken":"0x6B175474E89094C44Da98b954EedeAC495271d0F","buyToken":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","sellAmount":"100000000000000000000","slippageBps":"50"}',
        },
    },
];

/**
 * Dataset for testing 0x swap tool
 */
export const ZEROX_SWAP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 0.1 ETH for USDC",
        },
        referenceOutputs: {
            tool: "0x_swap",
            response:
                '{"sellToken":"ETH","buyToken":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","sellAmount":"100000000000000000","slippageBps":"50"}',
        },
    },
    {
        inputs: {
            query: "Exchange 500 USDC for DAI with 1% slippage",
        },
        referenceOutputs: {
            tool: "0x_swap",
            response:
                '{"sellToken":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","buyToken":"0x6B175474E89094C44Da98b954EedeAC495271d0F","sellAmount":"500000","slippageBps":"100"}',
        },
    },
];

/**
 * Combined dataset for all 0x tools
 */
export const ZEROX_ALL_TOOLS_DATASET: EvalDataset = [...ZEROX_PRICE_DATASET, ...ZEROX_SWAP_DATASET];
