// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Synth API prediction best in one day first path tool
 */
export const SYNTH_API_PREDICTION_BEST_FIRST_PATH_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the predicted Bitcoin price for the next 24 hours according to the best miner on Synth API?",
        },
        referenceOutputs: {
            tool: "synth_api_prediction_best_in_one_day_first_path",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Show me the first path of Bitcoin price predictions for the next day from Synth API",
        },
        referenceOutputs: {
            tool: "synth_api_prediction_best_in_one_day_first_path",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Get the most likely Bitcoin price trajectory for the next 24 hours from Synth API",
        },
        referenceOutputs: {
            tool: "synth_api_prediction_best_in_one_day_first_path",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing Synth API prediction best in one day tool
 */
export const SYNTH_API_PREDICTION_BEST_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What are all the possible Bitcoin price paths for the next 24 hours according to Synth API?",
        },
        referenceOutputs: {
            tool: "synth_api_prediction_best_in_one_day",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Show me all 100 prediction paths for Bitcoin price over the next day from Synth API",
        },
        referenceOutputs: {
            tool: "synth_api_prediction_best_in_one_day",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Get all possible Bitcoin price trajectories for the next 24 hours from the best miner on Synth API",
        },
        referenceOutputs: {
            tool: "synth_api_prediction_best_in_one_day",
            response: "{}",
        },
    },
];

/**
 * Combined dataset for all Synth API tools
 */
export const SYNTH_API_ALL_TOOLS_DATASET: EvalDataset = [
    ...SYNTH_API_PREDICTION_BEST_FIRST_PATH_DATASET,
    ...SYNTH_API_PREDICTION_BEST_DATASET,
];
