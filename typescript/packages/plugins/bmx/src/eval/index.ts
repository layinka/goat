// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing BMX open increase position tool
 */
export const BMX_OPEN_INCREASE_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Open a long position on BMX for ETH with 0.1 ETH at 5x leverage",
        },
        referenceOutputs: {
            tool: "open_increase_position",
            response:
                '{"indexToken":"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1","amountIn":"100000000000000000","leverage":5,"isLong":true}',
        },
    },
    {
        inputs: {
            query: "Create a short position for BTC on BMX with 100 USDC at 10x leverage",
        },
        referenceOutputs: {
            tool: "open_increase_position",
            response:
                '{"indexToken":"0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f","amountIn":"100000000","leverage":10,"isLong":false}',
        },
    },
];

/**
 * Dataset for testing BMX close decrease position tool
 */
export const BMX_CLOSE_DECREASE_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Close 50% of my ETH long position on BMX",
        },
        referenceOutputs: {
            tool: "close_decrease_position",
            response: '{"indexToken":"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1","percentage":50,"isLong":true}',
        },
    },
    {
        inputs: {
            query: "Fully close my BTC short position on BMX",
        },
        referenceOutputs: {
            tool: "close_decrease_position",
            response: '{"indexToken":"0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f","percentage":100,"isLong":false}',
        },
    },
];

/**
 * Dataset for testing BMX get position tool
 */
export const BMX_GET_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What's my current ETH long position on BMX?",
        },
        referenceOutputs: {
            tool: "get_position",
            response: '{"indexToken":"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1","isLong":true}',
        },
    },
    {
        inputs: {
            query: "Show me details of my BTC short position on BMX",
        },
        referenceOutputs: {
            tool: "get_position",
            response: '{"indexToken":"0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f","isLong":false}',
        },
    },
];

/**
 * Combined dataset for all BMX tools
 */
export const BMX_ALL_TOOLS_DATASET: EvalDataset = [
    ...BMX_OPEN_INCREASE_POSITION_DATASET,
    ...BMX_CLOSE_DECREASE_POSITION_DATASET,
    ...BMX_GET_POSITION_DATASET,
];
