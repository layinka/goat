# Dataset for testing Nansen get token details tool
NANSEN_GET_TOKEN_DETAILS_DATASET = [
    {
        "inputs": {
            "query": "Get details for the Ethereum token at address 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 from Nansen",
        },
        "referenceOutputs": {
            "tool": "get_token_details",
            "response": '{"address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}',
        },
    },
    {
        "inputs": {
            "query": "Show me information about the USDC token with address 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 on Nansen",
        },
        "referenceOutputs": {
            "tool": "get_token_details",
            "response": '{"address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        "inputs": {
            "query": "Look up token details for 0x6B175474E89094C44Da98b954EedeAC495271d0F using Nansen",
        },
        "referenceOutputs": {
            "tool": "get_token_details",
            "response": '{"address":"0x6B175474E89094C44Da98b954EedeAC495271d0F"}',
        },
    },
]

# Dataset for testing Nansen get token trades tool
NANSEN_GET_TOKEN_TRADES_DATASET = [
    {
        "inputs": {
            "query": "Get trades for Ethereum token 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 from January 1, 2023 to February 1, 2023 on Nansen",
        },
        "referenceOutputs": {
            "tool": "get_token_trades",
            "response": '{"address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","start_date":"2023-01-01","end_date":"2023-02-01"}',
        },
    },
    {
        "inputs": {
            "query": "Show me USDC trades between March 15, 2023 and April 15, 2023 using Nansen",
        },
        "referenceOutputs": {
            "tool": "get_token_trades",
            "response": '{"address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","start_date":"2023-03-15","end_date":"2023-04-15"}',
        },
    },
]

# Dataset for testing Nansen get NFT details tool
NANSEN_GET_NFT_DETAILS_DATASET = [
    {
        "inputs": {
            "query": "Get details for the NFT collection at address 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D on Nansen",
        },
        "referenceOutputs": {
            "tool": "get_nft_details",
            "response": '{"token_address":"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D","nft_id":""}',
        },
    },
    {
        "inputs": {
            "query": "Show me information about the NFT with token ID 1234 in collection 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D using Nansen",
        },
        "referenceOutputs": {
            "tool": "get_nft_details",
            "response": '{"token_address":"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D","nft_id":"1234"}',
        },
    },
]

# Dataset for testing Nansen get NFT trades tool
NANSEN_GET_NFT_TRADES_DATASET = [
    {
        "inputs": {
            "query": "Get trades for the NFT collection at address 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D from January 1, 2023 to February 1, 2023 on Nansen",
        },
        "referenceOutputs": {
            "tool": "get_nft_trades",
            "response": '{"token_address":"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D","nft_id":"","start_date":"2023-01-01","end_date":"2023-02-01"}',
        },
    },
    {
        "inputs": {
            "query": "Show me trades for NFT with token ID 1234 in collection 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D between March 15, 2023 and April 15, 2023 using Nansen",
        },
        "referenceOutputs": {
            "tool": "get_nft_trades",
            "response": '{"token_address":"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D","nft_id":"1234","start_date":"2023-03-15","end_date":"2023-04-15"}',
        },
    },
]

# Dataset for testing Nansen get smart money status tool
NANSEN_GET_SMART_MONEY_STATUS_DATASET = [
    {
        "inputs": {
            "query": "Get smart money flows from January 1, 2023 to February 1, 2023 on Nansen",
        },
        "referenceOutputs": {
            "tool": "get_smart_money_status",
            "response": '{"start_date":"2023-01-01","end_date":"2023-02-01"}',
        },
    },
    {
        "inputs": {
            "query": "Show me smart money flows for token 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 between March 15, 2023 and April 15, 2023 using Nansen",
        },
        "referenceOutputs": {
            "tool": "get_smart_money_status",
            "response": '{"token_address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","start_date":"2023-03-15","end_date":"2023-04-15"}',
        },
    },
]

# Dataset for testing Nansen get trading signal tool
NANSEN_GET_TRADING_SIGNAL_DATASET = [
    {
        "inputs": {
            "query": "Get trading signals from January 1, 2023 to February 1, 2023 on Nansen",
        },
        "referenceOutputs": {
            "tool": "get_trading_signal",
            "response": '{"start_date":"2023-01-01","end_date":"2023-02-01"}',
        },
    },
    {
        "inputs": {
            "query": "Show me trading signals for token 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 between March 15, 2023 and April 15, 2023 using Nansen",
        },
        "referenceOutputs": {
            "tool": "get_trading_signal",
            "response": '{"token_address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","start_date":"2023-03-15","end_date":"2023-04-15"}',
        },
    },
]

# Combined dataset for all Nansen tools
NANSEN_ALL_TOOLS_DATASET = (
    NANSEN_GET_TOKEN_DETAILS_DATASET +
    NANSEN_GET_TOKEN_TRADES_DATASET +
    NANSEN_GET_NFT_DETAILS_DATASET +
    NANSEN_GET_NFT_TRADES_DATASET +
    NANSEN_GET_SMART_MONEY_STATUS_DATASET +
    NANSEN_GET_TRADING_SIGNAL_DATASET
)
