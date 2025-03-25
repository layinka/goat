// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing ENS get address from ENS name tool
 */
export const ENS_GET_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the Ethereum address for vitalik.eth?",
        },
        referenceOutputs: {
            tool: "get_address_from_ens",
            response: '{"ensName":"vitalik.eth"}',
        },
    },
    {
        inputs: {
            query: "Resolve the ENS name goat.eth to its address",
        },
        referenceOutputs: {
            tool: "get_address_from_ens",
            response: '{"ensName":"goat.eth"}',
        },
    },
    {
        inputs: {
            query: "Find the wallet address associated with nick.eth",
        },
        referenceOutputs: {
            tool: "get_address_from_ens",
            response: '{"ensName":"nick.eth"}',
        },
    },
];

/**
 * Combined dataset for all ENS tools
 */
export const ENS_ALL_TOOLS_DATASET: EvalDataset = [...ENS_GET_ADDRESS_DATASET];
