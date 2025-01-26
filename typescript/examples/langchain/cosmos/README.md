# Langchain with Cosmos Example using Cohere AI

This example demonstrates how to create an AI agent using LangChain and Cohere AI that can interact with the Cosmos blockchain. The agent can perform operations like checking token supply, querying token balances, and sending tokens using natural language commands.

## Overview
The example showcases:
- Integration between LangChain and Cosmos blockchain
- Using Cohere AI for natural language processing
- Cosmos bank operations (balance checks, token transfers)
- Structured chat agent implementation

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Copy the `env.template` to `.env` and populate with your values:
```bash
cp env.template .env
```

### Required Environment Variables:
- `COHERE_API_KEY`: Your Cohere AI API key (get it from [Cohere Dashboard](https://dashboard.cohere.ai/))
- `WALLET_MNEMONICS`: Your Cosmos wallet mnemonic phrase
- `RPC_PROVIDER_URL`: RPC endpoint for the Cosmos network (e.g., Pryzm, Atom, POKT, etc.)

## Usage

1. Run the example:
```bash
npx ts-node index.ts
```

2. Example commands you can try:
```typescript
// Get token total supply
"get the {TOKEN} token total supply"

// Check token balance
"get the {TOKEN} token balance of this address {ADDRESS}"

// Send tokens
"send 1 {TOKEN} token to {ADDRESS}"
```

Replace `{TOKEN}` with your token symbol (e.g., PRYZM) and `{ADDRESS}` with a valid Cosmos address.

## Note
The example is configured to work with various Cosmos-based chains. You can modify the wallet prefix in `index.ts` to work with different networks:
- "pryzm" for Pryzm network
- "atom" for Cosmos Hub
- "pokt" for Pocket Network
- "dora" for Dora network
