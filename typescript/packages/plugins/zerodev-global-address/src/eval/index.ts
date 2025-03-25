// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing ZeroDev Global Address create global address config tool
 */
export const ZERODEV_CREATE_GLOBAL_ADDRESS_CONFIG_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Create a global address for receiving tokens across multiple chains",
        },
        referenceOutputs: {
            tool: "createGlobalAddressConfig",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Set up a ZeroDev global address on Optimism",
        },
        referenceOutputs: {
            tool: "createGlobalAddressConfig",
            response: '{"destinationChain":"optimism"}',
        },
    },
    {
        inputs: {
            query: "Create a global address on Base with 10% slippage",
        },
        referenceOutputs: {
            tool: "createGlobalAddressConfig",
            response: '{"destinationChain":"base","slippage":10000}',
        },
    },
    {
        inputs: {
            query: "Generate a ZeroDev global address for wallet 0x1234567890123456789012345678901234567890 on Arbitrum",
        },
        referenceOutputs: {
            tool: "createGlobalAddressConfig",
            response: '{"destinationChain":"arbitrum","owner":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Combined dataset for all ZeroDev Global Address tools
 */
export const ZERODEV_GLOBAL_ADDRESS_ALL_TOOLS_DATASET: EvalDataset = [...ZERODEV_CREATE_GLOBAL_ADDRESS_CONFIG_DATASET];
