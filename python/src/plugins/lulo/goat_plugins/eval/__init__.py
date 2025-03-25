# Dataset for testing Lulo deposit USDC tool
LULO_DEPOSIT_USDC_DATASET = [
    {
        "inputs": {
            "query": "Deposit 100 USDC into Lulo",
        },
        "referenceOutputs": {
            "tool": "deposit_usdc",
            "response": '{"amount":"100"}',
        },
    },
    {
        "inputs": {
            "query": "I want to add 50 USDC to my Lulo account",
        },
        "referenceOutputs": {
            "tool": "deposit_usdc",
            "response": '{"amount":"50"}',
        },
    },
    {
        "inputs": {
            "query": "Transfer 25.5 USDC to Lulo",
        },
        "referenceOutputs": {
            "tool": "deposit_usdc",
            "response": '{"amount":"25.5"}',
        },
    },
]

# Combined dataset for all Lulo tools
LULO_ALL_TOOLS_DATASET = LULO_DEPOSIT_USDC_DATASET
