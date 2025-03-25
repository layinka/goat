// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Allora price prediction tool
 */
export const ALLORA_PRICE_PREDICTION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What will be the price of Bitcoin in 5 minutes?",
        },
        referenceOutputs: {
            tool: "getPricePrediction",
            response: '{"ticker":"BTC","timeframe":"5m"}',
        },
    },
    {
        inputs: {
            query: "Predict ETH price 8 hours from now",
        },
        referenceOutputs: {
            tool: "getPricePrediction",
            response: '{"ticker":"ETH","timeframe":"8h"}',
        },
    },
    {
        inputs: {
            query: "What's the 5 minute price prediction for BTC?",
        },
        referenceOutputs: {
            tool: "getPricePrediction",
            response: '{"ticker":"BTC","timeframe":"5m"}',
        },
    },
    {
        inputs: {
            query: "Give me the 8 hour forecast for Ethereum",
        },
        referenceOutputs: {
            tool: "getPricePrediction",
            response: '{"ticker":"ETH","timeframe":"8h"}',
        },
    },
];

/**
 * Combined dataset for all Allora tools
 */
export const ALLORA_ALL_TOOLS_DATASET: EvalDataset = [...ALLORA_PRICE_PREDICTION_DATASET];
