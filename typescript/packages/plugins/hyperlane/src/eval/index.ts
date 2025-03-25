// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Hyperlane make warp bridge tool
 */
export const HYPERLANE_MAKE_WARP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Deploy a Hyperlane Warp bridge for USDC from Ethereum to Optimism",
        },
        referenceOutputs: {
            tool: "make_hyperlane_warp",
            response:
                '{"origin":"ethereum","destination":"optimism","token":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        inputs: {
            query: "Create a Warp bridge for DAI between Arbitrum and Base",
        },
        referenceOutputs: {
            tool: "make_hyperlane_warp",
            response: '{"origin":"arbitrum","destination":"base","token":"0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"}',
        },
    },
];

/**
 * Dataset for testing Hyperlane send message tool
 */
export const HYPERLANE_SEND_MESSAGE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Send a Hyperlane message from Ethereum to Optimism with content 'Hello Optimism'",
        },
        referenceOutputs: {
            tool: "hyperlane_send_message",
            response:
                '{"originChain":"ethereum","destinationChain":"optimism","destinationAddress":"0x1234567890123456789012345678901234567890","message":"Hello Optimism"}',
        },
    },
    {
        inputs: {
            query: "Use Hyperlane to send 'Test message' from Arbitrum to Polygon at address 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "hyperlane_send_message",
            response:
                '{"originChain":"arbitrum","destinationChain":"polygon","destinationAddress":"0xabcdef1234567890abcdef1234567890abcdef12","message":"Test message"}',
        },
    },
];

/**
 * Dataset for testing Hyperlane read message tool
 */
export const HYPERLANE_READ_MESSAGE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Check the status of Hyperlane message 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef on Ethereum",
        },
        referenceOutputs: {
            tool: "hyperlane_read_message",
            response:
                '{"chain":"ethereum","messageId":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"}',
        },
    },
    {
        inputs: {
            query: "Get details for Hyperlane message 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 on Optimism",
        },
        referenceOutputs: {
            tool: "hyperlane_read_message",
            response:
                '{"chain":"optimism","messageId":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"}',
        },
    },
];

/**
 * Dataset for testing Hyperlane get mailbox tool
 */
export const HYPERLANE_GET_MAILBOX_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the Hyperlane mailbox address for Ethereum?",
        },
        referenceOutputs: {
            tool: "hyperlane_get_mailbox",
            response: '{"chain":"ethereum"}',
        },
    },
    {
        inputs: {
            query: "Get the Hyperlane mailbox for Arbitrum",
        },
        referenceOutputs: {
            tool: "hyperlane_get_mailbox",
            response: '{"chain":"arbitrum"}',
        },
    },
];

/**
 * Dataset for testing Hyperlane get deployed contracts tool
 */
export const HYPERLANE_GET_DEPLOYED_CONTRACTS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me all Hyperlane contracts deployed on Optimism",
        },
        referenceOutputs: {
            tool: "hyperlane_get_deployed_contracts",
            response: '{"chain":"optimism"}',
        },
    },
    {
        inputs: {
            query: "List the ISM contracts on Polygon",
        },
        referenceOutputs: {
            tool: "hyperlane_get_deployed_contracts",
            response: '{"chain":"polygon","contractType":"ism"}',
        },
    },
];

/**
 * Dataset for testing Hyperlane configure ISM tool
 */
export const HYPERLANE_CONFIGURE_ISM_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Configure a multisig ISM on Ethereum with 3 validators and threshold 2",
        },
        referenceOutputs: {
            tool: "hyperlane_configure_ism",
            response:
                '{"chain":"ethereum","type":"merkleRootMultisigIsm","config":{"validators":[{"signingAddress":"0x1234567890123456789012345678901234567890"},{"signingAddress":"0xabcdef1234567890abcdef1234567890abcdef12"},{"signingAddress":"0x9876543210987654321098765432109876543210"}],"threshold":2}}',
        },
    },
    {
        inputs: {
            query: "Set up a pausable ISM on Optimism with owner 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "hyperlane_configure_ism",
            response:
                '{"chain":"optimism","type":"pausableIsm","config":{"owner":"0x1234567890123456789012345678901234567890"}}',
        },
    },
];

