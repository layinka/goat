# Dataset for testing RugCheck get recently detected tokens tool
RUGCHECK_GET_RECENTLY_DETECTED_TOKENS_DATASET = [
    {
        "inputs": {
            "query": "What are the recently detected tokens on RugCheck?",
        },
        "referenceOutputs": {
            "tool": "get_recently_detected_tokens",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "Show me new tokens that were just detected by RugCheck",
        },
        "referenceOutputs": {
            "tool": "get_recently_detected_tokens",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "List the newest tokens on RugCheck",
        },
        "referenceOutputs": {
            "tool": "get_recently_detected_tokens",
            "response": '{}',
        },
    },
]

# Dataset for testing RugCheck get trending tokens 24h tool
RUGCHECK_GET_TRENDING_TOKENS_24H_DATASET = [
    {
        "inputs": {
            "query": "What are the trending tokens in the last 24 hours on RugCheck?",
        },
        "referenceOutputs": {
            "tool": "get_trending_tokens_24h",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "Show me the most popular tokens in the past day according to RugCheck",
        },
        "referenceOutputs": {
            "tool": "get_trending_tokens_24h",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "List trending cryptocurrencies from the last 24h on RugCheck",
        },
        "referenceOutputs": {
            "tool": "get_trending_tokens_24h",
            "response": '{}',
        },
    },
]

# Dataset for testing RugCheck get most voted tokens 24h tool
RUGCHECK_GET_MOST_VOTED_TOKENS_24H_DATASET = [
    {
        "inputs": {
            "query": "What are the most voted tokens in the last 24 hours on RugCheck?",
        },
        "referenceOutputs": {
            "tool": "get_most_voted_tokens_24h",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "Show me tokens with the highest number of votes in the past day on RugCheck",
        },
        "referenceOutputs": {
            "tool": "get_most_voted_tokens_24h",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "List the top voted cryptocurrencies from the last 24h on RugCheck",
        },
        "referenceOutputs": {
            "tool": "get_most_voted_tokens_24h",
            "response": '{}',
        },
    },
]

# Dataset for testing RugCheck get recently verified tokens tool
RUGCHECK_GET_RECENTLY_VERIFIED_TOKENS_DATASET = [
    {
        "inputs": {
            "query": "What are the recently verified tokens on RugCheck?",
        },
        "referenceOutputs": {
            "tool": "get_recently_verified_tokens",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "Show me tokens that were recently verified by RugCheck",
        },
        "referenceOutputs": {
            "tool": "get_recently_verified_tokens",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "List the newest verified cryptocurrencies on RugCheck",
        },
        "referenceOutputs": {
            "tool": "get_recently_verified_tokens",
            "response": '{}',
        },
    },
]

# Dataset for testing RugCheck generate token report summary tool
RUGCHECK_GENERATE_TOKEN_REPORT_SUMMARY_DATASET = [
    {
        "inputs": {
            "query": "Generate a report for token with mint address 0x1234567890123456789012345678901234567890 on RugCheck",
        },
        "referenceOutputs": {
            "tool": "generate_token_report_summary",
            "response": '{"mint":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        "inputs": {
            "query": "Check if token 0xabcdef1234567890abcdef1234567890abcdef12 is safe using RugCheck",
        },
        "referenceOutputs": {
            "tool": "generate_token_report_summary",
            "response": '{"mint":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        "inputs": {
            "query": "Get a RugCheck report summary for the token with address 0x9876543210987654321098765432109876543210",
        },
        "referenceOutputs": {
            "tool": "generate_token_report_summary",
            "response": '{"mint":"0x9876543210987654321098765432109876543210"}',
        },
    },
]

# Combined dataset for all RugCheck tools
RUGCHECK_ALL_TOOLS_DATASET = (
    RUGCHECK_GET_RECENTLY_DETECTED_TOKENS_DATASET +
    RUGCHECK_GET_TRENDING_TOKENS_24H_DATASET +
    RUGCHECK_GET_MOST_VOTED_TOKENS_24H_DATASET +
    RUGCHECK_GET_RECENTLY_VERIFIED_TOKENS_DATASET +
    RUGCHECK_GENERATE_TOKEN_REPORT_SUMMARY_DATASET
)
