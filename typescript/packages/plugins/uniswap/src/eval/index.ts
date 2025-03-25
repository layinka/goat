// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Uniswap check approval tool
 */
export const UNISWAP_CHECK_APPROVAL_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Check if I have enough approval for USDC token to spend 100 USDC",
        },
        referenceOutputs: {
            tool: "uniswap_check_approval",
            response:
                '{"token":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"100000000","walletAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Do I need to approve DAI token for a swap on Uniswap?",
        },
        referenceOutputs: {
            tool: "uniswap_check_approval",
            response:
                '{"token":"0x6B175474E89094C44Da98b954EedeAC495271d0F","amount":"1000000000000000000","walletAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Verify if I have sufficient approval for WETH token on Uniswap",
        },
        referenceOutputs: {
            tool: "uniswap_check_approval",
            response:
                '{"token":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amount":"1000000000000000000","walletAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Dataset for testing Uniswap get quote tool
 */
export const UNISWAP_GET_QUOTE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get a quote for swapping 1 ETH to USDC on Uniswap",
        },
        referenceOutputs: {
            tool: "uniswap_get_quote",
            response:
                '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"1000000000000000000","type":"EXACT_INPUT"}',
        },
    },
    {
        inputs: {
            query: "How much ETH will I get for 1000 USDC on Uniswap?",
        },
        referenceOutputs: {
            tool: "uniswap_get_quote",
            response:
                '{"tokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOut":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amount":"1000000000","type":"EXACT_INPUT"}',
        },
    },
    {
        inputs: {
            query: "Quote for trading 10 DAI to USDC on Uniswap",
        },
        referenceOutputs: {
            tool: "uniswap_get_quote",
            response:
                '{"tokenIn":"0x6B175474E89094C44Da98b954EedeAC495271d0F","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"10000000000000000000","type":"EXACT_INPUT"}',
        },
    },
];

/**
 * Dataset for testing Uniswap swap tokens tool
 */
export const UNISWAP_SWAP_TOKENS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 1 ETH for USDC on Uniswap",
        },
        referenceOutputs: {
            tool: "uniswap_swap_tokens",
            response:
                '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"1000000000000000000","type":"EXACT_INPUT"}',
        },
    },
    {
        inputs: {
            query: "Exchange 100 USDC for ETH on Uniswap",
        },
        referenceOutputs: {
            tool: "uniswap_swap_tokens",
            response:
                '{"tokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOut":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amount":"100000000","type":"EXACT_INPUT"}',
        },
    },
    {
        inputs: {
            query: "Trade 50 DAI for USDC on Uniswap",
        },
        referenceOutputs: {
            tool: "uniswap_swap_tokens",
            response:
                '{"tokenIn":"0x6B175474E89094C44Da98b954EedeAC495271d0F","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"50000000000000000000","type":"EXACT_INPUT"}',
        },
    },
];

/**
 * Combined dataset for all Uniswap tools
 */
export const UNISWAP_ALL_TOOLS_DATASET: EvalDataset = [
    ...UNISWAP_CHECK_APPROVAL_DATASET,
    ...UNISWAP_GET_QUOTE_DATASET,
    ...UNISWAP_SWAP_TOKENS_DATASET,
];
