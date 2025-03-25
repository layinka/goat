// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing DeBridge get bridge quote tool
 */
export const DEBRIDGE_GET_BRIDGE_QUOTE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get a quote for bridging 1 ETH from Ethereum to Solana",
        },
        referenceOutputs: {
            tool: "get_bridge_quote",
            response:
                '{"srcChainId":"1","srcChainTokenIn":"0x0000000000000000000000000000000000000000","srcChainTokenInAmount":"1000000000000000000","dstChainId":"7565164","dstChainTokenOut":"DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5"}',
        },
    },
    {
        inputs: {
            query: "What would it cost to transfer 500 USDC from Ethereum to Arbitrum?",
        },
        referenceOutputs: {
            tool: "get_bridge_quote",
            response:
                '{"srcChainId":"1","srcChainTokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","srcChainTokenInAmount":"500000000","dstChainId":"42161","dstChainTokenOut":"0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8","slippage":"0.5"}',
        },
    },
];

/**
 * Dataset for testing DeBridge create bridge order tool
 */
export const DEBRIDGE_CREATE_BRIDGE_ORDER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Create a bridge order to send 1 ETH from Ethereum to my Solana address DXu6uARB7gVxqtuwjMyK2mgEchorxDDyrSN9dRK1Af7q",
        },
        referenceOutputs: {
            tool: "create_bridge_order",
            response:
                '{"srcChainId":"1","srcChainTokenIn":"0x0000000000000000000000000000000000000000","srcChainTokenInAmount":"1000000000000000000","dstChainId":"7565164","dstChainTokenOut":"DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5","dstChainTokenOutRecipient":"DXu6uARB7gVxqtuwjMyK2mgEchorxDDyrSN9dRK1Af7q","senderAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Bridge 500 USDC from Ethereum to Arbitrum address 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "create_bridge_order",
            response:
                '{"srcChainId":"1","srcChainTokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","srcChainTokenInAmount":"500000000","dstChainId":"42161","dstChainTokenOut":"0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8","dstChainTokenOutRecipient":"0xabcdef1234567890abcdef1234567890abcdef12","senderAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Dataset for testing DeBridge get token info tool
 */
export const DEBRIDGE_GET_TOKEN_INFO_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get information about the USDC token on Ethereum",
        },
        referenceOutputs: {
            tool: "get_token_info",
            response: '{"chainId":"1","tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        inputs: {
            query: "Search for tokens with 'Bitcoin' in the name on Solana",
        },
        referenceOutputs: {
            tool: "get_token_info",
            response: '{"chainId":"7565164","search":"Bitcoin"}',
        },
    },
    {
        inputs: {
            query: "List all tokens available on Arbitrum",
        },
        referenceOutputs: {
            tool: "get_token_info",
            response: '{"chainId":"42161"}',
        },
    },
];

/**
 * Dataset for testing DeBridge get supported chains tool
 */
export const DEBRIDGE_GET_SUPPORTED_CHAINS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What chains does DeBridge support?",
        },
        referenceOutputs: {
            tool: "get_supported_chains",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "List all the blockchains I can bridge tokens between using DeBridge",
        },
        referenceOutputs: {
            tool: "get_supported_chains",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing DeBridge execute bridge transaction tool
 */
export const DEBRIDGE_EXECUTE_BRIDGE_TRANSACTION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Execute the bridge transaction with the provided data",
        },
        referenceOutputs: {
            tool: "execute_bridge_transaction",
            response:
                '{"txData":{"to":"0x1234567890123456789012345678901234567890","data":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","value":"1000000000000000000"}}',
        },
    },
    {
        inputs: {
            query: "Confirm and send the bridge transaction",
        },
        referenceOutputs: {
            tool: "execute_bridge_transaction",
            response:
                '{"txData":{"to":"0x1234567890123456789012345678901234567890","data":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"}}',
        },
    },
];

/**
 * Dataset for testing DeBridge check transaction status tool
 */
export const DEBRIDGE_CHECK_TRANSACTION_STATUS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Check the status of my bridge transaction with hash 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        },
        referenceOutputs: {
            tool: "check_transaction_status",
            response: '{"txHash":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"}',
        },
    },
    {
        inputs: {
            query: "What's the current status of my DeBridge transfer with transaction ID 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef?",
        },
        referenceOutputs: {
            tool: "check_transaction_status",
            response: '{"txHash":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"}',
        },
    },
];

/**
 * Combined dataset for all DeBridge tools
 */
export const DEBRIDGE_ALL_TOOLS_DATASET: EvalDataset = [
    ...DEBRIDGE_GET_BRIDGE_QUOTE_DATASET,
    ...DEBRIDGE_CREATE_BRIDGE_ORDER_DATASET,
    ...DEBRIDGE_GET_TOKEN_INFO_DATASET,
    ...DEBRIDGE_GET_SUPPORTED_CHAINS_DATASET,
    ...DEBRIDGE_EXECUTE_BRIDGE_TRANSACTION_DATASET,
    ...DEBRIDGE_CHECK_TRANSACTION_STATUS_DATASET,
];
