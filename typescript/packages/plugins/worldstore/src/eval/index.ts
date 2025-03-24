// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Worldstore search for product tool
 */
export const WORLDSTORE_SEARCH_FOR_PRODUCT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Search for t-shirts on WorldStore",
        },
        referenceOutputs: {
            tool: "searchForProduct",
            response: '{"query":"t-shirts"}',
        },
    },
    {
        inputs: {
            query: "Find gaming accessories in the WorldStore with a limit of 10 results",
        },
        referenceOutputs: {
            tool: "searchForProduct",
            response: '{"query":"gaming accessories","limit":"10"}',
        },
    },
    {
        inputs: {
            query: "Look for crypto merchandise on WorldStore",
        },
        referenceOutputs: {
            tool: "searchForProduct",
            response: '{"query":"crypto merchandise"}',
        },
    },
];

/**
 * Dataset for testing Worldstore start redemption tool
 */
export const WORLDSTORE_START_REDEMPTION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Start redemption process for my purchase from shop ABC123 with my wallet address 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "startRedemption",
            response:
                '{"shopId":"ABC123","walletAddress":"0x1234567890123456789012345678901234567890","items":[{"id":"item1","quantity":1}],"userInformation":{"name":"User","email":"user@example.com"}}',
        },
    },
    {
        inputs: {
            query: "Redeem my purchase of 2 t-shirts from shop XYZ789 using wallet 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "startRedemption",
            response:
                '{"shopId":"XYZ789","walletAddress":"0xabcdef1234567890abcdef1234567890abcdef12","items":[{"id":"tshirt1","quantity":2}],"userInformation":{"name":"User","email":"user@example.com"}}',
        },
    },
];

/**
 * Dataset for testing Worldstore verify redemption tool
 */
export const WORLDSTORE_VERIFY_REDEMPTION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Verify my redemption with ID 123456 from shop ABC123 with signed message 'signature123'",
        },
        referenceOutputs: {
            tool: "verifyRedemption",
            response: '{"shopId":"ABC123","redemptionId":"123456","signedMessage":"signature123"}',
        },
    },
    {
        inputs: {
            query: "Confirm my WorldStore redemption 789012 from shop XYZ789 using signature 'mysignature456'",
        },
        referenceOutputs: {
            tool: "verifyRedemption",
            response: '{"shopId":"XYZ789","redemptionId":"789012","signedMessage":"mysignature456"}',
        },
    },
];

/**
 * Combined dataset for all Worldstore tools
 */
export const WORLDSTORE_ALL_TOOLS_DATASET: EvalDataset = [
    ...WORLDSTORE_SEARCH_FOR_PRODUCT_DATASET,
    ...WORLDSTORE_START_REDEMPTION_DATASET,
    ...WORLDSTORE_VERIFY_REDEMPTION_DATASET,
];
