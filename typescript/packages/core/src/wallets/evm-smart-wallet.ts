import type { WalletClient } from "./core";

import type {
    EVMWalletClient,
    EVMTransaction,
    EVMTransactionResult,
} from "./evm";

export function isEVMSmartWalletClient(
    wallet: WalletClient
): wallet is EVMSmartWalletClient {
    return (
        typeof (wallet as EVMSmartWalletClient).sendBatchOfTransactions ===
        "function"
    );
}

export interface EVMSmartWalletClient extends EVMWalletClient {
    sendBatchOfTransactions: (
        transactions: EVMTransaction[]
    ) => Promise<EVMTransactionResult[]>;
}
