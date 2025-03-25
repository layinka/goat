// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Cosmos Bank token balance tool
 */
export const COSMOSBANK_TOKEN_BALANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is my ATOM balance?",
        },
        referenceOutputs: {
            tool: "tokenBalance",
            response: '{"address":"cosmos1abc...","symbol":"ATOM"}',
        },
    },
    {
        inputs: {
            query: "Check the OSMO token balance for cosmos1xyz...",
        },
        referenceOutputs: {
            tool: "tokenBalance",
            response: '{"address":"cosmos1xyz...","symbol":"OSMO"}',
        },
    },
];

/**
 * Dataset for testing Cosmos Bank denom metadata tool
 */
export const COSMOSBANK_DENOM_METADATA_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the metadata for ATOM token",
        },
        referenceOutputs: {
            tool: "demonMetada",
            response: '{"symbol":"ATOM"}',
        },
    },
    {
        inputs: {
            query: "Show me the OSMO token metadata",
        },
        referenceOutputs: {
            tool: "demonMetada",
            response: '{"symbol":"OSMO"}',
        },
    },
];

/**
 * Dataset for testing Cosmos Bank supply of tool
 */
export const COSMOSBANK_SUPPLY_OF_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the total supply of ATOM?",
        },
        referenceOutputs: {
            tool: "supplyOf",
            response: '{"symbol":"ATOM"}',
        },
    },
    {
        inputs: {
            query: "Show me the total supply of OSMO tokens",
        },
        referenceOutputs: {
            tool: "supplyOf",
            response: '{"symbol":"OSMO"}',
        },
    },
];

/**
 * Dataset for testing Cosmos Bank send token tool
 */
export const COSMOSBANK_SEND_TOKEN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Send 10 ATOM to cosmos1xyz...",
        },
        referenceOutputs: {
            tool: "sendToken",
            response: '{"toAddress":"cosmos1xyz...","amount":{"amount":"10","symbol":"ATOM"}}',
        },
    },
    {
        inputs: {
            query: "Transfer 5 OSMO tokens to cosmos1abc...",
        },
        referenceOutputs: {
            tool: "sendToken",
            response: '{"toAddress":"cosmos1abc...","amount":{"amount":"5","symbol":"OSMO"}}',
        },
    },
];

/**
 * Combined dataset for all Cosmos Bank tools
 */
export const COSMOSBANK_ALL_TOOLS_DATASET: EvalDataset = [
    ...COSMOSBANK_TOKEN_BALANCE_DATASET,
    ...COSMOSBANK_DENOM_METADATA_DATASET,
    ...COSMOSBANK_SUPPLY_OF_DATASET,
    ...COSMOSBANK_SEND_TOKEN_DATASET,
];
