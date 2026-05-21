---
title: Your first transaction
description: Send 1 KITE on Kite Testnet using viem.
order: 2
last_updated: 2026-05-20
authors: ["@gnanam1990"]
---

# Your first transaction

You'll send `1 KITE` from your funded testnet account to any other address.

## Prerequisites

- A Kite Testnet address with a balance — top up via [KiteFaucet](https://github.com/gnanam1990/kitefaucet)
- Node 20+
- `viem` installed: `pnpm add viem`

## Code

```ts
import { createWalletClient, http, parseEther, defineChain } from "viem";
import { privateKeyToAccount } from "viem/accounts";

const kiteTestnet = defineChain({
  id: 2368,
  name: "Kite Testnet",
  nativeCurrency: { name: "KITE", symbol: "KITE", decimals: 18 },
  rpcUrls: { default: { http: ["https://rpc-testnet.gokite.ai"] } },
});

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const client = createWalletClient({ account, chain: kiteTestnet, transport: http() });

const hash = await client.sendTransaction({
  to: "0x0000000000000000000000000000000000000001",
  value: parseEther("1"),
});

console.log("https://testnet.kitescan.ai/tx/" + hash);
```

## What you should see

- The script prints a link to KiteScan Testnet
- After ~3 seconds the tx is finalized and visible in the explorer
- Your balance drops by `1 KITE` + gas
