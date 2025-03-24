# Dataset for testing Dexscreener get pairs by chain and pair tool
DEXSCREENER_GET_PAIRS_BY_CHAIN_AND_PAIR_DATASET = [
    {
        "inputs": {
            "query": "Get information about the ETH-USDC pair on Ethereum from Dexscreener",
        },
        "referenceOutputs": {
            "tool": "get_pairs_by_chain_and_pair",
            "response": '{"chainId":"ethereum","pairId":"0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"}',
        },
    },
    {
        "inputs": {
            "query": "Show me details for the SOL-USDC pair on Solana from Dexscreener",
        },
        "referenceOutputs": {
            "tool": "get_pairs_by_chain_and_pair",
            "response": '{"chainId":"solana","pairId":"58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2"}',
        },
    },
    {
        "inputs": {
            "query": "Find the trading pair MATIC-USDT on Polygon using Dexscreener",
        },
        "referenceOutputs": {
            "tool": "get_pairs_by_chain_and_pair",
            "response": '{"chainId":"polygon","pairId":"0x604229c960e5cacf2aaeac8be68ac07ba9df81c3"}',
        },
    },
]

# Dataset for testing Dexscreener search pairs tool
DEXSCREENER_SEARCH_PAIRS_DATASET = [
    {
        "inputs": {
            "query": "Search for Bitcoin pairs on Dexscreener",
        },
        "referenceOutputs": {
            "tool": "search_pairs",
            "response": '{"query":"Bitcoin"}',
        },
    },
    {
        "inputs": {
            "query": "Find all trading pairs for Ethereum on Dexscreener",
        },
        "referenceOutputs": {
            "tool": "search_pairs",
            "response": '{"query":"Ethereum"}',
        },
    },
    {
        "inputs": {
            "query": "Look up Solana trading pairs on Dexscreener",
        },
        "referenceOutputs": {
            "tool": "search_pairs",
            "response": '{"query":"Solana"}',
        },
    },
]

# Dataset for testing Dexscreener get token pairs by token address tool
DEXSCREENER_GET_TOKEN_PAIRS_BY_TOKEN_ADDRESS_DATASET = [
    {
        "inputs": {
            "query": "Get all pairs for USDC token with address 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 on Dexscreener",
        },
        "referenceOutputs": {
            "tool": "get_token_pairs_by_token_address",
            "response": '{"tokenAddresses":["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]}',
        },
    },
    {
        "inputs": {
            "query": "Find trading pairs for tokens 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 and 0x6B175474E89094C44Da98b954EedeAC495271d0F on Dexscreener",
        },
        "referenceOutputs": {
            "tool": "get_token_pairs_by_token_address",
            "response": '{"tokenAddresses":["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","0x6B175474E89094C44Da98b954EedeAC495271d0F"]}',
        },
    },
]

# Combined dataset for all Dexscreener tools
DEXSCREENER_ALL_TOOLS_DATASET = (
    DEXSCREENER_GET_PAIRS_BY_CHAIN_AND_PAIR_DATASET +
    DEXSCREENER_SEARCH_PAIRS_DATASET +
    DEXSCREENER_GET_TOKEN_PAIRS_BY_TOKEN_ADDRESS_DATASET
)
