# Contributing to KiteDocs

KiteDocs is community-maintained. PRs welcome.

## What we accept

- Tutorials with working, tested code
- Reference updates (new contract addresses, endpoint changes)
- Integration guides for new languages or frameworks
- FAQ entries you've personally hit
- Glossary additions

## What we don't accept

- Speculation about unreleased Kite features
- Promotional content for specific projects
- Copy-pasted text from `docs.gokite.ai` (link to it instead)
- Anything factually wrong or misleading

## How to submit

1. Fork this repo
2. Add a Markdown file under `src/content/{tutorials,reference,guides}/`
3. Include the standard frontmatter (`title`, `description`, `order`, `last_updated`)
4. Set `preview: true` if your content references something that isn't live yet
5. Open a PR with a clear title

## Style guide

- Plain English, short sentences
- Code examples must run as-shown
- Show small examples — link to full repos for deep dives
- No marketing speak
- Warm, helpful tone
