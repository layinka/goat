# Send NFT to Twitter Address Example

This example demonstrates how to use GOAT with Vercel AI SDK to send NFTs to Twitter users by automatically generating Crossmint wallets. It provides a natural language interface for NFT transfers, handling wallet creation and NFT sending in a single interaction.

## Overview
The example showcases:
- Automatic wallet generation for Twitter users
- NFT transfer capabilities
- Crossmint wallet integration
- Interactive CLI interface
- Natural language processing
- Sepolia testnet integration

## Features
- Generate wallets for Twitter users
- Send NFTs to Twitter addresses
- Interactive command prompt
- Natural language interface
- Transaction validation
- Crossmint wallet management
- Error handling and reporting

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Copy the `.env.template` and populate with your values:
```bash
cp .env.template .env
```

### Required Environment Variables:
- `OPENAI_API_KEY`: Your OpenAI API key for the AI model
- `WALLET_PRIVATE_KEY`: Your wallet's private key (with 0x prefix)
- `RPC_PROVIDER_URL`: Sepolia RPC URL
- `CROSSMINT_API_KEY`: Your Crossmint API key for wallet operations

### Prerequisites
1. Sepolia Network Setup
   - Wallet with Sepolia ETH for gas
   - Valid RPC endpoint
   - NFTs to transfer

2. Crossmint Setup
   - Valid API key
   - Understanding of wallet creation process
   - Access to required endpoints

## Usage

1. Run the interactive CLI:
```bash
npx ts-node index.ts
```

2. Example interactions:
```
# Send NFT to Twitter User
Send NFT with ID 123 to Twitter user @example
Transfer my NFT to @cryptouser

# Check Status
Verify wallet creation
Check transfer status
```

3. Understanding responses:
   - Wallet creation confirmation
   - Transfer transaction details
   - Error messages
   - Operation status

## Note
- Uses GPT-4o-mini model for natural language processing
- Connects to Sepolia testnet
- Maximum 10 steps per interaction
- Continuous operation until "exit" command
- Automatic wallet creation for recipients
