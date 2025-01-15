import type { EVMTransaction } from "../../../../wallets/evm/src/types/EVMTransaction";

export type UniswapTransactionResponse = {
    transaction: EVMTransaction;
    gasFee?: string;
    simulationResults?: {
        gasUsed: string;
        gasPrice: string;
        totalCost: string;
    };
};

export type UniswapApprovalResponse = {
    needsApproval: boolean;
    transaction?: EVMTransaction;
    simulationResults?: {
        gasUsed: string;
        gasPrice: string;
        totalCost: string;
    };
};

export type UniswapLiquidityResponse = {
    transaction: EVMTransaction;
    gasFee?: string;
    simulationResults?: {
        gasUsed: string;
        gasPrice: string;
        totalCost: string;
    };
    positionId?: string;
};
