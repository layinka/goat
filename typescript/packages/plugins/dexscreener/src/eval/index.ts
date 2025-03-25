// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Dexscreener get pairs by chain and pair tool
 */
export const DEXSCREENER_GET_PAIRS_BY_CHAIN_AND_PAIR_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get information about the ETH-USDC pair on Ethereum",
        },
        referenceOutputs: {
            tool: "dexscreener_get_pairs_by_chain_and_pair",
            response: '{"chainId":"ethereum","pairId":"0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"}',
        },
    },
    {
        inputs: {
            query: "Show me details for the SOL-USDC pair on Solana",
        },
        referenceOutputs: {
            tool: "dexscreener_get_pairs_by_chain_and_pair",
            response: '{"chainId":"solana","pairId":"58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2"}',
        },
    },
];

/**
 * Dataset for testing Dexscreener search pairs tool
 */
export const DEXSCREENER_SEARCH_PAIRS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Search for Bitcoin pairs on Dexscreener",
        },
        referenceOutputs: {
            tool: "dexscreener_search_pairs",
            response: '{"query":"Bitcoin"}',
        },
    },
    {
        inputs: {
            query: "Find trading pairs for Ethereum on Dexscreener",
        },
        referenceOutputs: {
            tool: "dexscreener_search_pairs",
            response: '{"query":"Ethereum"}',
        },
    },
    {
        inputs: {
            query: "Look up Uniswap V3 pools on Dexscreener",
        },
        referenceOutputs: {
            tool: "dexscreener_search_pairs",
            response: '{"query":"Uniswap V3"}',
        },
    },
];

/**
 * Dataset for testing Dexscreener get token pairs by token address tool
 */
export const DEXSCREENER_GET_TOKEN_PAIRS_BY_TOKEN_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get all pairs for USDC token with address 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        },
        referenceOutputs: {
            tool: "dexscreener_get_token_pairs_by_token_address",
            response: '{"tokenAddresses":["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]}',
        },
    },
    {
        inputs: {
            query: "Find all trading pairs for tokens 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 and 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        },
        referenceOutputs: {
            tool: "dexscreener_get_token_pairs_by_token_address",
            response:
                '{"tokenAddresses":["0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984","0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"]}',
        },
    },
];

/**
 * Combined dataset for all Dexscreener tools
 */
export const DEXSCREENER_ALL_TOOLS_DATASET: EvalDataset = [
    ...DEXSCREENER_GET_PAIRS_BY_CHAIN_AND_PAIR_DATASET,
    ...DEXSCREENER_SEARCH_PAIRS_DATASET,
    ...DEXSCREENER_GET_TOKEN_PAIRS_BY_TOKEN_ADDRESS_DATASET,
];
