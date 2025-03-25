// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Kim get swap router address tool
 */
export const KIM_GET_SWAP_ROUTER_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the Kim swap router address?",
        },
        referenceOutputs: {
            tool: "kim_get_swap_router_address",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Get the address of the Kim DEX swap router",
        },
        referenceOutputs: {
            tool: "kim_get_swap_router_address",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing Kim swap exact input single hop tool
 */
export const KIM_SWAP_EXACT_INPUT_SINGLE_HOP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 100 USDC for ETH on Kim DEX",
        },
        referenceOutputs: {
            tool: "swapExactInputSingleHop",
            response:
                '{"tokenInAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOutAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amountIn":"100000000","amountOutMinimum":"0","limitSqrtPrice":"0","deadline":1800}',
        },
    },
    {
        inputs: {
            query: "Exchange 5 ETH for USDC using Kim with minimum output of 9000 USDC",
        },
        referenceOutputs: {
            tool: "swapExactInputSingleHop",
            response:
                '{"tokenInAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOutAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amountIn":"5000000000000000000","amountOutMinimum":"9000000000","limitSqrtPrice":"0","deadline":1800}',
        },
    },
];

/**
 * Dataset for testing Kim swap exact output single hop tool
 */
export const KIM_SWAP_EXACT_OUTPUT_SINGLE_HOP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get exactly 1000 USDC by swapping ETH on Kim DEX",
        },
        referenceOutputs: {
            tool: "kim_swap_exact_output_single_hop",
            response:
                '{"tokenInAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOutAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amountOut":"1000000000","amountInMaximum":"1000000000000000000","limitSqrtPrice":"0","deadline":1800}',
        },
    },
    {
        inputs: {
            query: "Swap for exactly 0.5 ETH using USDC on Kim with maximum input of 1000 USDC",
        },
        referenceOutputs: {
            tool: "kim_swap_exact_output_single_hop",
            response:
                '{"tokenInAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOutAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amountOut":"500000000000000000","amountInMaximum":"1000000000","limitSqrtPrice":"0","deadline":1800}',
        },
    },
];

/**
 * Dataset for testing Kim swap exact input multi hop tool
 */
export const KIM_SWAP_EXACT_INPUT_MULTI_HOP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 100 USDC for WBTC through DAI on Kim DEX",
        },
        referenceOutputs: {
            tool: "kim_swap_exact_input_multi_hop",
            response:
                '{"path":{"tokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOut":"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","intermediateTokens":["0x6B175474E89094C44Da98b954EedeAC495271d0F"],"fees":[500,500]},"recipient":"0x0000000000000000000000000000000000000000","deadline":1800,"amountIn":"100","amountOutMinimum":"0"}',
        },
    },
    {
        inputs: {
            query: "Exchange 2 ETH for LINK through WBTC on Kim with 0.3% fee",
        },
        referenceOutputs: {
            tool: "kim_swap_exact_input_multi_hop",
            response:
                '{"path":{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0x514910771AF9Ca656af840dff83E8264EcF986CA","intermediateTokens":["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],"fees":[3000,3000]},"recipient":"0x0000000000000000000000000000000000000000","deadline":1800,"amountIn":"2","amountOutMinimum":"0"}',
        },
    },
];

/**
 * Dataset for testing Kim swap exact output multi hop tool
 */
export const KIM_SWAP_EXACT_OUTPUT_MULTI_HOP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get exactly 0.1 WBTC by swapping USDC through DAI on Kim DEX",
        },
        referenceOutputs: {
            tool: "kim_swap_exact_output_multi_hop",
            response:
                '{"path":{"tokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOut":"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","intermediateTokens":["0x6B175474E89094C44Da98b954EedeAC495271d0F"],"fees":[500,500]},"recipient":"0x0000000000000000000000000000000000000000","deadline":1800,"amountOut":"0.1","amountInMaximum":"5000"}',
        },
    },
    {
        inputs: {
            query: "Swap for exactly 500 LINK using ETH through WBTC on Kim with maximum input of 2 ETH",
        },
        referenceOutputs: {
            tool: "kim_swap_exact_output_multi_hop",
            response:
                '{"path":{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0x514910771AF9Ca656af840dff83E8264EcF986CA","intermediateTokens":["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],"fees":[3000,3000]},"recipient":"0x0000000000000000000000000000000000000000","deadline":1800,"amountOut":"500","amountInMaximum":"2"}',
        },
    },
];

