---
title: Contract addresses
description: Known contract addresses on Kite Mainnet and Testnet.
order: 2
last_updated: 2026-05-20
---

# Contract addresses

## Testnet (Chain ID 2368)

| Contract | Address | Decimals |
|----------|---------|---------:|
| Test USDT | `0x0fF5393387ad2f9f691FD6Fd28e07E3969e27e63` | 18 |

> Note: Test USDT on Kite Testnet uses **18 decimals**, not 6 like USDT on Ethereum. Always parse with `parseUnits(amount, 18)`.

## Mainnet (Chain ID 2366)

The canonical USDC.e address has not been published as of this writing — please file a PR with the address once available, or reference the [official docs](https://docs.gokite.ai).

## ABIs

Standard ERC-20:

```json
[
  { "name": "balanceOf", "type": "function", "stateMutability": "view",
    "inputs": [{ "name": "owner", "type": "address" }],
    "outputs": [{ "name": "", "type": "uint256" }] },
  { "name": "transfer", "type": "function", "stateMutability": "nonpayable",
    "inputs": [
      { "name": "to", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bool" }] }
]
```
