# Vercel AI with Solana Example

This example demonstrates how to use GOAT with Vercel AI SDK to create an interactive DeFi assistant for the Solana ecosystem. It provides a natural language interface for trading, token swaps, and market analysis using multiple Solana protocols and data providers.

## Overview
The example showcases:
- Jupiter DEX integration for token swaps
- SPL token operations
- Coingecko price data integration
- PumpFun protocol interaction
- Interactive Telegram bot interface
- Natural language DeFi operations
- Solana blockchain integration

## Setup

### Environment Configuration
1. Copy the `.env.template` and populate with your values:
```bash
cp .env.template .env
```

2. Required Environment Variables:
```env
# AI Model Configuration
OPENROUTER_API_KEY=           # Your OpenRouter API key for DeepSeek Chat v3

# Blockchain Configuration
WALLET_PRIVATE_KEY=           # Your Solana wallet's private key (Base58 encoded)
RPC_PROVIDER_URL=             # Solana RPC endpoint URL (e.g., https://api.mainnet-beta.solana.com)

# External Services
COINGECKO_API_KEY=           # Your Coingecko API key for market data
TELEGRAM_BOT_TOKEN=          # Your Telegram bot token from @BotFather
```

### Installation
1. Install dependencies:
```bash
pnpm install
```

## Usage

### Starting the Bot
1. Run the bot:
```bash
npx tsx index.ts
```

2. In Telegram:
   - Send `/start` to begin chatting with the bot
   - The bot will respond with a welcome message

### Example Commands

#### Token Balance Queries
```
"What's my SOL balance?"
"Show me all my SPL token balances"
"Check USDC balance in my wallet"
```

#### Market Data (Coingecko)
```
"What are the top trending coins?"
"Show me SOL price and market cap"
"Get 24h trading volume for BONK"
```

#### Token Swaps (Jupiter)
```
"Swap 1 SOL to USDC"
"Find best route to swap 100 USDC to SOL"
"Trade tokens with 0.5% slippage"
```

#### Token Creation (PumpFun)
```
"Create a new token named 'Awesome Token'"
"Launch token with symbol ATK and 0.1 SOL liquidity"
"Make a meme token with custom logo"
```

## Troubleshooting

### Common Issues

1. **Connection Issues**
   - Error: "Failed to connect to RPC endpoint"
   - Solution: Verify RPC_PROVIDER_URL is valid and accessible
   - Alternative: Try using a different RPC endpoint

2. **Transaction Failures**
   - Error: "Insufficient SOL for transaction"
   - Solution: Ensure wallet has enough SOL for fees (min. 0.01 SOL recommended)
   - Note: Some operations like token creation require more SOL

3. **API Limitations**
   - Error: "Rate limit exceeded"
   - Solution: Reduce request frequency or upgrade API plan
   - Affects: Coingecko market data requests

4. **Swap Issues**
   - Error: "Insufficient liquidity" or "Price impact too high"
   - Solution: Try smaller amounts or different token pairs
   - Note: Check Jupiter for available liquidity pools

5. **Token Creation Problems**
   - Error: "Invalid token parameters"
   - Solution: Verify all required fields (name, symbol, image URL)
   - Note: Image URL must be accessible and valid format

### Best Practices

1. **Transaction Safety**
   - Always verify token addresses before swaps
   - Use reasonable slippage (0.1% - 1% for stable pairs)
   - Keep sufficient SOL for transaction fees

2. **Market Data**
   - Cache frequently requested data
   - Use trending data for market overview
   - Verify token existence before queries

3. **Token Operations**
   - Double-check recipient addresses
   - Verify token decimals before transfers
   - Test with small amounts first