/**
 * Dataset for testing Kim mint position tool
 */
export const KIM_MINT_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Create a new liquidity position for ETH/USDC on Kim DEX",
        },
        referenceOutputs: {
            tool: "mintPosition",
            response:
                '{"token0Address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","token1Address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount0Desired":"1000000000000000000","amount1Desired":"1000000000","deadline":1800}',
        },
    },
    {
        inputs: {
            query: "Add liquidity to a new ETH/DAI pool on Kim with 2 ETH and 3000 DAI",
        },
        referenceOutputs: {
            tool: "mintPosition",
            response:
                '{"token0Address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","token1Address":"0x6B175474E89094C44Da98b954EedeAC495271d0F","amount0Desired":"2000000000000000000","amount1Desired":"3000000000000000000000","deadline":1800}',
        },
    },
];

/**
 * Dataset for testing Kim increase liquidity tool
 */
export const KIM_INCREASE_LIQUIDITY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Add more liquidity to my ETH/USDC position #12345 on Kim DEX",
        },
        referenceOutputs: {
            tool: "increaseLiquidity",
            response:
                '{"tokenId":"12345","token0Address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","token1Address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount0Desired":"500000000000000000","amount1Desired":"500000000"}',
        },
    },
    {
        inputs: {
            query: "Increase my liquidity in position ID 67890 for WBTC/ETH on Kim with 0.1 WBTC and 1 ETH",
        },
        referenceOutputs: {
            tool: "increaseLiquidity",
            response:
                '{"tokenId":"67890","token0Address":"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","token1Address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amount0Desired":"10000000","amount1Desired":"1000000000000000000"}',
        },
    },
];

/**
 * Dataset for testing Kim decrease liquidity tool
 */
export const KIM_DECREASE_LIQUIDITY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Remove 50% of my liquidity from position #12345 on Kim DEX",
        },
        referenceOutputs: {
            tool: "decreaseLiquidity",
            response: '{"tokenId":"12345","percentage":50}',
        },
    },
    {
        inputs: {
            query: "Withdraw 75% of my liquidity from Kim position ID 67890",
        },
        referenceOutputs: {
            tool: "decreaseLiquidity",
            response: '{"tokenId":"67890","percentage":75}',
        },
    },
];

/**
 * Dataset for testing Kim collect tool
 */
export const KIM_COLLECT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Collect fees from my Kim DEX position #12345",
        },
        referenceOutputs: {
            tool: "collect",
            response: '{"tokenId":"12345"}',
        },
    },
    {
        inputs: {
            query: "Claim rewards from my liquidity position ID 67890 on Kim",
        },
        referenceOutputs: {
            tool: "collect",
            response: '{"tokenId":"67890"}',
        },
    },
];

/**
 * Dataset for testing Kim burn tool
 */
export const KIM_BURN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Burn my Kim DEX position NFT #12345",
        },
        referenceOutputs: {
            tool: "burn",
            response: '{"tokenId":"12345"}',
        },
    },
    {
        inputs: {
            query: "Close and remove my liquidity position ID 67890 on Kim",
        },
        referenceOutputs: {
            tool: "burn",
            response: '{"tokenId":"67890"}',
        },
    },
];

/**
 * Combined dataset for all Kim tools
 */
export const KIM_ALL_TOOLS_DATASET: EvalDataset = [
    ...KIM_GET_SWAP_ROUTER_ADDRESS_DATASET,
    ...KIM_SWAP_EXACT_INPUT_SINGLE_HOP_DATASET,
    ...KIM_SWAP_EXACT_OUTPUT_SINGLE_HOP_DATASET,
    ...KIM_SWAP_EXACT_INPUT_MULTI_HOP_DATASET,
    ...KIM_SWAP_EXACT_OUTPUT_MULTI_HOP_DATASET,
    ...KIM_MINT_POSITION_DATASET,
    ...KIM_INCREASE_LIQUIDITY_DATASET,
    ...KIM_DECREASE_LIQUIDITY_DATASET,
    ...KIM_COLLECT_DATASET,
    ...KIM_BURN_DATASET,
];
