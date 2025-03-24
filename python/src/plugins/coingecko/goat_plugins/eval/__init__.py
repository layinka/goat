# Dataset for testing CoinGecko get trending coins tool
COINGECKO_GET_TRENDING_COINS_DATASET = [
    {
        "inputs": {
            "query": "What are the trending coins on CoinGecko?",
        },
        "referenceOutputs": {
            "tool": "get_trending_coins",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "Show me the most popular cryptocurrencies right now on CoinGecko",
        },
        "referenceOutputs": {
            "tool": "get_trending_coins",
            "response": '{}',
        },
    },
    {
        "inputs": {
            "query": "List trending crypto assets from CoinGecko",
        },
        "referenceOutputs": {
            "tool": "get_trending_coins",
            "response": '{}',
        },
    },
]

# Dataset for testing CoinGecko get coin price tool
COINGECKO_GET_COIN_PRICE_DATASET = [
    {
        "inputs": {
            "query": "What is the current price of Bitcoin in USD?",
        },
        "referenceOutputs": {
            "tool": "get_coin_price",
            "response": '{"coin_id":"bitcoin","vs_currency":"usd","include_market_cap":false,"include_24hr_vol":false,"include_24hr_change":false,"include_last_updated_at":false}',
        },
    },
    {
        "inputs": {
            "query": "Show me the price of Ethereum with market cap information",
        },
        "referenceOutputs": {
            "tool": "get_coin_price",
            "response": '{"coin_id":"ethereum","vs_currency":"usd","include_market_cap":true,"include_24hr_vol":false,"include_24hr_change":false,"include_last_updated_at":false}',
        },
    },
    {
        "inputs": {
            "query": "Get the price of Solana with 24-hour volume and price change",
        },
        "referenceOutputs": {
            "tool": "get_coin_price",
            "response": '{"coin_id":"solana","vs_currency":"usd","include_market_cap":false,"include_24hr_vol":true,"include_24hr_change":true,"include_last_updated_at":false}',
        },
    },
]

# Dataset for testing CoinGecko search coins tool
COINGECKO_SEARCH_COINS_DATASET = [
    {
        "inputs": {
            "query": "Search for Bitcoin on CoinGecko",
        },
        "referenceOutputs": {
            "tool": "search_coins",
            "response": '{"query":"bitcoin","exact_match":false}',
        },
    },
    {
        "inputs": {
            "query": "Find the exact match for ETH on CoinGecko",
        },
        "referenceOutputs": {
            "tool": "search_coins",
            "response": '{"query":"ETH","exact_match":true}',
        },
    },
    {
        "inputs": {
            "query": "Look up Cardano cryptocurrency on CoinGecko",
        },
        "referenceOutputs": {
            "tool": "search_coins",
            "response": '{"query":"Cardano","exact_match":false}',
        },
    },
]

# Combined dataset for all CoinGecko tools
COINGECKO_ALL_TOOLS_DATASET = (
    COINGECKO_GET_TRENDING_COINS_DATASET +
    COINGECKO_GET_COIN_PRICE_DATASET +
    COINGECKO_SEARCH_COINS_DATASET
)