/**
 * Dataset for testing Hyperlane manage validators tool
 */
export const HYPERLANE_MANAGE_VALIDATORS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Add validator 0x1234567890123456789012345678901234567890 to the multisig at 0xabcdef1234567890abcdef1234567890abcdef12 on Ethereum",
        },
        referenceOutputs: {
            tool: "hyperlane_manage_validators",
            response:
                '{"chain":"ethereum","action":"ADD","validator":"0x1234567890123456789012345678901234567890","multisig":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Remove validator 0x9876543210987654321098765432109876543210 from the validator set 0xabcdef1234567890abcdef1234567890abcdef12 on Optimism",
        },
        referenceOutputs: {
            tool: "hyperlane_manage_validators",
            response:
                '{"chain":"optimism","action":"REMOVE","validator":"0x9876543210987654321098765432109876543210","multisig":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
];

/**
 * Dataset for testing Hyperlane monitor security tool
 */
export const HYPERLANE_MONITOR_SECURITY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Check the security status of validator set 0x1234567890123456789012345678901234567890 on Ethereum",
        },
        referenceOutputs: {
            tool: "hyperlane_monitor_security",
            response: '{"chain":"ethereum","validatorSet":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Monitor the security of message 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 on Optimism",
        },
        referenceOutputs: {
            tool: "hyperlane_monitor_security",
            response:
                '{"chain":"optimism","messageId":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"}',
        },
    },
];

/**
 * Dataset for testing Hyperlane announce validator tool
 */
export const HYPERLANE_ANNOUNCE_VALIDATOR_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Announce validator 0x1234567890123456789012345678901234567890 with signing address 0xabcdef1234567890abcdef1234567890abcdef12 on Ethereum using mailbox 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "hyperlane_announce_validator",
            response:
                '{"chain":"ethereum","validatorAddress":"0x1234567890123456789012345678901234567890","signingAddress":"0xabcdef1234567890abcdef1234567890abcdef12","mailboxAddress":"0x9876543210987654321098765432109876543210"}',
        },
    },
    {
        inputs: {
            query: "Register validator 0xabcdef1234567890abcdef1234567890abcdef12 with signing key 0x9876543210987654321098765432109876543210 on Optimism mailbox 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "hyperlane_announce_validator",
            response:
                '{"chain":"optimism","validatorAddress":"0xabcdef1234567890abcdef1234567890abcdef12","signingAddress":"0x9876543210987654321098765432109876543210","mailboxAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Dataset for testing Hyperlane configure relayer tool
 */
export const HYPERLANE_CONFIGURE_RELAYER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Configure Hyperlane relayer on Ethereum to whitelist addresses 0x1234567890123456789012345678901234567890 and 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "hyperlane_configure_relayer",
            response:
                '{"chain":"ethereum","whitelist":["0x1234567890123456789012345678901234567890","0xabcdef1234567890abcdef1234567890abcdef12"]}',
        },
    },
    {
        inputs: {
            query: "Set gas payment configuration for Hyperlane relayer on Optimism with min gas 100000, max gas 500000, and gas token 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "hyperlane_configure_relayer",
            response:
                '{"chain":"optimism","gasPaymentConfig":{"minGas":100000,"maxGas":500000,"gasToken":"0x9876543210987654321098765432109876543210"}}',
        },
    },
];

/**
 * Dataset for testing Hyperlane manage gas payment tool
 */
export const HYPERLANE_MANAGE_GAS_PAYMENT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Pay gas for Hyperlane message 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef on Ethereum with 0.01 ETH to recipient 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "hyperlane_manage_gas_payment",
            response:
                '{"chain":"ethereum","messageId":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","gasAmount":"10000000000000000","recipient":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Fund gas for Hyperlane message 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 on Optimism with 0.005 ETH to 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "hyperlane_manage_gas_payment",
            response:
                '{"chain":"optimism","messageId":"0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890","gasAmount":"5000000000000000","recipient":"0x9876543210987654321098765432109876543210"}',
        },
    },
];

