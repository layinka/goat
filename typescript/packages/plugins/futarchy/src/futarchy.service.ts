import { Tool } from "@goat-sdk/core";
import { SolanaWalletClient } from "@goat-sdk/wallet-solana";
import { AutocratClient, AmmClient, ConditionalVaultClient } from "@metadaoproject/futarchy";
import { PublicKey } from "@solana/web3.js";
import { BN } from "bn.js";
import {
    InitializeDaoParameters,
    InitializeProposalParameters,
    SwapParameters,
    AddLiquidityParameters,
    RemoveLiquidityParameters,
    SplitTokenParameters,
    MergeTokenParameters
} from "./parameters";

export class FutarchyService {
    @Tool({
        description: "Initialize a new DAO with futarchy governance",
    })
    async initializeDao(walletClient: SolanaWalletClient, parameters: InitializeDaoParameters) {
        const client = AutocratClient.createClient({
            provider: walletClient.getAnchorProvider()
        });

        const daoAddress = await client.initializeDao(
            new PublicKey(parameters.tokenMint),
            parameters.tokenPriceUiAmount,
            parameters.minBaseFutarchicLiquidity,
            parameters.minQuoteFutarchicLiquidity
        );

        return daoAddress.toString();
    }

    @Tool({
        description: "Create a new proposal in the DAO",
    })
    async initializeProposal(walletClient: SolanaWalletClient, parameters: InitializeProposalParameters) {
        const client = AutocratClient.createClient({
            provider: walletClient.getAnchorProvider()
        });

        const proposalAddress = await client.initializeProposal(
            new PublicKey(parameters.dao),
            parameters.descriptionUrl,
            parameters.instruction,
            new BN(parameters.baseTokensToLP),
            new BN(parameters.quoteTokensToLP)
        );

        return proposalAddress.toString();
    }

    @Tool({
        description: "Swap tokens in an AMM pool",
    })
    async swap(walletClient: SolanaWalletClient, parameters: SwapParameters) {
        const client = AmmClient.createClient({
            provider: walletClient.getAnchorProvider()
        });

        const txHash = await client.swap(
            new PublicKey(parameters.ammAddress),
            new BN(parameters.inputAmount),
            new BN(parameters.minimumOutputAmount),
            parameters.inputIsA
        );

        return txHash;
    }

    @Tool({
        description: "Add liquidity to an AMM pool",
    })
    async addLiquidity(walletClient: SolanaWalletClient, parameters: AddLiquidityParameters) {
        const client = AmmClient.createClient({
            provider: walletClient.getAnchorProvider()
        });

        const txHash = await client.addLiquidity(
            new PublicKey(parameters.ammAddress),
            new BN(parameters.maxTokenAAmount),
            new BN(parameters.maxTokenBAmount),
            new BN(parameters.minLpTokenAmount)
        );

        return txHash;
    }

    @Tool({
        description: "Remove liquidity from an AMM pool",
    })
    async removeLiquidity(walletClient: SolanaWalletClient, parameters: RemoveLiquidityParameters) {
        const client = AmmClient.createClient({
            provider: walletClient.getAnchorProvider()
        });

        const txHash = await client.removeLiquidity(
            new PublicKey(parameters.ammAddress),
            new BN(parameters.lpTokenAmount),
            new BN(parameters.minTokenAAmount),
            new BN(parameters.minTokenBAmount)
        );

        return txHash;
    }

    @Tool({
        description: "Split tokens into conditional tokens",
    })
    async splitToken(walletClient: SolanaWalletClient, parameters: SplitTokenParameters) {
        const client = ConditionalVaultClient.createClient({
            provider: walletClient.getAnchorProvider()
        });

        const txHash = await client.split(
            new PublicKey(parameters.vaultAddress),
            new BN(parameters.amount),
            parameters.condition
        );

        return txHash;
    }

    @Tool({
        description: "Merge conditional tokens back into regular tokens",
    })
    async mergeToken(walletClient: SolanaWalletClient, parameters: MergeTokenParameters) {
        const client = ConditionalVaultClient.createClient({
            provider: walletClient.getAnchorProvider()
        });

        const txHash = await client.merge(
            new PublicKey(parameters.vaultAddress),
            new BN(parameters.amount),
            parameters.condition
        );

        return txHash;
    }
}
