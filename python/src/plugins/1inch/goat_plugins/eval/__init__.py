# Dataset for testing 1inch get balances tool
ONEINCH_GET_BALANCES_DATASET = [
    {
        "inputs": {
            "query": "Get my token balances on 1inch for Ethereum mainnet",
        },
        "referenceOutputs": {
            "tool": "1inch_get_balances",
            "response": '{"wallet_address":"0x1234567890123456789012345678901234567890","chain_id":1}',
        },
    },
    {
        "inputs": {
            "query": "Check the balances of address 0xabcdef1234567890abcdef1234567890abcdef12 on Polygon using 1inch",
        },
        "referenceOutputs": {
            "tool": "1inch_get_balances",
            "response": '{"wallet_address":"0xabcdef1234567890abcdef1234567890abcdef12","chain_id":137}',
        },
    },
    {
        "inputs": {
            "query": "Show me the token balances for wallet 0x9876543210987654321098765432109876543210 on Optimism via 1inch",
        },
        "referenceOutputs": {
            "tool": "1inch_get_balances",
            "response": '{"wallet_address":"0x9876543210987654321098765432109876543210","chain_id":10}',
        },
    },
]

# Combined dataset for all 1inch tools
ONEINCH_ALL_TOOLS_DATASET = ONEINCH_GET_BALANCES_DATASET
