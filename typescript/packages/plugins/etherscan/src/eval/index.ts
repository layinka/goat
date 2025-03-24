// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Etherscan get account balance tool
 */
export const ETHERSCAN_GET_ACCOUNT_BALANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the ETH balance of address 0x1234567890123456789012345678901234567890?",
        },
        referenceOutputs: {
            tool: "get_account_balance",
            response: '{"address":"0x1234567890123456789012345678901234567890","tag":"latest","network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "Check the Ethereum balance for 0xabcdef1234567890abcdef1234567890abcdef12 on Goerli testnet",
        },
        referenceOutputs: {
            tool: "get_account_balance",
            response: '{"address":"0xabcdef1234567890abcdef1234567890abcdef12","tag":"latest","network":"goerli"}',
        },
    },
];

/**
 * Dataset for testing Etherscan get account transactions tool
 */
export const ETHERSCAN_GET_ACCOUNT_TRANSACTIONS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me the transaction history for 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "get_account_transactions",
            response: '{"address":"0x1234567890123456789012345678901234567890","network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "List the last 10 transactions for 0xabcdef1234567890abcdef1234567890abcdef12 on Sepolia",
        },
        referenceOutputs: {
            tool: "get_account_transactions",
            response: '{"address":"0xabcdef1234567890abcdef1234567890abcdef12","offset":"10","network":"sepolia"}',
        },
    },
];

/**
 * Dataset for testing Etherscan get contract ABI tool
 */
export const ETHERSCAN_GET_CONTRACT_ABI_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the ABI for contract 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "get_contract_abi",
            response: '{"address":"0x1234567890123456789012345678901234567890","network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "Show me the contract ABI for 0xabcdef1234567890abcdef1234567890abcdef12 on Polygon",
        },
        referenceOutputs: {
            tool: "get_contract_abi",
            response: '{"address":"0xabcdef1234567890abcdef1234567890abcdef12","network":"polygon"}',
        },
    },
];

/**
 * Dataset for testing Etherscan get contract source code tool
 */
export const ETHERSCAN_GET_CONTRACT_SOURCE_CODE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me the source code for contract 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "get_contract_source_code",
            response: '{"address":"0x1234567890123456789012345678901234567890","network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "Get the source code for 0xabcdef1234567890abcdef1234567890abcdef12 on Arbitrum",
        },
        referenceOutputs: {
            tool: "get_contract_source_code",
            response: '{"address":"0xabcdef1234567890abcdef1234567890abcdef12","network":"arbitrum"}',
        },
    },
];

/**
 * Dataset for testing Etherscan get transaction status tool
 */
export const ETHERSCAN_GET_TRANSACTION_STATUS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the status of transaction 0x1234567890123456789012345678901234567890123456789012345678901234?",
        },
        referenceOutputs: {
            tool: "get_transaction_status",
            response:
                '{"txhash":"0x1234567890123456789012345678901234567890123456789012345678901234","network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "Check if transaction 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 was successful on Optimism",
        },
        referenceOutputs: {
            tool: "get_transaction_status",
            response:
                '{"txhash":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890","network":"optimism"}',
        },
    },
];

/**
 * Dataset for testing Etherscan get transaction receipt tool
 */
export const ETHERSCAN_GET_TRANSACTION_RECEIPT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the receipt for transaction 0x1234567890123456789012345678901234567890123456789012345678901234",
        },
        referenceOutputs: {
            tool: "get_transaction_receipt",
            response:
                '{"txhash":"0x1234567890123456789012345678901234567890123456789012345678901234","network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "Show me the transaction receipt for 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 on BSC",
        },
        referenceOutputs: {
            tool: "get_transaction_receipt",
            response: '{"txhash":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890","network":"bsc"}',
        },
    },
];

/**
 * Dataset for testing Etherscan get block by number tool
 */
export const ETHERSCAN_GET_BLOCK_BY_NUMBER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get information about block 12345678",
        },
        referenceOutputs: {
            tool: "get_block_by_number",
            response: '{"blockNumber":12345678,"network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "Show me details for block 0x1234567 on Avalanche",
        },
        referenceOutputs: {
            tool: "get_block_by_number",
            response: '{"blockNumber":"0x1234567","network":"avalanche"}',
        },
    },
];

/**
 * Dataset for testing Etherscan get token balance tool
 */
export const ETHERSCAN_GET_TOKEN_BALANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the USDC balance of address 0x1234567890123456789012345678901234567890?",
        },
        referenceOutputs: {
            tool: "get_token_balance",
            response:
                '{"address":"0x1234567890123456789012345678901234567890","contractAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tag":"latest","network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "Check the DAI token balance for 0xabcdef1234567890abcdef1234567890abcdef12 on Polygon",
        },
        referenceOutputs: {
            tool: "get_token_balance",
            response:
                '{"address":"0xabcdef1234567890abcdef1234567890abcdef12","contractAddress":"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063","tag":"latest","network":"polygon"}',
        },
    },
];

/**
 * Dataset for testing Etherscan get gas price tool
 */
export const ETHERSCAN_GET_GAS_PRICE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the current gas price on Ethereum?",
        },
        referenceOutputs: {
            tool: "get_gas_price",
            response: '{"network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "Show me the gas price on Arbitrum",
        },
        referenceOutputs: {
            tool: "get_gas_price",
            response: '{"network":"arbitrum"}',
        },
    },
];

/**
 * Dataset for testing Etherscan get event logs tool
 */
export const ETHERSCAN_GET_EVENT_LOGS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the Transfer events for USDC contract 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        },
        referenceOutputs: {
            tool: "get_event_logs",
            response:
                '{"address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","topic0":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","network":"mainnet"}',
        },
    },
    {
        inputs: {
            query: "Show me the Approval events for DAI contract 0x6B175474E89094C44Da98b954EedeAC495271d0F from blocks 12000000 to 12001000",
        },
        referenceOutputs: {
            tool: "get_event_logs",
            response:
                '{"address":"0x6B175474E89094C44Da98b954EedeAC495271d0F","fromBlock":12000000,"toBlock":12001000,"topic0":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","network":"mainnet"}',
        },
    },
];

/**
 * Combined dataset for all Etherscan tools
 */
export const ETHERSCAN_ALL_TOOLS_DATASET: EvalDataset = [
    ...ETHERSCAN_GET_ACCOUNT_BALANCE_DATASET,
    ...ETHERSCAN_GET_ACCOUNT_TRANSACTIONS_DATASET,
    ...ETHERSCAN_GET_CONTRACT_ABI_DATASET,
    ...ETHERSCAN_GET_CONTRACT_SOURCE_CODE_DATASET,
    ...ETHERSCAN_GET_TRANSACTION_STATUS_DATASET,
    ...ETHERSCAN_GET_TRANSACTION_RECEIPT_DATASET,
    ...ETHERSCAN_GET_BLOCK_BY_NUMBER_DATASET,
    ...ETHERSCAN_GET_TOKEN_BALANCE_DATASET,
    ...ETHERSCAN_GET_GAS_PRICE_DATASET,
    ...ETHERSCAN_GET_EVENT_LOGS_DATASET,
];
