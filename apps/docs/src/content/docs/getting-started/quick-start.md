---
title: Quick Start
description: Get up and running with Minions Memory in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-memory/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_memory import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
memory info
```
