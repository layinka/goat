// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing BetSwirl coin toss tool
 */
export const BETSWIRL_COINTOSS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Flip a coin and bet on heads with 0.01 ETH",
        },
        referenceOutputs: {
            tool: "betswirl_coinToss",
            response: '{"face":"HEADS","betAmount":"0.01","token":"ETH"}',
        },
    },
    {
        inputs: {
            query: "I want to bet 0.05 MATIC on tails in a coin toss",
        },
        referenceOutputs: {
            tool: "betswirl_coinToss",
            response: '{"face":"TAILS","betAmount":"0.05","token":"MATIC"}',
        },
    },
];

/**
 * Dataset for testing BetSwirl dice tool
 */
export const BETSWIRL_DICE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Roll a dice and bet 0.01 ETH on number 6",
        },
        referenceOutputs: {
            tool: "betswirl_dice",
            response: '{"number":6,"betAmount":"0.01","token":"ETH"}',
        },
    },
    {
        inputs: {
            query: "I want to bet 0.05 MATIC on rolling a 3 on the dice",
        },
        referenceOutputs: {
            tool: "betswirl_dice",
            response: '{"number":3,"betAmount":"0.05","token":"MATIC"}',
        },
    },
];

/**
 * Dataset for testing BetSwirl roulette tool
 */
export const BETSWIRL_ROULETTE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Play roulette and bet 0.01 ETH on red",
        },
        referenceOutputs: {
            tool: "betswirl_roulette",
            response: '{"color":"RED","betAmount":"0.01","token":"ETH"}',
        },
    },
    {
        inputs: {
            query: "I want to bet 0.05 MATIC on black in roulette",
        },
        referenceOutputs: {
            tool: "betswirl_roulette",
            response: '{"color":"BLACK","betAmount":"0.05","token":"MATIC"}',
        },
    },
    {
        inputs: {
            query: "Place a bet of 0.02 ETH on number 17 in roulette",
        },
        referenceOutputs: {
            tool: "betswirl_roulette",
            response: '{"number":17,"betAmount":"0.02","token":"ETH"}',
        },
    },
];

/**
 * Dataset for testing BetSwirl get bet tool
 */
export const BETSWIRL_GET_BET_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me details of bet with hash 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        },
        referenceOutputs: {
            tool: "betswirl_getBet",
            response: '{"hash":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"}',
        },
    },
];

/**
 * Dataset for testing BetSwirl get bets tool
 */
export const BETSWIRL_GET_BETS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me my last 5 bets",
        },
        referenceOutputs: {
            tool: "betswirl_getBets",
            response: '{"limit":5}',
        },
    },
    {
        inputs: {
            query: "Get my betting history for coin toss games",
        },
        referenceOutputs: {
            tool: "betswirl_getBets",
            response: '{"gameType":"COINTOSS"}',
        },
    },
];

/**
 * Combined dataset for all BetSwirl tools
 */
export const BETSWIRL_ALL_TOOLS_DATASET: EvalDataset = [
    ...BETSWIRL_COINTOSS_DATASET,
    ...BETSWIRL_DICE_DATASET,
    ...BETSWIRL_ROULETTE_DATASET,
    ...BETSWIRL_GET_BET_DATASET,
    ...BETSWIRL_GET_BETS_DATASET,
];
