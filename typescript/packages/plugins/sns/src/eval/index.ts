// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing SNS resolve domain tool
 */
export const SNS_RESOLVE_DOMAIN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Resolve the SNS domain name 'example.sol' to a Solana address",
        },
        referenceOutputs: {
            tool: "resolveSNSDomain",
            response: '{"domain":"example.sol"}',
        },
    },
    {
        inputs: {
            query: "What Solana address is associated with the SNS domain 'crypto.sol'?",
        },
        referenceOutputs: {
            tool: "resolveSNSDomain",
            response: '{"domain":"crypto.sol"}',
        },
    },
    {
        inputs: {
            query: "Convert the SNS domain 'wallet.sol' to its corresponding Solana public key",
        },
        referenceOutputs: {
            tool: "resolveSNSDomain",
            response: '{"domain":"wallet.sol"}',
        },
    },
];

/**
 * Combined dataset for all SNS tools
 */
export const SNS_ALL_TOOLS_DATASET: EvalDataset = [...SNS_RESOLVE_DOMAIN_DATASET];
