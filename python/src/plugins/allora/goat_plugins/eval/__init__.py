# Dataset for testing Allora get price prediction tool
ALLORA_GET_PRICE_PREDICTION_DATASET = [
    {
        "inputs": {
            "query": "What is the predicted price of Bitcoin in the next 5 minutes according to Allora?",
        },
        "referenceOutputs": {
            "tool": "get_price_prediction",
            "response": '{"ticker":"BTC","timeframe":"5m"}',
        },
    },
    {
        "inputs": {
            "query": "Show me the 8-hour price prediction for ETH from Allora Network",
        },
        "referenceOutputs": {
            "tool": "get_price_prediction",
            "response": '{"ticker":"ETH","timeframe":"8h"}',
        },
    },
    {
        "inputs": {
            "query": "Get the Allora prediction for Bitcoin price over the next 8 hours",
        },
        "referenceOutputs": {
            "tool": "get_price_prediction",
            "response": '{"ticker":"BTC","timeframe":"8h"}',
        },
    },
]

# Combined dataset for all Allora tools
ALLORA_ALL_TOOLS_DATASET = ALLORA_GET_PRICE_PREDICTION_DATASET
