// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Pump create and buy token tool
 */
export const PUMP_CREATE_AND_BUY_TOKEN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Create a new token called 'TestCoin' with symbol 'TEST' on Pump.fun and buy some of it",
        },
        referenceOutputs: {
            tool: "createAndBuyToken",
            response:
                '{"name":"TestCoin","symbol":"TEST","description":"A test token created via Pump.fun","imageUrl":"https://example.com/image.png","amountToBuyInSol":"0.1","slippage":"0.5","priorityFee":"0.0001"}',
        },
    },
    {
        inputs: {
            query: "Launch a new meme coin named 'MoonShot' with symbol 'MOON' on Pump and purchase 0.5 SOL worth",
        },
        referenceOutputs: {
            tool: "createAndBuyToken",
            response:
                '{"name":"MoonShot","symbol":"MOON","description":"A meme coin that aims for the moon","imageUrl":"https://example.com/moon.png","amountToBuyInSol":"0.5","slippage":"0.5","priorityFee":"0.0001"}',
        },
    },
    {
        inputs: {
            query: "Create and buy a Solana token called 'GoatCoin' with symbol 'GOAT' on Pump.fun with 0.2 SOL",
        },
        referenceOutputs: {
            tool: "createAndBuyToken",
            response:
                '{"name":"GoatCoin","symbol":"GOAT","description":"The greatest of all time coin","imageUrl":"https://example.com/goat.png","amountToBuyInSol":"0.2","slippage":"0.5","priorityFee":"0.0001"}',
        },
    },
];

/**
 * Combined dataset for all Pump tools
 */
export const PUMP_ALL_TOOLS_DATASET: EvalDataset = [...PUMP_CREATE_AND_BUY_TOKEN_DATASET];
