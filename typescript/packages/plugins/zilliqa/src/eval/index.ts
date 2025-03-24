// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Zilliqa convert to bech32 tool
 */
export const ZILLIQA_CONVERT_TO_BECH32_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Convert 0x1234567890123456789012345678901234567890 to bech32 format",
        },
        referenceOutputs: {
            tool: "convertToBech32",
            response: '{"address":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Transform my Zilliqa hex address 0xabcdef1234567890abcdef1234567890abcdef12 to bech32",
        },
        referenceOutputs: {
            tool: "convertToBech32",
            response: '{"address":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
];

/**
 * Dataset for testing Zilliqa convert from bech32 tool
 */
export const ZILLIQA_CONVERT_FROM_BECH32_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Convert zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz to hex format",
        },
        referenceOutputs: {
            tool: "convertFromBech32",
            response: '{"address":"zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz"}',
        },
    },
    {
        inputs: {
            query: "Transform my Zilliqa bech32 address zil1r5verznnwvrzrz4n2llzn559l9jwv5pjdvzqwf to hex",
        },
        referenceOutputs: {
            tool: "convertFromBech32",
            response: '{"address":"zil1r5verznnwvrzrz4n2llzn559l9jwv5pjdvzqwf"}',
        },
    },
];

/**
 * Dataset for testing Zilliqa transfer from EVM address tool
 */
export const ZILLIQA_TRANSFER_FROM_EVM_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Send 10 ZIL from my EVM address to 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "transferFromEvmAddress",
            response: '{"toAddress":"0x1234567890123456789012345678901234567890","amount":"10"}',
        },
    },
    {
        inputs: {
            query: "Transfer 5.5 ZIL from my Ethereum wallet to zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz",
        },
        referenceOutputs: {
            tool: "transferFromEvmAddress",
            response: '{"toAddress":"zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz","amount":"5.5"}',
        },
    },
];

/**
 * Dataset for testing Zilliqa transfer from Zilliqa address tool
 */
export const ZILLIQA_TRANSFER_FROM_ZILLIQA_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Send 10 ZIL from my Zilliqa address to 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "transferFromZilliqaAddress",
            response: '{"toAddress":"0x1234567890123456789012345678901234567890","amount":"10"}',
        },
    },
    {
        inputs: {
            query: "Transfer 5.5 ZIL from my Zilliqa wallet to zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz",
        },
        referenceOutputs: {
            tool: "transferFromZilliqaAddress",
            response: '{"toAddress":"zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz","amount":"5.5"}',
        },
    },
];

/**
 * Dataset for testing Zilliqa get address balance tool
 */
export const ZILLIQA_GET_ADDRESS_BALANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the balance of Zilliqa address 0x1234567890123456789012345678901234567890?",
        },
        referenceOutputs: {
            tool: "getZilliqaAddressBalance",
            response: '{"address":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Check the ZIL balance for zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz",
        },
        referenceOutputs: {
            tool: "getZilliqaAddressBalance",
            response: '{"address":"zil1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq9yf6pz"}',
        },
    },
];

/**
 * Combined dataset for all Zilliqa tools
 */
export const ZILLIQA_ALL_TOOLS_DATASET: EvalDataset = [
    ...ZILLIQA_CONVERT_TO_BECH32_DATASET,
    ...ZILLIQA_CONVERT_FROM_BECH32_DATASET,
    ...ZILLIQA_TRANSFER_FROM_EVM_ADDRESS_DATASET,
    ...ZILLIQA_TRANSFER_FROM_ZILLIQA_ADDRESS_DATASET,
    ...ZILLIQA_GET_ADDRESS_BALANCE_DATASET,
];
