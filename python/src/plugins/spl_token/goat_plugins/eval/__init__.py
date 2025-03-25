# Dataset for testing SPL token get token info by symbol tool
SPL_GET_TOKEN_INFO_BY_SYMBOL_DATASET = [
    {
        "inputs": {
            "query": "What is the mint address for SOL on Solana?",
        },
        "referenceOutputs": {
            "tool": "get_token_info_by_symbol",
            "response": '{"symbol":"SOL"}',
        },
    },
    {
        "inputs": {
            "query": "Get information about the USDC token on Solana",
        },
        "referenceOutputs": {
            "tool": "get_token_info_by_symbol",
            "response": '{"symbol":"USDC"}',
        },
    },
    {
        "inputs": {
            "query": "Show me details for the BONK token on Solana",
        },
        "referenceOutputs": {
            "tool": "get_token_info_by_symbol",
            "response": '{"symbol":"BONK"}',
        },
    },
]

# Dataset for testing SPL token get token balance by mint address tool
SPL_GET_TOKEN_BALANCE_BY_MINT_ADDRESS_DATASET = [
    {
        "inputs": {
            "query": "What is my balance of token with mint address EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v on Solana?",
        },
        "referenceOutputs": {
            "tool": "get_token_balance_by_mint_address",
            "response": '{"walletAddress":"0x1234567890123456789012345678901234567890","mintAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"}',
        },
    },
    {
        "inputs": {
            "query": "Check my USDC balance on Solana with mint address EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        },
        "referenceOutputs": {
            "tool": "get_token_balance_by_mint_address",
            "response": '{"walletAddress":"0x1234567890123456789012345678901234567890","mintAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"}',
        },
    },
]

# Dataset for testing SPL token transfer by mint address tool
SPL_TRANSFER_TOKEN_BY_MINT_ADDRESS_DATASET = [
    {
        "inputs": {
            "query": "Transfer 1 USDC to address 5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8 on Solana",
        },
        "referenceOutputs": {
            "tool": "transfer_token_by_mint_address",
            "response": '{"to":"5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8","mintAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","amount":"1000000"}',
        },
    },
    {
        "inputs": {
            "query": "Send 10 BONK to DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 on Solana",
        },
        "referenceOutputs": {
            "tool": "transfer_token_by_mint_address",
            "response": '{"to":"DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263","mintAddress":"DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263","amount":"10000000000"}',
        },
    },
]

# Dataset for testing SPL token convert to base unit tool
SPL_CONVERT_TO_BASE_UNIT_DATASET = [
    {
        "inputs": {
            "query": "Convert 1 USDC to base units on Solana",
        },
        "referenceOutputs": {
            "tool": "convert_to_base_unit",
            "response": '{"amount":1,"decimals":6}',
        },
    },
    {
        "inputs": {
            "query": "How many lamports is 0.5 SOL on Solana?",
        },
        "referenceOutputs": {
            "tool": "convert_to_base_unit",
            "response": '{"amount":0.5,"decimals":9}',
        },
    },
    {
        "inputs": {
            "query": "Convert 10 BONK to its smallest unit on Solana",
        },
        "referenceOutputs": {
            "tool": "convert_to_base_unit",
            "response": '{"amount":10,"decimals":5}',
        },
    },
]

# Combined dataset for all SPL token tools
SPL_TOKEN_ALL_TOOLS_DATASET = (
    SPL_GET_TOKEN_INFO_BY_SYMBOL_DATASET +
    SPL_GET_TOKEN_BALANCE_BY_MINT_ADDRESS_DATASET +
    SPL_TRANSFER_TOKEN_BY_MINT_ADDRESS_DATASET +
    SPL_CONVERT_TO_BASE_UNIT_DATASET
)
