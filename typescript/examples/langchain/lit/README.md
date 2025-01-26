# Langchain with Lit Protocol Example

This example demonstrates how to create an AI agent using LangChain that can interact with both EVM (Ethereum) and Solana blockchains using Lit Protocol's Programmable Key Pairs (PKPs). The agent can perform operations like checking balances and sending tokens using natural language commands.

## Overview
The example showcases:
- Integration between LangChain, Lit Protocol, and blockchain networks
- Setting up Programmable Key Pairs (PKPs) and capacity credits
- Creating wrapped keys for both EVM and Solana chains
- Natural language interactions for blockchain operations
- Token balance checks and transfers on both networks

## Features
### EVM Example (src/evm.ts)
- Mints PKP and capacity credits on Lit Protocol
- Generates wrapped keys for EVM operations
- Supports ETH balance checks and transfers
- Includes ERC20 token support (USDC, PEPE)
- Uses Sepolia testnet for demonstrations

### Solana Example (src/sol.ts)
- Uses the same PKP infrastructure for Solana
- Generates Solana-specific wrapped keys
- Supports SOL balance checks and transfers
- Operates on Solana devnet

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Copy the `.env.template` to `.env` and populate with your values:
```bash
cp .env.template .env
```

### Required Environment Variables:
- `OPENAI_API_KEY`: Your OpenAI API key for the LangChain agent
- `WALLET_PRIVATE_KEY`: Private key with Lit test tokens for PKP minting
- `RPC_PROVIDER_URL`: Ethereum RPC URL (Sepolia testnet)
- `SOLANA_PRIVATE_KEY`: Solana wallet private key (for devnet)

### Prerequisites

1. Lit Protocol Test Tokens
   - Your `WALLET_PRIVATE_KEY` must have Lit test tokens to mint PKP and capacity credit
   - Get test tokens from the [Lit Testnet Faucet](https://chronicle-yellowstone-faucet.getlit.dev/)

2. Solana Devnet SOL
   - Your `SOLANA_PRIVATE_KEY` needs SOL on Solana Devnet
   - Get SOL from the [Solana Devnet Faucet](https://faucet.solana.com/?cluster=devnet)

3. Sepolia ETH
   - Your wallet needs ETH on Sepolia testnet
   - Get ETH from the [Sepolia Faucet](https://sepoliafaucet.com/)

## Usage

### EVM Example
```bash
npx ts-node src/evm.ts
```

The EVM example will:
1. Set up Lit Protocol infrastructure (PKP, capacity credits)
2. Fund the wrapped key with ETH
3. Allow natural language interactions for:
   - Checking USDC balance
   - Checking ETH balance
   - Sending ETH to specified addresses

### Solana Example
```bash
npx ts-node src/sol.ts
```

The Solana example will:
1. Set up the same Lit Protocol infrastructure
2. Fund the wrapped key with SOL
3. Allow natural language interactions for:
   - Checking SOL balance
   - Sending SOL to specified addresses

## Note
- Both examples use the DatilTest network for Lit Protocol
- The EVM example uses Sepolia testnet
- The Solana example uses Solana devnet
- The examples use GPT-4o-mini model for natural language processing
