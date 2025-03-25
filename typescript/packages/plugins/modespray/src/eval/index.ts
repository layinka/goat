// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing ModeSpray disperse ETH tool
 */
export const MODESPRAY_DISPERSE_ETH_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Send 0.1 ETH to addresses 0x1111111111111111111111111111111111111111 and 0x2222222222222222222222222222222222222222",
        },
        referenceOutputs: {
            tool: "disperse_eth_to_multiple_addresses",
            response:
                '{"recipients":["0x1111111111111111111111111111111111111111","0x2222222222222222222222222222222222222222"],"amounts":["100000000000000000","100000000000000000"]}',
        },
    },
    {
        inputs: {
            query: "Distribute 0.5 ETH to 0x3333333333333333333333333333333333333333 and 0.3 ETH to 0x4444444444444444444444444444444444444444",
        },
        referenceOutputs: {
            tool: "disperse_eth_to_multiple_addresses",
            response:
                '{"recipients":["0x3333333333333333333333333333333333333333","0x4444444444444444444444444444444444444444"],"amounts":["500000000000000000","300000000000000000"]}',
        },
    },
    {
        inputs: {
            query: "Use ModeSpray to send 0.2 ETH to each of these addresses: 0x5555555555555555555555555555555555555555, 0x6666666666666666666666666666666666666666, and 0x7777777777777777777777777777777777777777",
        },
        referenceOutputs: {
            tool: "disperse_eth_to_multiple_addresses",
            response:
                '{"recipients":["0x5555555555555555555555555555555555555555","0x6666666666666666666666666666666666666666","0x7777777777777777777777777777777777777777"],"amounts":["200000000000000000","200000000000000000","200000000000000000"]}',
        },
    },
];

/**
 * Combined dataset for all ModeSpray tools
 */
export const MODESPRAY_ALL_TOOLS_DATASET: EvalDataset = [...MODESPRAY_DISPERSE_ETH_DATASET];
