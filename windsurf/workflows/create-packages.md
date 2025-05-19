---
description: เขียน workflows การสร้าง monorepo packages ด้วย turborepo, bun, biome, release it
---

# Monorepo Package Creation Workflow

This workflow guides you through creating and managing a monorepo using Turborepo with Bun:

## Setup Monorepo

1. **Create Turborepo project**
   ```bash
   bunx create-turbo@latest
   ```

2. **Configure root package.json**
   - Set `"private": true` for the root workspace
   - Configure workspaces array