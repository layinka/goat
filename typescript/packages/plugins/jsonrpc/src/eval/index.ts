// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing JSON RPC tool
 */
export const JSONRPC_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Make a JSON RPC call with method 'eth_blockNumber' and params []",
        },
        referenceOutputs: {
            tool: "JSONRpcFunc",
            response: '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}',
        },
    },
    {
        inputs: {
            query: "Call the JSON RPC endpoint with method 'eth_getBalance' and params ['0x1234567890123456789012345678901234567890', 'latest']",
        },
        referenceOutputs: {
            tool: "JSONRpcFunc",
            response:
                '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x1234567890123456789012345678901234567890","latest"],"id":1}',
        },
    },
    {
        inputs: {
            query: "Execute a remote procedure call to get transaction count for address 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "JSONRpcFunc",
            response:
                '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0xabcdef1234567890abcdef1234567890abcdef12","latest"],"id":1}',
        },
    },
];

/**
 * Combined dataset for all JSON RPC tools
 */
export const JSONRPC_ALL_TOOLS_DATASET: EvalDataset = [...JSONRPC_DATASET];
