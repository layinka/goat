// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Nansen get token details tool
 */
export const NANSEN_GET_TOKEN_DETAILS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get details for the USDC token at address 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        },
        referenceOutputs: {
            tool: "nansen_get_token_details",
            response: '{"address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        inputs: {
            query: "Show me information about the ETH token contract 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        },
        referenceOutputs: {
            tool: "nansen_get_token_details",
            response: '{"address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}',
        },
    },
];

/**
 * Dataset for testing Nansen get token trades tool
 */
export const NANSEN_GET_TOKEN_TRADES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get trades for USDC token 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 from 2023-01-01 to 2023-01-31",
        },
        referenceOutputs: {
            tool: "nansen_get_token_trades",
            response:
                '{"address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","start_date":"2023-01-01","end_date":"2023-01-31"}',
        },
    },
    {
        inputs: {
            query: "Show me the trading history for ETH token 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 between March 1, 2023 and March 15, 2023",
        },
        referenceOutputs: {
            tool: "nansen_get_token_trades",
            response:
                '{"address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","start_date":"2023-03-01","end_date":"2023-03-15"}',
        },
    },
];

/**
 * Dataset for testing Nansen get NFT details tool
 */
export const NANSEN_GET_NFT_DETAILS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get details for NFT collection 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D token ID 1234",
        },
        referenceOutputs: {
            tool: "nansen_get_nft_details",
            response: '{"token_address":"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D","nft_id":"1234"}',
        },
    },
    {
        inputs: {
            query: "Show me information about the CryptoPunk #5822 at address 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        },
        referenceOutputs: {
            tool: "nansen_get_nft_details",
            response: '{"token_address":"0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB","nft_id":"5822"}',
        },
    },
];

/**
 * Dataset for testing Nansen get NFT trades tool
 */
export const NANSEN_GET_NFT_TRADES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get trades for BAYC NFT collection 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D token ID 1234 from 2023-01-01 to 2023-01-31",
        },
        referenceOutputs: {
            tool: "nansen_get_nft_trades",
            response:
                '{"token_address":"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D","nft_id":"1234","start_date":"2023-01-01","end_date":"2023-01-31"}',
        },
    },
    {
        inputs: {
            query: "Show me the trading history for CryptoPunk #5822 at address 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB between March 1, 2023 and March 15, 2023",
        },
        referenceOutputs: {
            tool: "nansen_get_nft_trades",
            response:
                '{"token_address":"0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB","nft_id":"5822","start_date":"2023-03-01","end_date":"2023-03-15"}',
        },
    },
];

/**
 * Dataset for testing Nansen get smart money status tool
 */
export const NANSEN_GET_SMART_MONEY_STATUS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get smart money flows from January 1, 2023 to January 31, 2023",
        },
        referenceOutputs: {
            tool: "getSmartMoneyStatus",
            response: '{"start_date":"2023-01-01","end_date":"2023-01-31"}',
        },
    },
    {
        inputs: {
            query: "Show me smart money activity for token 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 between March 1, 2023 and March 15, 2023",
        },
        referenceOutputs: {
            tool: "getSmartMoneyStatus",
            response:
                '{"start_date":"2023-03-01","end_date":"2023-03-15","token_address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
];

/**
 * Dataset for testing Nansen get trading signal tool
 */
export const NANSEN_GET_TRADING_SIGNAL_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get trading signals from January 1, 2023 to January 31, 2023",
        },
        referenceOutputs: {
            tool: "nansen_get_trading_signal",
            response: '{"start_date":"2023-01-01","end_date":"2023-01-31"}',
        },
    },
    {
        inputs: {
            query: "Show me trading alerts for token 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 between March 1, 2023 and March 15, 2023",
        },
        referenceOutputs: {
            tool: "nansen_get_trading_signal",
            response:
                '{"start_date":"2023-03-01","end_date":"2023-03-15","token_address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
];

/**
 * Combined dataset for all Nansen tools
 */
export const NANSEN_ALL_TOOLS_DATASET: EvalDataset = [
    ...NANSEN_GET_TOKEN_DETAILS_DATASET,
    ...NANSEN_GET_TOKEN_TRADES_DATASET,
    ...NANSEN_GET_NFT_DETAILS_DATASET,
    ...NANSEN_GET_NFT_TRADES_DATASET,
    ...NANSEN_GET_SMART_MONEY_STATUS_DATASET,
    ...NANSEN_GET_TRADING_SIGNAL_DATASET,
];
