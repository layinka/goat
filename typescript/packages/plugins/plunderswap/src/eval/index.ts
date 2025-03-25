// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing PlunderSwap tokens tool
 */
export const PLUNDERSWAP_TOKENS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "List all tokens available on PlunderSwap",
        },
        referenceOutputs: {
            tool: "plunderswap_tokens",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "What tokens can I trade on PlunderSwap?",
        },
        referenceOutputs: {
            tool: "plunderswap_tokens",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing PlunderSwap balance tool
 */
export const PLUNDERSWAP_BALANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is my ZIL balance on PlunderSwap?",
        },
        referenceOutputs: {
            tool: "plunderswap_balance",
            response: '{"token":"ZIL"}',
        },
    },
    {
        inputs: {
            query: "Check my WZIL token balance on PlunderSwap",
        },
        referenceOutputs: {
            tool: "plunderswap_balance",
            response: '{"token":"WZIL"}',
        },
    },
];

/**
 * Dataset for testing PlunderSwap quote tool
 */
export const PLUNDERSWAP_QUOTE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get a quote for swapping 10 ZIL to WZIL on PlunderSwap",
        },
        referenceOutputs: {
            tool: "plunderswap_quote",
            response: '{"fromToken":"ZIL","toToken":"WZIL","fromAmount":"10"}',
        },
    },
    {
        inputs: {
            query: "How much USDC would I get for 5 WZIL on PlunderSwap?",
        },
        referenceOutputs: {
            tool: "plunderswap_quote",
            response: '{"fromToken":"WZIL","toToken":"USDC","fromAmount":"5"}',
        },
    },
];

/**
 * Dataset for testing PlunderSwap swap tool
 */
export const PLUNDERSWAP_SWAP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 10 ZIL for WZIL on PlunderSwap",
        },
        referenceOutputs: {
            tool: "plunderswap_swap",
            response:
                '{"fromToken":"ZIL","toToken":"WZIL","fromAmount":"10","toAmount":"9.9","deadline":"2023-12-31T23:59:59.999Z"}',
        },
    },
    {
        inputs: {
            query: "Exchange 5 WZIL for USDC on PlunderSwap",
        },
        referenceOutputs: {
            tool: "plunderswap_swap",
            response:
                '{"fromToken":"WZIL","toToken":"USDC","fromAmount":"5","toAmount":"4.95","deadline":"2023-12-31T23:59:59.999Z"}',
        },
    },
];

/**
 * Dataset for testing PlunderSwap ZIL wrap tool
 */
export const PLUNDERSWAP_ZIL_WRAP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Wrap 10 ZIL to WZIL on PlunderSwap",
        },
        referenceOutputs: {
            tool: "plunderswap_zil_wrap",
            response: '{"amount":"10"}',
        },
    },
    {
        inputs: {
            query: "Convert 5 ZIL to WZIL using PlunderSwap",
        },
        referenceOutputs: {
            tool: "plunderswap_zil_wrap",
            response: '{"amount":"5"}',
        },
    },
];

/**
 * Dataset for testing PlunderSwap ZIL unwrap tool
 */
export const PLUNDERSWAP_ZIL_UNWRAP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Unwrap 10 WZIL to ZIL on PlunderSwap",
        },
        referenceOutputs: {
            tool: "plunderswap_zil_unwrap",
            response: '{"amount":"10"}',
        },
    },
    {
        inputs: {
            query: "Convert 5 WZIL back to ZIL using PlunderSwap",
        },
        referenceOutputs: {
            tool: "plunderswap_zil_unwrap",
            response: '{"amount":"5"}',
        },
    },
];

/**
 * Combined dataset for all PlunderSwap tools
 */
export const PLUNDERSWAP_ALL_TOOLS_DATASET: EvalDataset = [
    ...PLUNDERSWAP_TOKENS_DATASET,
    ...PLUNDERSWAP_BALANCE_DATASET,
    ...PLUNDERSWAP_QUOTE_DATASET,
    ...PLUNDERSWAP_SWAP_DATASET,
    ...PLUNDERSWAP_ZIL_WRAP_DATASET,
    ...PLUNDERSWAP_ZIL_UNWRAP_DATASET,
];
