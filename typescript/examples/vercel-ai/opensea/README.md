# Vercel AI with OpenSea Example

This example demonstrates how to use GOAT with Vercel AI SDK to interact with OpenSea's API. It provides a natural language interface for retrieving NFT collection statistics and recent sales information from OpenSea's marketplace.

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
- `WALLET_PRIVATE_KEY`: Your wallet's private key (with or without 0x prefix)
- `RPC_PROVIDER_URL`: Ethereum RPC URL for mainnet
- `OPENSEA_API_KEY`: Your OpenSea API key for accessing their API

### Prerequisites
1. OpenSea Setup
   - Valid OpenSea API key
   - Understanding of OpenSea's API rate limits
   - Knowledge of collection slugs/names

## Usage

1. Run the example:
```bash
npx ts-node index.ts
```

2. Example interactions:
```
# Collection Statistics
Get NFT collection statistics for Nouns
Show me recent sales from Bored Ape Yacht Club
What's the floor price of CryptoPunks?

# Sales Analysis
Show recent sales with prices
Get collection volume statistics
View transaction history
```

3. Understanding responses:
   - Collection statistics
   - Floor prices
   - Recent sales data
   - Volume metrics
   - Transaction details
