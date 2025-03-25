# Simple Plugin Evaluation Example

This example demonstrates how to use the GOAT SDK evaluation engine to test a plugin's functionality.

## Setup

1. Create a `.env` file with the following variables:
   ```
   WALLET_PRIVATE_KEY=your_private_key
   RPC_PROVIDER_URL=your_rpc_provider_url
   OPENAI_API_KEY=your_openai_api_key
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

## Running the Example

```
pnpm dev
```

## How It Works

This example:
1. Sets up a wallet and LLM
2. Defines a dataset of test cases for the ERC20 token information tool
3. Runs the evaluation engine to test if the LLM correctly invokes the tool
4. Reports the results
```
