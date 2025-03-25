# Dataset for testing Debridge get supported chains tool
DEBRIDGE_GET_SUPPORTED_CHAINS_DATASET = [
    {
        "inputs": {
            "query": "What chains are supported by deBridge Liquidity Network?",
        },
        "referenceOutputs": {
            "tool": "get_supported_chains",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "Show me all the blockchains that deBridge works with",
        },
        "referenceOutputs": {
            "tool": "get_supported_chains",
            "response": '{}',
        },
    },
]

# Dataset for testing Debridge get token list tool
DEBRIDGE_GET_TOKEN_LIST_DATASET = [
    {
        "inputs": {
            "query": "What tokens are supported by deBridge on Ethereum?",
        },
        "referenceOutputs": {
            "tool": "get_token_list",
            "response": '{"chainId":1}',
        },
    },
    {
        "inputs": {
            "query": "Show me the list of tokens available on deBridge for Polygon",
        },
        "referenceOutputs": {
            "tool": "get_token_list",
            "response": '{"chainId":137}',
        },
    },
]

# Dataset for testing Debridge get order data tool
DEBRIDGE_GET_ORDER_DATA_DATASET = [
    {
        "inputs": {
            "query": "Get the details for deBridge order with ID 0x1234567890123456789012345678901234567890123456789012345678901234",
        },
        "referenceOutputs": {
            "tool": "get_order_data",
            "response": '{"id":"0x1234567890123456789012345678901234567890123456789012345678901234"}',
        },
    },
    {
        "inputs": {
            "query": "Show me information about deBridge order 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        },
        "referenceOutputs": {
            "tool": "get_order_data",
            "response": '{"id":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"}',
        },
    },
]

# Dataset for testing Debridge get order status tool
DEBRIDGE_GET_ORDER_STATUS_DATASET = [
    {
        "inputs": {
            "query": "What is the status of deBridge order 0x1234567890123456789012345678901234567890123456789012345678901234?",
        },
        "referenceOutputs": {
            "tool": "get_order_status",
            "response": '{"id":"0x1234567890123456789012345678901234567890123456789012345678901234"}',
        },
    },
    {
        "inputs": {
            "query": "Check if deBridge order 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 is completed",
        },
        "referenceOutputs": {
            "tool": "get_order_status",
            "response": '{"id":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"}',
        },
    },
]

# Dataset for testing Debridge get order IDs tool
DEBRIDGE_GET_ORDER_IDS_DATASET = [
    {
        "inputs": {
            "query": "Get the order IDs for deBridge transaction 0x1234567890123456789012345678901234567890123456789012345678901234",
        },
        "referenceOutputs": {
            "tool": "get_order_IDs",
            "response": '{"hash":"0x1234567890123456789012345678901234567890123456789012345678901234"}',
        },
    },
    {
        "inputs": {
            "query": "What orders were created in deBridge transaction 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890?",
        },
        "referenceOutputs": {
            "tool": "get_order_IDs",
            "response": '{"hash":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"}',
        },
    },
]

# Dataset for testing Debridge cancel order tool
DEBRIDGE_CANCEL_ORDER_DATASET = [
    {
        "inputs": {
            "query": "Cancel deBridge order 0x1234567890123456789012345678901234567890123456789012345678901234",
        },
        "referenceOutputs": {
            "tool": "cancel_order",
            "response": '{"id":"0x1234567890123456789012345678901234567890123456789012345678901234"}',
        },
    },
    {
        "inputs": {
            "query": "Stop the deBridge order with ID 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        },
        "referenceOutputs": {
            "tool": "cancel_order",
            "response": '{"id":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"}',
        },
    },
]

# Dataset for testing Debridge cancel external call tool
DEBRIDGE_CANCEL_EXTERNAL_CALL_DATASET = [
    {
        "inputs": {
            "query": "Cancel the external call in deBridge order 0x1234567890123456789012345678901234567890123456789012345678901234",
        },
        "referenceOutputs": {
            "tool": "cancel_external_call",
            "response": '{"id":"0x1234567890123456789012345678901234567890123456789012345678901234"}',
        },
    },
    {
        "inputs": {
            "query": "Stop the external call for deBridge order 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        },
        "referenceOutputs": {
            "tool": "cancel_external_call",
            "response": '{"id":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"}',
        },
    },
]

# Dataset for testing Debridge create order transaction tool
DEBRIDGE_CREATE_ORDER_TRANSACTION_DATASET = [
    {
        "inputs": {
            "query": "Create a cross-chain order on deBridge to swap 1 ETH on Ethereum to USDC on Polygon",
        },
        "referenceOutputs": {
            "tool": "create_order_transaction",
            "response": '{"srcChainId":1,"srcChainTokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","srcChainTokenInAmount":"1000000000000000000","dstChainId":137,"dstChainTokenOut":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}',
        },
    },
    {
        "inputs": {
            "query": "Place a deBridge DLN order to transfer 100 USDC from Polygon to Arbitrum",
        },
        "referenceOutputs": {
            "tool": "create_order_transaction",
            "response": '{"srcChainId":137,"srcChainTokenIn":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","srcChainTokenInAmount":"100000000","dstChainId":42161,"dstChainTokenOut":"0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"}',
        },
    },
]

# Dataset for testing Debridge single chain swap estimation tool
DEBRIDGE_SINGLE_CHAIN_SWAP_ESTIMATION_DATASET = [
    {
        "inputs": {
            "query": "Estimate swapping 1 ETH to USDC on Ethereum using deBridge",
        },
        "referenceOutputs": {
            "tool": "single_chain_swap_estimation",
            "response": '{"chainId":1,"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenInAmount":"1000000000000000000","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        "inputs": {
            "query": "How much DAI will I get for 100 USDC on Polygon with deBridge?",
        },
        "referenceOutputs": {
            "tool": "single_chain_swap_estimation",
            "response": '{"chainId":137,"tokenIn":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","tokenInAmount":"100000000","tokenOut":"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"}',
        },
    },
]

# Dataset for testing Debridge single chain swap transaction tool
DEBRIDGE_SINGLE_CHAIN_SWAP_TRANSACTION_DATASET = [
    {
        "inputs": {
            "query": "Swap 1 ETH to USDC on Ethereum using deBridge",
        },
        "referenceOutputs": {
            "tool": "single_chain_swap_transaction",
            "response": '{"chainId":1,"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenInAmount":"1000000000000000000","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOutRecipient":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        "inputs": {
            "query": "Exchange 100 USDC for DAI on Polygon with deBridge and send to 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        "referenceOutputs": {
            "tool": "single_chain_swap_transaction",
            "response": '{"chainId":137,"tokenIn":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","tokenInAmount":"100000000","tokenOut":"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063","tokenOutRecipient":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
]

# Combined dataset for all Debridge tools
DEBRIDGE_ALL_TOOLS_DATASET = (
    DEBRIDGE_GET_SUPPORTED_CHAINS_DATASET +
    DEBRIDGE_GET_TOKEN_LIST_DATASET +
    DEBRIDGE_GET_ORDER_DATA_DATASET +
    DEBRIDGE_GET_ORDER_STATUS_DATASET +
    DEBRIDGE_GET_ORDER_IDS_DATASET +
    DEBRIDGE_CANCEL_ORDER_DATASET +
    DEBRIDGE_CANCEL_EXTERNAL_CALL_DATASET +
    DEBRIDGE_CREATE_ORDER_TRANSACTION_DATASET +
    DEBRIDGE_SINGLE_CHAIN_SWAP_ESTIMATION_DATASET +
    DEBRIDGE_SINGLE_CHAIN_SWAP_TRANSACTION_DATASET
)
