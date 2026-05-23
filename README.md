# KiteDocs

Community tutorials, reference, and integration guides for building on [Kite](https://gokite.ai).

> Not affiliated with Kite Foundation. Official docs: [docs.gokite.ai](https://docs.gokite.ai).

## Deployment

- **Production:** https://kitedocs.vercel.app
- **Host:** Vercel (`kitedocs`)
- **Status:** static Astro build verified
- **Last verified:** 2026-05-23

## Stack

- [Astro 5](https://astro.build) with content collections (`src/content/`)
- Tailwind v3 + custom warm Kite palette
- Shiki for code highlighting

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static output in ./dist
```

## Contribute

Articles are Markdown files under `src/content/`. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the style guide and PR rules.

## License

Content: CC-BY-4.0. Code: MIT.
