// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Velodrome swap exact tokens tool
 */
export const VELODROME_SWAP_EXACT_TOKENS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 10 USDC for ETH on Velodrome",
        },
        referenceOutputs: {
            tool: "swap_exact_tokens",
            response:
                '{"tokenIn":"0xd988097fb8612cc24eeC14542bC03424c656005f","tokenOut":"0x4200000000000000000000000000000000000006","amountIn":"10","deadline":"1714147200"}',
        },
    },
    {
        inputs: {
            query: "Exchange 5 ETH for USDT on Velodrome",
        },
        referenceOutputs: {
            tool: "swap_exact_tokens",
            response:
                '{"tokenIn":"0x4200000000000000000000000000000000000006","tokenOut":"0xf0f161fda2712db8b566946122a5af183995e2ed","amountIn":"5","deadline":"1714147200"}',
        },
    },
    {
        inputs: {
            query: "Trade 20 MODE tokens for USDC using Velodrome",
        },
        referenceOutputs: {
            tool: "swap_exact_tokens",
            response:
                '{"tokenIn":"0xDfc7C877a950e49D2610114102175A06C2e3167a","tokenOut":"0xd988097fb8612cc24eeC14542bC03424c656005f","amountIn":"20","deadline":"1714147200"}',
        },
    },
];

/**
 * Dataset for testing Velodrome get token address tool
 */
export const VELODROME_GET_TOKEN_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the contract address for USDC on Velodrome?",
        },
        referenceOutputs: {
            tool: "get_velodrome_token_address",
            response: '{"tokenName":"usdc"}',
        },
    },
    {
        inputs: {
            query: "Get the address for USDT token on Velodrome",
        },
        referenceOutputs: {
            tool: "get_velodrome_token_address",
            response: '{"tokenName":"usdt"}',
        },
    },
    {
        inputs: {
            query: "Show me the contract address for MODE token on Velodrome",
        },
        referenceOutputs: {
            tool: "get_velodrome_token_address",
            response: '{"tokenName":"mode"}',
        },
    },
    {
        inputs: {
            query: "What is the address for WETH on Velodrome?",
        },
        referenceOutputs: {
            tool: "get_velodrome_token_address",
            response: '{"tokenName":"weth"}',
        },
    },
];

/**
 * Dataset for testing Velodrome add liquidity tool
 */
export const VELODROME_ADD_LIQUIDITY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Add liquidity to Velodrome with 10 USDC and 0.01 ETH",
        },
        referenceOutputs: {
            tool: "add_liquidity",
            response:
                '{"token0":"0xd988097fb8612cc24eeC14542bC03424c656005f","token1":"0x4200000000000000000000000000000000000006","stable":true,"amount0Desired":"10","amount1Desired":"0.01","amount0Min":"9.5","amount1Min":"0.0095","deadline":3600}',
        },
    },
    {
        inputs: {
            query: "Provide liquidity to USDT-USDC pool on Velodrome with 100 USDT and 100 USDC",
        },
        referenceOutputs: {
            tool: "add_liquidity",
            response:
                '{"token0":"0xf0f161fda2712db8b566946122a5af183995e2ed","token1":"0xd988097fb8612cc24eeC14542bC03424c656005f","stable":true,"amount0Desired":"100","amount1Desired":"100","amount0Min":"95","amount1Min":"95","deadline":3600}',
        },
    },
    {
        inputs: {
            query: "Create a liquidity position in MODE-ETH pool on Velodrome with 50 MODE and 0.05 ETH",
        },
        referenceOutputs: {
            tool: "add_liquidity",
            response:
                '{"token0":"0xDfc7C877a950e49D2610114102175A06C2e3167a","token1":"0x4200000000000000000000000000000000000006","stable":false,"amount0Desired":"50","amount1Desired":"0.05","amount0Min":"47.5","amount1Min":"0.0475","deadline":3600}',
        },
    },
];

/**
 * Combined dataset for all Velodrome tools
 */
export const VELODROME_ALL_TOOLS_DATASET: EvalDataset = [
    ...VELODROME_SWAP_EXACT_TOKENS_DATASET,
    ...VELODROME_GET_TOKEN_ADDRESS_DATASET,
    ...VELODROME_ADD_LIQUIDITY_DATASET,
];
