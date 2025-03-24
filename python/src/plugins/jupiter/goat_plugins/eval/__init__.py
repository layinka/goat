# Dataset for testing Jupiter get quote tool
JUPITER_GET_QUOTE_DATASET = [
    {
        "inputs": {
            "query": "Get a quote for swapping 1 SOL to USDC on Jupiter",
        },
        "referenceOutputs": {
            "tool": "get_quote",
            "response": '{"inputMint":"So11111111111111111111111111111111111111112","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","amount":"1000000000","swapMode":"ExactIn"}',
        },
    },
    {
        "inputs": {
            "query": "How much USDC will I get for 0.5 SOL on Jupiter?",
        },
        "referenceOutputs": {
            "tool": "get_quote",
            "response": '{"inputMint":"So11111111111111111111111111111111111111112","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","amount":"500000000","swapMode":"ExactIn"}',
        },
    },
    {
        "inputs": {
            "query": "Check the price of swapping 100 USDC to SOL with 0.5% slippage on Jupiter",
        },
        "referenceOutputs": {
            "tool": "get_quote",
            "response": '{"inputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outputMint":"So11111111111111111111111111111111111111112","amount":"100000000","swapMode":"ExactIn","slippageBps":"50"}',
        },
    },
]

# Dataset for testing Jupiter swap tokens tool
JUPITER_SWAP_TOKENS_DATASET = [
    {
        "inputs": {
            "query": "Swap 1 SOL to USDC on Jupiter",
        },
        "referenceOutputs": {
            "tool": "swap_tokens",
            "response": '{"inputMint":"So11111111111111111111111111111111111111112","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","amount":"1000000000","swapMode":"ExactIn"}',
        },
    },
    {
        "inputs": {
            "query": "Exchange 50 USDC for SOL on Jupiter DEX",
        },
        "referenceOutputs": {
            "tool": "swap_tokens",
            "response": '{"inputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outputMint":"So11111111111111111111111111111111111111112","amount":"50000000","swapMode":"ExactIn"}',
        },
    },
    {
        "inputs": {
            "query": "Trade 10 BONK for USDC with 1% slippage on Jupiter",
        },
        "referenceOutputs": {
            "tool": "swap_tokens",
            "response": '{"inputMint":"DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263","outputMint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","amount":"10000000000","swapMode":"ExactIn","slippageBps":"100"}',
        },
    },
]

# Combined dataset for all Jupiter tools
JUPITER_ALL_TOOLS_DATASET = (
    JUPITER_GET_QUOTE_DATASET +
    JUPITER_SWAP_TOKENS_DATASET
)
