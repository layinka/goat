# Dataset for testing Uniswap check approval tool
UNISWAP_CHECK_APPROVAL_DATASET = [
    {
        "inputs": {
            "query": "Check if I have enough approval for USDC token to swap on Uniswap",
        },
        "referenceOutputs": {
            "tool": "uniswap_check_approval",
            "response": '{"token":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"1000000","walletAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        "inputs": {
            "query": "Do I need to approve DAI for Uniswap trading?",
        },
        "referenceOutputs": {
            "tool": "uniswap_check_approval",
            "response": '{"token":"0x6B175474E89094C44Da98b954EedeAC495271d0F","amount":"1000000000000000000","walletAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        "inputs": {
            "query": "Verify if I have sufficient WETH approval for Uniswap",
        },
        "referenceOutputs": {
            "tool": "uniswap_check_approval",
            "response": '{"token":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amount":"1000000000000000000","walletAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
]

# Dataset for testing Uniswap get quote tool
UNISWAP_GET_QUOTE_DATASET = [
    {
        "inputs": {
            "query": "Get a quote for swapping 1 ETH to USDC on Uniswap",
        },
        "referenceOutputs": {
            "tool": "uniswap_get_quote",
            "response": '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"1000000000000000000"}',
        },
    },
    {
        "inputs": {
            "query": "How much DAI will I get for 0.5 ETH on Uniswap?",
        },
        "referenceOutputs": {
            "tool": "uniswap_get_quote",
            "response": '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0x6B175474E89094C44Da98b954EedeAC495271d0F","amount":"500000000000000000"}',
        },
    },
    {
        "inputs": {
            "query": "Check the price of swapping 100 USDC to ETH on Uniswap",
        },
        "referenceOutputs": {
            "tool": "uniswap_get_quote",
            "response": '{"tokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOut":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amount":"100000000"}',
        },
    },
]

# Dataset for testing Uniswap swap tokens tool
UNISWAP_SWAP_TOKENS_DATASET = [
    {
        "inputs": {
            "query": "Swap 1 ETH to USDC on Uniswap",
        },
        "referenceOutputs": {
            "tool": "uniswap_swap_tokens",
            "response": '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"1000000000000000000"}',
        },
    },
    {
        "inputs": {
            "query": "Exchange 50 USDC for ETH on Uniswap",
        },
        "referenceOutputs": {
            "tool": "uniswap_swap_tokens",
            "response": '{"tokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOut":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amount":"50000000"}',
        },
    },
    {
        "inputs": {
            "query": "Trade 10 DAI for USDC on Uniswap",
        },
        "referenceOutputs": {
            "tool": "uniswap_swap_tokens",
            "response": '{"tokenIn":"0x6B175474E89094C44Da98b954EedeAC495271d0F","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"10000000000000000000"}',
        },
    },
]

# Combined dataset for all Uniswap tools
UNISWAP_ALL_TOOLS_DATASET = (
    UNISWAP_CHECK_APPROVAL_DATASET +
    UNISWAP_GET_QUOTE_DATASET +
    UNISWAP_SWAP_TOKENS_DATASET
)
