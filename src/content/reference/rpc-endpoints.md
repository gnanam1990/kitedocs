---
title: RPC endpoints
description: Mainnet and Testnet RPC URLs, chain IDs, explorers.
order: 1
last_updated: 2026-05-20
---

# RPC endpoints

| Network | Chain ID | RPC URL | Explorer |
|---------|---------:|---------|----------|
| Mainnet | 2366 | `https://rpc.gokite.ai/` | https://kitescan.ai |
| Testnet | 2368 | `https://rpc-testnet.gokite.ai/` | https://testnet.kitescan.ai |

Native token is **KITE** (18 decimals) on both networks.

## Example — `viem` config

```ts
import { defineChain } from "viem";

export const kiteMainnet = defineChain({
  id: 2366,
  name: "Kite Mainnet",
  nativeCurrency: { name: "KITE", symbol: "KITE", decimals: 18 },
  rpcUrls: { default: { http: ["https://rpc.gokite.ai"] } },
  blockExplorers: { default: { name: "KiteScan", url: "https://kitescan.ai" } },
});
```
