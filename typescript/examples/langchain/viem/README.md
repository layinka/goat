# LangChain with Viem Example

This example demonstrates how to create an AI agent using LangChain that can interact with EVM (Ethereum) chains using Viem for wallet operations. The agent can perform operations like checking token balances and sending transactions using natural language commands.

## Overview
The example showcases:
- Integration between LangChain and Viem for blockchain interactions
- Natural language processing for blockchain operations
- ERC20 token support (USDC, PEPE)
- ETH transfer capabilities
- Structured chat agent implementation

## Features
- Check USDC and other ERC20 token balances
- Check ETH balance
- Send ETH transactions
- Natural language interface for all operations
- Uses Sepolia testnet for demonstrations

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
- `WALLET_PRIVATE_KEY`: Your wallet's private key (with 0x prefix)
- `RPC_PROVIDER_URL`: Ethereum RPC URL (Sepolia testnet)

### Prerequisites
1. Sepolia ETH
   - Your wallet needs ETH on Sepolia testnet for transactions
   - Get ETH from the [Sepolia Faucet](https://sepoliafaucet.com/)

## Usage

1. Run the example:
```bash
npx ts-node index.ts
```

2. The agent will start and you can interact with it using natural language commands like:
   - "Get my balance in USDC"
   - "Get my ETH balance"
   - "Send 0.1 ETH to 0x..."

## Note
- The example uses the Sepolia testnet by default
- Uses GPT-4o-mini model for natural language processing
- Supports both ETH and ERC20 token operations
- All transactions are performed on the testnet to avoid using real funds
