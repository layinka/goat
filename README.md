

<div align="center">
Go out and eat some grass.

[Docs](https://ohmygoat.dev) | [Examples](https://github.com/goat-sdk/goat/tree/main/typescript/examples) | [Discord](https://discord.gg/goat-sdk)

GOAT is free software, MIT licensed, sponsored by [Crossmint](https://www.crossmint.com)
</div>

## Goat 🐐
GOAT 🐐 (Great Onchain Agent Toolkit) is an open-source library of blockchain tools for AI agents. Example tools include
wallets, sending tokens, minting NFTs, or interacting with protocols like Polymarket, Uniswap.

### Why?

Blockchains and web3 protocols can be a powerful tool for AI agents, enabling them become financial agents and tap into
a global, unstoppable computer with hundreds of use cases.

However, making agents perform onchain actions is tedious. Finding common instructions to perform simple actions - like
sending USDC payments or placing Polymarket bets - to work with whatever agent framework you're using is nearly
impossible.

GOAT aims to be the biggest compendium of blockchain tools for agents, compatible with all the popular agent frameworks,
blockchains, and wallets.

## How? 

GOAT is an open-source library, designed with the following guiding principles:
* **Provider Agnostic**: Works with any wallet provider, including your own key pairs, [Crossmint Smart Wallets](https://docs.crossmint.com/wallets/smart-wallets/overview), and Coinbase.
* **Framework Agnostic**: Works with all the popular agent frameworks, including Langchain, Vercel's AI SDK, Eliza, and more.
* **Language Agnostic**: Works with Typescript and Python.
* **Blockchain Agnostic**: Works with all the popular blockchains, including EVM chains and Solana.
* Agent experience

GOAT solves this by providing an open-source, provider-agnostic framework that abstracts away all these combinations.

- **For agent developers**: GOAT offers an always-growing catalog of ready made blockchain actions (sending tokens, using a DeFi protocol, ...) that can be imported as tools into your existing agent. It works with the most popular agent frameworks (Langchain, Vercel's AI SDK, Eliza, etc), Typescript and Python, 30+ blockchains (Solana, Base, Polygon, Mode, ...), and many wallet providers.
- **For dApp / smart contract developers**: develop a plug-in in GOAT, and allow agents built with any of the most popular agent develoment frameworks to access your service.

### Key features
1. **Works Everywhere**: Compatible with Langchain, Vercel’s AI SDK, Eliza, and more.
2. **Wallet Agnostic**: Supports all wallets, from your own key pairs to [Crossmint Smart Wallets](https://docs.crossmint.com/wallets/smart-wallets/overview) and Coinbase.
3. **Multi-Chain**: Supports EVM chains and Solana (more coming 👀).
4. **Customizable**: Use or build plugins for any onchain functionality (sending tokens, checking wallet balance, etc) and protocol (Polymarket, Uniswap, etc).

![goat](https://github.com/user-attachments/assets/f6aa46ce-5684-4136-be29-7867acab3f27)

### How it works
GOAT plugs into your agents tool calling capabilities adding all the functions your agent needs to interact with the blockchain. 

High-level, here's how it works:

#### Configure the wallet you want to use
```typescript
// ... Code to connect your wallet (e.g createWalletClient from viem)
const wallet = ...

const tools = getOnChainTools({
  wallet: viem(wallet),
})
```

#### Add the plugins you need to interact with the protocols you want
```typescript
const wallet = ...

const tools = getOnChainTools({
  wallet: viem(wallet),
  plugins: [
    sendETH(),
    erc20({ tokens: [USDC, PEPE] }),
    faucet(),
    polymarket(),
    // ...
  ],
})
```

#### Connect it to your agent framework of choice
```typescript
// ... Code to connect your wallet (e.g createWalletClient from viem)
const wallet = ...

const tools = getOnChainTools({
  wallet: viem(wallet),
  plugins: [ 
    sendETH(),
    erc20({ tokens: [USDC, PEPE] }), 
    faucet(), 
    polymarket(), 
    // ...
  ],
})

// Vercel's AI SDK
const result = await generateText({
    model: openai("gpt-4o-mini"),
    tools: tools,
    maxSteps: 5,
    prompt: "Send 420 ETH to ohmygoat.eth",
});
```

See [here](https://github.com/goat-sdk/goat/tree/main/typescript/examples) for more examples.
