---
title: Create a payment link
description: Accept stablecoin payments on Kite with KitePay.
order: 4
last_updated: 2026-05-20
authors: ["@gnanam1990"]
preview: true
---

# Create a payment link

KitePay produces shareable URLs that ask the recipient to send a fixed amount of USDC.e (Mainnet) or Test USDT (Testnet) to your address.

## Quick example

```tsx
import { createPaymentLink } from "@kitepay/sdk"; // PREVIEW — package coming v0.2

const link = createPaymentLink({
  payee: "0xc82C2ADE9BbacF01C2168756Ce66E88F69676967",
  amountUsdc: "12.50",
  memo: "Invoice #4421",
  network: "mainnet",
});

console.log(link); // https://kitepay.dev/p/abc123
```

> The SDK is in preview. Until then, build the URL by hand against `kitepay.dev/new` and copy the resulting share link.
