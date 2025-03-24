// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing CoinMarketCap cryptocurrency listings tool
 */
export const COINMARKETCAP_CRYPTOCURRENCY_LISTINGS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me the top 10 cryptocurrencies by market cap",
        },
        referenceOutputs: {
            tool: "getCryptocurrencyListings",
            response:
                '{"start":1,"limit":10,"sort":"market_cap","sort_dir":"desc","cryptocurrency_type":"all","tag":"all","aux":["platform","tags","date_added","circulating_supply","total_supply","max_supply","cmc_rank","num_market_pairs"],"convert":"USD"}',
        },
    },
];

/**
 * Dataset for testing CoinMarketCap cryptocurrency quotes tool
 */
export const COINMARKETCAP_CRYPTOCURRENCY_QUOTES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the current price of Bitcoin and Ethereum?",
        },
        referenceOutputs: {
            tool: "getCryptocurrencyQuotes",
            response:
                '{"symbol":["BTC","ETH"],"convert":"USD","aux":["num_market_pairs","cmc_rank","date_added","tags","platform","max_supply","circulating_supply","total_supply"]}',
        },
    },
];

/**
 * Dataset for testing CoinMarketCap exchange listings tool
 */
export const COINMARKETCAP_EXCHANGE_LISTINGS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "List the top 5 cryptocurrency exchanges by volume",
        },
        referenceOutputs: {
            tool: "getExchangeListings",
            response:
                '{"start":1,"limit":5,"sort":"volume_24h","sort_dir":"desc","market_type":"all","aux":["num_market_pairs","fiats","tags"]}',
        },
    },
];

/**
 * Dataset for testing CoinMarketCap exchange quotes tool
 */
export const COINMARKETCAP_EXCHANGE_QUOTES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the latest data for Binance and Coinbase exchanges",
        },
        referenceOutputs: {
            tool: "getExchangeQuotes",
            response:
                '{"slug":["binance","coinbase-exchange"],"convert":"USD","aux":["num_market_pairs","fiats","tags"]}',
        },
    },
];

/**
 * Dataset for testing CoinMarketCap content tool
 */
export const COINMARKETCAP_CONTENT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me the latest news about Bitcoin",
        },
        referenceOutputs: {
            tool: "getContent",
            response:
                '{"start":1,"limit":10,"symbol":["BTC"],"news_type":"all","content_type":"news","category":"all","language":"en"}',
        },
    },
];

/**
 * Dataset for testing CoinMarketCap cryptocurrency map tool
 */
export const COINMARKETCAP_CRYPTOCURRENCY_MAP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the CoinMarketCap ID for Bitcoin, Ethereum, and Solana",
        },
        referenceOutputs: {
            tool: "getCryptocurrencyMap",
            response:
                '{"listing_status":"active","start":1,"limit":5000,"sort":"cmc_rank","symbol":["BTC","ETH","SOL"],"aux":["platform","first_historical_data","last_historical_data","is_active"]}',
        },
    },
];

/**
 * Dataset for testing CoinMarketCap cryptocurrency OHLCV tool
 */
export const COINMARKETCAP_CRYPTOCURRENCY_OHLCV_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the OHLCV data for Bitcoin",
        },
        referenceOutputs: {
            tool: "getCryptocurrencyOHLCV",
            response: '{"symbol":["BTC"],"convert":"USD","skip_invalid":true}',
        },
    },
];

/**
 * Dataset for testing CoinMarketCap cryptocurrency trending tool
 */
export const COINMARKETCAP_CRYPTOCURRENCY_TRENDING_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What are the trending cryptocurrencies in the last 24 hours?",
        },
        referenceOutputs: {
            tool: "getCryptocurrencyTrending",
            response: '{"start":1,"limit":10,"time_period":"24h","convert":"USD"}',
        },
    },
];

/**
 * Dataset for testing CoinMarketCap cryptocurrency most visited tool
 */
export const COINMARKETCAP_CRYPTOCURRENCY_MOST_VISITED_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Which cryptocurrencies are most visited on CoinMarketCap this week?",
        },
        referenceOutputs: {
            tool: "getCryptocurrencyMostVisited",
            response: '{"start":1,"limit":10,"time_period":"7d","convert":"USD"}',
        },
    },
];

/**
 * Dataset for testing CoinMarketCap cryptocurrency gainers losers tool
 */
export const COINMARKETCAP_CRYPTOCURRENCY_GAINERS_LOSERS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me the top gainers in the last 24 hours",
        },
        referenceOutputs: {
            tool: "getCryptocurrencyGainersLosers",
            response:
                '{"start":1,"limit":10,"time_period":"24h","convert":"USD","sort":"percent_change_24h","sort_dir":"desc"}',
        },
    },
    {
        inputs: {
            query: "What are the biggest losers in the crypto market today?",
        },
        referenceOutputs: {
            tool: "getCryptocurrencyGainersLosers",
            response:
                '{"start":1,"limit":10,"time_period":"24h","convert":"USD","sort":"percent_change_24h","sort_dir":"asc"}',
        },
    },
];

/**
 * Combined dataset for all CoinMarketCap tools
 */
export const COINMARKETCAP_ALL_TOOLS_DATASET: EvalDataset = [
    ...COINMARKETCAP_CRYPTOCURRENCY_LISTINGS_DATASET,
    ...COINMARKETCAP_CRYPTOCURRENCY_QUOTES_DATASET,
    ...COINMARKETCAP_EXCHANGE_LISTINGS_DATASET,
    ...COINMARKETCAP_EXCHANGE_QUOTES_DATASET,
    ...COINMARKETCAP_CONTENT_DATASET,
    ...COINMARKETCAP_CRYPTOCURRENCY_MAP_DATASET,
    ...COINMARKETCAP_CRYPTOCURRENCY_OHLCV_DATASET,
    ...COINMARKETCAP_CRYPTOCURRENCY_TRENDING_DATASET,
    ...COINMARKETCAP_CRYPTOCURRENCY_MOST_VISITED_DATASET,
    ...COINMARKETCAP_CRYPTOCURRENCY_GAINERS_LOSERS_DATASET,
];
