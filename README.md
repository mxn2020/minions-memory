# minions-memory

**Persistent cross-session memory, recalled facts, and agent knowledge base**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-memory/sdk minions-sdk

# Python
pip install minions-memory

# CLI (global)
npm install -g @minions-memory/cli
```

---

## CLI

```bash
# Show help
memory --help
```

---

## Python SDK

```python
from minions_memory import create_client

client = create_client()
```

---

## Project Structure

```
minions-memory/
  packages/
    core/           # TypeScript core library (@minions-memory/sdk on npm)
    python/         # Python SDK (minions-memory on PyPI)
    cli/            # CLI tool (@minions-memory/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [memory.minions.help](https://memory.minions.help)
- Blog: [memory.minions.blog](https://memory.minions.blog)
- App: [memory.minions.wtf](https://memory.minions.wtf)

---

## License

[MIT](LICENSE)
