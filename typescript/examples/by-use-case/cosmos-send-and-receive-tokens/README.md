<div align="center">
<img src="https://github.com/user-attachments/assets/5fc7f121-259c-492c-8bca-f15fe7eb830c" alt="GOAT" width="100px" height="auto" style="object-fit: contain;">
</div>


# Cosmos
## 🚀 Quickstart

This example demonstrates how to use GOAT to **send and receive PRYZM** on the Cosmos network.

You can use this example with any other agent framework and wallet of your choice.

## Setup
1. Clone the repository:
```bash
git clone https://github.com/goat-sdk/goat.git && cd goat
```

2. Run the following commands from the `typescript` directory:
```bash
cd typescript
pnpm install
pnpm build
```

3. Go to the example directory:
```bash
cd examples/by-use-case/cosmos-send-and-receive-tokens
```

4. Copy the `.env.template` and populate with your values:
```bash
cp .env.template .env
```
- `COHERE_API_KEY`
- `WALLET_MNEMONICS`
- `RPC_PROVIDER_URL`

## Usage
1. Run the interactive CLI:
```bash
pnpm ts-node index.ts
```

2. Chat with the agent:
- Check your balance for PRYZM
- Send PRYZM to another address
- Check your balance again to see the PRYZM you just sent

<footer>
<br/>
<br/>
<div>
  <img src="https://github.com/user-attachments/assets/59fa5ddc-9d47-4d41-a51a-64f6798f94bd" alt="GOAT" width="100%" height="auto" style="object-fit: contain; max-width: 800px;">

<div>
</footer>
