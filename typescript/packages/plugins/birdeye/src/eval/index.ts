// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Birdeye token price tool
 */
export const BIRDEYE_TOKEN_PRICE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the current price of SOL?",
        },
        referenceOutputs: {
            tool: "birdeye_get_token_price",
            response: '{"list_address":["So11111111111111111111111111111111111111112"],"chain":"solana"}',
        },
    },
    {
        inputs: {
            query: "Get the price of USDC and include liquidity information",
        },
        referenceOutputs: {
            tool: "birdeye_get_token_price",
            response:
                '{"list_address":["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"],"include_liquidity":true,"chain":"solana"}',
        },
    },
];

/**
 * Dataset for testing Birdeye token history price tool
 */
export const BIRDEYE_TOKEN_HISTORY_PRICE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me the price history of SOL for the last 7 days",
        },
        referenceOutputs: {
            tool: "birdeye_get_token_history_price",
            response: '{"address":"So11111111111111111111111111111111111111112","type":"day","chain":"solana"}',
        },
    },
];

/**
 * Dataset for testing Birdeye OHLCV tool
 */
export const BIRDEYE_OHLCV_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the OHLCV data for SOL",
        },
        referenceOutputs: {
            tool: "birdeye_get_ohlcv",
            response: '{"address":"So11111111111111111111111111111111111111112","type":"day","chain":"solana"}',
        },
    },
];

/**
 * Dataset for testing Birdeye OHLCV pair tool
 */
export const BIRDEYE_OHLCV_PAIR_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the OHLCV data for the SOL/USDC pair",
        },
        referenceOutputs: {
            tool: "birdeye_get_ohlcv_pair",
            response: '{"address":"8HoQnePLqPj4M7PUDzfw8e3Ymdwgc7NLGnaTUapubyvu","type":"day"}',
        },
    },
];

/**
 * Dataset for testing Birdeye token security tool
 */
export const BIRDEYE_TOKEN_SECURITY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Check the security of the SOL token",
        },
        referenceOutputs: {
            tool: "birdeye_get_token_security",
            response: '{"address":"So11111111111111111111111111111111111111112","chain":"solana"}',
        },
    },
];

/**
 * Dataset for testing Birdeye trending tokens tool
 */
export const BIRDEYE_TRENDING_TOKENS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me the trending tokens on Solana",
        },
        referenceOutputs: {
            tool: "birdeye_get_trending_tokens",
            response: '{"chain":"solana"}',
        },
    },
];

/**
 * Dataset for testing Birdeye search token tool
 */
export const BIRDEYE_SEARCH_TOKEN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Search for tokens with 'sol' in the name",
        },
        referenceOutputs: {
            tool: "birdeye_search_token",
            response: '{"query":"sol","chain":"solana"}',
        },
    },
];

/**
 * Combined dataset for all Birdeye tools
 */
export const BIRDEYE_ALL_TOOLS_DATASET: EvalDataset = [
    ...BIRDEYE_TOKEN_PRICE_DATASET,
    ...BIRDEYE_TOKEN_HISTORY_PRICE_DATASET,
    ...BIRDEYE_OHLCV_DATASET,
    ...BIRDEYE_OHLCV_PAIR_DATASET,
    ...BIRDEYE_TOKEN_SECURITY_DATASET,
    ...BIRDEYE_TRENDING_TOKENS_DATASET,
    ...BIRDEYE_SEARCH_TOKEN_DATASET,
];
