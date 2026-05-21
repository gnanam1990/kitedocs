---
title: React integration
description: Wiring wagmi + viem to Kite for browser apps.
order: 3
last_updated: 2026-05-20
---

# React integration

`wagmi` provides hooks; `viem` provides primitives. Add both.

```bash
pnpm add wagmi viem @tanstack/react-query
```

## Config

```ts
// src/lib/wagmi.ts
import { http, createConfig } from "wagmi";
import { injected } from "wagmi/connectors";
import { defineChain } from "viem";

export const kiteMainnet = defineChain({
  id: 2366,
  name: "Kite Mainnet",
  nativeCurrency: { name: "KITE", symbol: "KITE", decimals: 18 },
  rpcUrls: { default: { http: ["https://rpc.gokite.ai"] } },
});

export const wagmiConfig = createConfig({
  chains: [kiteMainnet],
  connectors: [injected()],
  transports: { [kiteMainnet.id]: http() },
});
```

## Provider

```tsx
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "./lib/wagmi";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
```
