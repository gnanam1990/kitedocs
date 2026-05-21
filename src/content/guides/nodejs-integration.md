---
title: Node.js integration
description: Using viem with Kite from a Node.js backend.
order: 1
last_updated: 2026-05-20
---

# Node.js integration

`viem` is the recommended client. It's tree-shakable, fully-typed, and ships with the chain primitives you'll need.

## Install

```bash
pnpm add viem
```

## Reading state

```ts
import { createPublicClient, http, defineChain, formatEther } from "viem";

const kite = defineChain({
  id: 2366,
  name: "Kite Mainnet",
  nativeCurrency: { name: "KITE", symbol: "KITE", decimals: 18 },
  rpcUrls: { default: { http: ["https://rpc.gokite.ai"] } },
});

const client = createPublicClient({ chain: kite, transport: http() });

const block = await client.getBlockNumber();
const bal = await client.getBalance({ address: "0xc82C2ADE…6967" });
console.log({ block, kite: formatEther(bal) });
```

## Writing state

See [Your first transaction](/tutorials/your-first-transaction).
