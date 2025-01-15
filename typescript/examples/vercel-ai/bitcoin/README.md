# Bitcoin Wallet Example

This example demonstrates how to use the Bitcoin wallet implementation with Vercel AI integration in the GOAT SDK.

## Environment Variables

Before running this example, make sure to set up the following environment variables:

- `BITCOIN_TESTNET_PRIVATE_KEY`: Your Bitcoin testnet private key in hexadecimal format
  - Required for signing transactions and deriving wallet address
  - Example: `"1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"`

Optional environment variables:
- `BLOCKCYPHER_API_TOKEN`: Your BlockCypher API token
  - Optional but recommended for higher rate limits
  - Get one at [BlockCypher's website](https://accounts.blockcypher.com/)

## Usage

```bash
# Install dependencies
pnpm install

# Run the example
node ./examples/vercel-ai/bitcoin/index.js
```

## Features

- Bitcoin testnet wallet integration
- Balance checking
- Transaction sending
- AI-powered interaction through Vercel AI

## Security Note

Never commit your private keys or API tokens. Always use environment variables and keep your `.env` file in `.gitignore`.
