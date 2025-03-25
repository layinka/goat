// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Orca close position tool
 */
export const ORCA_CLOSE_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Close my liquidity position in Orca Whirlpool with position ID 123456",
        },
        referenceOutputs: {
            tool: "closePosition",
            response: '{"positionId":"123456"}',
        },
    },
    {
        inputs: {
            query: "Exit my Orca liquidity pool position with ID 789012",
        },
        referenceOutputs: {
            tool: "closePosition",
            response: '{"positionId":"789012"}',
        },
    },
];

/**
 * Dataset for testing Orca create CLMM tool
 */
export const ORCA_CREATE_CLMM_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Create a new concentrated liquidity market maker pool on Orca for SOL/USDC with 0.3% fee",
        },
        referenceOutputs: {
            tool: "createCLMM",
            response: '{"tokenA":"SOL","tokenB":"USDC","feeTier":"0.3"}',
        },
    },
    {
        inputs: {
            query: "Initialize a CLMM pool for BONK/USDC pair on Orca with 1% fee",
        },
        referenceOutputs: {
            tool: "createCLMM",
            response: '{"tokenA":"BONK","tokenB":"USDC","feeTier":"1.0"}',
        },
    },
];

/**
 * Dataset for testing Orca create single-sided pool tool
 */
export const ORCA_CREATE_SINGLE_SIDED_POOL_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Create a single-sided liquidity pool on Orca for SOL with initial price of 100 USDC",
        },
        referenceOutputs: {
            tool: "createSingleSidedPool",
            response: '{"tokenA":"SOL","tokenB":"USDC","initialPrice":"100","amount":"1"}',
        },
    },
    {
        inputs: {
            query: "Set up a new Orca pool with 10 BONK tokens and max price of 0.001 USDC",
        },
        referenceOutputs: {
            tool: "createSingleSidedPool",
            response: '{"tokenA":"BONK","tokenB":"USDC","initialPrice":"0.0001","maxPrice":"0.001","amount":"10"}',
        },
    },
];

/**
 * Dataset for testing Orca fetch positions by owner tool
 */
export const ORCA_FETCH_POSITIONS_BY_OWNER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show all my Orca liquidity positions",
        },
        referenceOutputs: {
            tool: "fetchPositionsByOwner",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "List my active Whirlpool positions on Orca",
        },
        referenceOutputs: {
            tool: "fetchPositionsByOwner",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing Orca open centered position tool
 */
export const ORCA_OPEN_CENTERED_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Add liquidity to Orca Whirlpool by opening a centered position in SOL/USDC pool with 1 SOL",
        },
        referenceOutputs: {
            tool: "openCenteredPosition",
            response: '{"poolAddress":"8JUjWjAyXTMB4ZXs1wKWuCkNw3JBCEzq6Xjg61aJYxLh","tokenA":"SOL","amountA":"1"}',
        },
    },
    {
        inputs: {
            query: "Create a centered liquidity position in BONK/USDC Orca pool with 1000 BONK",
        },
        referenceOutputs: {
            tool: "openCenteredPosition",
            response: '{"poolAddress":"BqnpCdDLPRjiuT1ufxBLuaUq1Auwz5A9jkSU7fXNyvjj","tokenA":"BONK","amountA":"1000"}',
        },
    },
];

/**
 * Dataset for testing Orca open single-sided position tool
 */
export const ORCA_OPEN_SINGLE_SIDED_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Add single-sided liquidity to Orca Whirlpool with 1 SOL in the SOL/USDC pool",
        },
        referenceOutputs: {
            tool: "openSingleSidedPosition",
            response: '{"poolAddress":"8JUjWjAyXTMB4ZXs1wKWuCkNw3JBCEzq6Xjg61aJYxLh","tokenA":"SOL","amountA":"1"}',
        },
    },
    {
        inputs: {
            query: "Create a single-sided position with 1000 BONK in the BONK/USDC Orca pool",
        },
        referenceOutputs: {
            tool: "openSingleSidedPosition",
            response: '{"poolAddress":"BqnpCdDLPRjiuT1ufxBLuaUq1Auwz5A9jkSU7fXNyvjj","tokenA":"BONK","amountA":"1000"}',
        },
    },
];

/**
 * Combined dataset for all Orca tools
 */
export const ORCA_ALL_TOOLS_DATASET: EvalDataset = [
    ...ORCA_CLOSE_POSITION_DATASET,
    ...ORCA_CREATE_CLMM_DATASET,
    ...ORCA_CREATE_SINGLE_SIDED_POOL_DATASET,
    ...ORCA_FETCH_POSITIONS_BY_OWNER_DATASET,
    ...ORCA_OPEN_CENTERED_POSITION_DATASET,
    ...ORCA_OPEN_SINGLE_SIDED_POSITION_DATASET,
];
