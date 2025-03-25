// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Mayan swap from Solana tool
 */
export const MAYAN_SWAP_FROM_SOLANA_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 1 SOL to ETH using Mayan",
        },
        referenceOutputs: {
            tool: "mayan_swap_from_solana",
            response:
                '{"fromToken":"SOL","toToken":"ETH","toChain":"ethereum","amount":"1","dstAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Use Mayan to transfer 10 USDC from Solana to Ethereum with 0.5% slippage",
        },
        referenceOutputs: {
            tool: "mayan_swap_from_solana",
            response:
                '{"fromToken":"USDC","toToken":"USDC","toChain":"ethereum","amount":"10","slippageBps":"50","dstAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Bridge 5 SOL to AVAX on Avalanche through Mayan",
        },
        referenceOutputs: {
            tool: "mayan_swap_from_solana",
            response:
                '{"fromToken":"SOL","toToken":"AVAX","toChain":"avalanche","amount":"5","dstAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Dataset for testing Mayan swap from EVM tool
 */
export const MAYAN_SWAP_FROM_EVM_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 1 ETH to SOL using Mayan",
        },
        referenceOutputs: {
            tool: "mayan_swap_from_evm",
            response:
                '{"fromToken":"ETH","toToken":"SOL","fromChain":"ethereum","toChain":"solana","amount":"1","dstAddr":"solanaAddress123456789"}',
        },
    },
    {
        inputs: {
            query: "Use Mayan to transfer 100 USDC from Ethereum to Solana with 0.5% slippage",
        },
        referenceOutputs: {
            tool: "mayan_swap_from_evm",
            response:
                '{"fromToken":"USDC","toToken":"USDC","fromChain":"ethereum","toChain":"solana","amount":"100","slippageBps":"50","dstAddr":"solanaAddress123456789"}',
        },
    },
    {
        inputs: {
            query: "Bridge 0.5 AVAX from Avalanche to Ethereum through Mayan",
        },
        referenceOutputs: {
            tool: "mayan_swap_from_evm",
            response:
                '{"fromToken":"AVAX","toToken":"ETH","fromChain":"avalanche","toChain":"ethereum","amount":"0.5","dstAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Combined dataset for all Mayan tools
 */
export const MAYAN_ALL_TOOLS_DATASET: EvalDataset = [...MAYAN_SWAP_FROM_SOLANA_DATASET, ...MAYAN_SWAP_FROM_EVM_DATASET];
