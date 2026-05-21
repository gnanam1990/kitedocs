---
title: Getting started with Kite
description: A 60-second orientation for devs new to the Kite chain.
order: 1
last_updated: 2026-05-20
authors: ["@gnanam1990"]
---

# Getting started with Kite

Kite is an EVM-compatible chain purpose-built for **agentic payments** — autonomous software agents paying each other and human merchants in stablecoins.

If you already build on Ethereum, the mental model is identical. The differences are:

- **Chain ID `2366`** (Mainnet) and **`2368`** (Testnet)
- Native token is **KITE** (18 decimals)
- Stablecoin of choice: **USDC.e** on Mainnet, **Test USDT** (`0x0fF53…7e63`) on Testnet
- Designed for agent-to-agent micro-payments (x402-style)

## What to try first

1. Drop your wallet on [KiteFaucet](https://github.com/gnanam1990/kitefaucet) → get 5 KITE + 10 Test USDT
2. View your address on [KiteScan Testnet](https://testnet.kitescan.ai)
3. Read [Your first transaction](/tutorials/your-first-transaction) to send funds programmatically
4. Browse the [contract addresses](/reference/contract-addresses) reference

## Where to next

- **Devs shipping a frontend** → [React integration](/guides/react-integration)
- **Devs shipping a backend** → [Node.js integration](/guides/nodejs-integration) or [Python integration](/guides/python-integration)
- **Devs wiring auth** → [Sign in with Kite](/tutorials/signing-in-with-kite)
- **Devs accepting payment** → [Create a payment link](/tutorials/creating-a-payment-link)

> Official source of truth: [docs.gokite.ai](https://docs.gokite.ai). KiteDocs is a community supplement.