/**
 * Dataset for testing Hyperlane monitor relayer tool
 */
export const HYPERLANE_MONITOR_RELAYER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Check the messages delivered and gas used by Hyperlane relayer on Ethereum",
        },
        referenceOutputs: {
            tool: "hyperlane_monitor_relayer",
            response: '{"chain":"ethereum","metrics":["messages_delivered","gas_used"]}',
        },
    },
    {
        inputs: {
            query: "Monitor the success rate and latency of Hyperlane relayer 0x1234567890123456789012345678901234567890 on Optimism",
        },
        referenceOutputs: {
            tool: "hyperlane_monitor_relayer",
            response:
                '{"chain":"optimism","relayer":"0x1234567890123456789012345678901234567890","metrics":["success_rate","latency"]}',
        },
    },
];

/**
 * Dataset for testing Hyperlane deploy chain tool
 */
export const HYPERLANE_DEPLOY_CHAIN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Deploy Hyperlane core contracts to a new chain called 'mychain' with chain ID 12345 and RPC URL https://mychain.rpc.com",
        },
        referenceOutputs: {
            tool: "hyperlane_deploy_chain",
            response: '{"chain":"mychain","chainId":12345,"rpcUrl":"https://mychain.rpc.com"}',
        },
    },
    {
        inputs: {
            query: "Set up Hyperlane on testchain with chain ID 54321, domain ID 54321, RPC URL https://testchain.rpc.com, and validators 0x1234567890123456789012345678901234567890 and 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "hyperlane_deploy_chain",
            response:
                '{"chain":"testchain","chainId":54321,"domainId":54321,"rpcUrl":"https://testchain.rpc.com","validators":[{"address":"0x1234567890123456789012345678901234567890"},{"address":"0xabcdef1234567890abcdef1234567890abcdef12"}]}',
        },
    },
];

/**
 * Dataset for testing Hyperlane get tokens tool
 */
export const HYPERLANE_GET_TOKENS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get all USDC tokens deployed on Hyperlane Warp Routes",
        },
        referenceOutputs: {
            tool: "get_hyperlane_tokens",
            response: '{"tokenSymbol":"USDC"}',
        },
    },
    {
        inputs: {
            query: "Find Hyperlane tokens on Ethereum with ERC20 standard",
        },
        referenceOutputs: {
            tool: "get_hyperlane_tokens",
            response: '{"chain":"ethereum","standard":"ERC20"}',
        },
    },
    {
        inputs: {
            query: "Get token information for Hyperlane router at address 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "get_hyperlane_tokens",
            response: '{"routerAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Combined dataset for all Hyperlane tools
 */
export const HYPERLANE_ALL_TOOLS_DATASET: EvalDataset = [
    ...HYPERLANE_MAKE_WARP_DATASET,
    ...HYPERLANE_SEND_MESSAGE_DATASET,
    ...HYPERLANE_READ_MESSAGE_DATASET,
    ...HYPERLANE_GET_MAILBOX_DATASET,
    ...HYPERLANE_GET_DEPLOYED_CONTRACTS_DATASET,
    ...HYPERLANE_CONFIGURE_ISM_DATASET,
    ...HYPERLANE_MANAGE_VALIDATORS_DATASET,
    ...HYPERLANE_MONITOR_SECURITY_DATASET,
    ...HYPERLANE_ANNOUNCE_VALIDATOR_DATASET,
    ...HYPERLANE_CONFIGURE_RELAYER_DATASET,
    ...HYPERLANE_MANAGE_GAS_PAYMENT_DATASET,
    ...HYPERLANE_MONITOR_RELAYER_DATASET,
    ...HYPERLANE_DEPLOY_CHAIN_DATASET,
    ...HYPERLANE_GET_TOKENS_DATASET,
];
