# Dataset for testing JSON-RPC function tool
JSONRPC_FUNC_DATASET = [
    {
        "inputs": {
            "query": "Call the eth_blockNumber method on the Ethereum JSON-RPC endpoint",
        },
        "referenceOutputs": {
            "tool": "JSONRpcFunc",
            "response": '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}',
        },
    },
    {
        "inputs": {
            "query": "Get the balance of address 0x1234567890123456789012345678901234567890 using JSON-RPC",
        },
        "referenceOutputs": {
            "tool": "JSONRpcFunc",
            "response": '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x1234567890123456789012345678901234567890","latest"],"id":1}',
        },
    },
    {
        "inputs": {
            "query": "Retrieve transaction details for hash 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 via JSON-RPC",
        },
        "referenceOutputs": {
            "tool": "JSONRpcFunc",
            "response": '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"],"id":1}',
        },
    },
]

# Combined dataset for all JSON-RPC tools
JSONRPC_ALL_TOOLS_DATASET = JSONRPC_FUNC_DATASET
