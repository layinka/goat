// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Jupiter get quote tool
 */
export const JUPITER_GET_QUOTE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get a quote for swapping 1 SOL to USDC on Jupiter",
        },
        referenceOutputs: {
            tool: "getQuote",
            response:
                '{"inputMint":"So11111111111111111111111111111111111111112","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","amount":"1000000000","slippageBps":50}',
        },
    },
    {
        inputs: {
            query: "What's the current rate for exchanging 100 USDC to SOL on Jupiter DEX?",
        },
        referenceOutputs: {
            tool: "getQuote",
            response:
                '{"inputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outputMint":"So11111111111111111111111111111111111111112","amount":"100000000","slippageBps":50}',
        },
    },
];

/**
 * Dataset for testing Jupiter swap tokens tool
 */
export const JUPITER_SWAP_TOKENS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 0.5 SOL to USDC on Jupiter",
        },
        referenceOutputs: {
            tool: "swapTokens",
            response:
                '{"inputMint":"So11111111111111111111111111111111111111112","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","amount":"500000000","slippageBps":50}',
        },
    },
    {
        inputs: {
            query: "Exchange 50 USDC for SOL using Jupiter DEX with 1% slippage",
        },
        referenceOutputs: {
            tool: "swapTokens",
            response:
                '{"inputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outputMint":"So11111111111111111111111111111111111111112","amount":"50000000","slippageBps":100}',
        },
    },
];

/**
 * Combined dataset for all Jupiter tools
 */
export const JUPITER_ALL_TOOLS_DATASET: EvalDataset = [...JUPITER_GET_QUOTE_DATASET, ...JUPITER_SWAP_TOKENS_DATASET];
