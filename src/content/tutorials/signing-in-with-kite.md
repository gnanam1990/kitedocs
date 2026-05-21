---
title: Sign in with Kite
description: Use KiteAuth to add wallet-based sign-in to your app.
order: 3
last_updated: 2026-05-20
authors: ["@gnanam1990"]
---

# Sign in with Kite

[KiteAuth](https://github.com/gnanam1990/kiteauth) is an EIP-4361-style sign-in flow native to Kite. Stateless, signature-based, no servers required.

## Install

```bash
pnpm add @kiteauth/react @kiteauth/verify viem wagmi
```

## Frontend

```tsx
import { SignInWithKite, useKiteAuth } from "@kiteauth/react";

function App() {
  const { user, login } = useKiteAuth();
  if (user) return <p>Signed in as {user.address}</p>;
  return (
    <SignInWithKite
      onSignIn={(r) =>
        login({ ...r, expiresAt: Date.now() + 10 * 60 * 1000 })
      }
    />
  );
}
```

Wrap the tree with `WagmiProvider` from `wagmi`.

## Backend

```ts
import { verifyKiteSignature } from "@kiteauth/verify";

const result = await verifyKiteSignature({
  message,
  signature,
  expectedDomain: "example.com",
  expectedChainId: 2366,
});
```

If `result.valid` is true, `result.address` is the verified Kite address.
