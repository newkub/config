---
description: Run Lint and Fix Code Issues
---

# Run Lint and Fix Code Issues

This guide explains how to lint your code and fix common issues in your Bun TypeScript CLI project.

## Running Lint Checks

To identify code issues and style violations, run:

```bash
npm run lint
# or
bun run lint
```

This executes Biome's linting rules against your codebase as configured in `biome.json`.

## Automatically Fixing Issues

To automatically fix linting issues:

```bash
npm run lint:fix
# or
bun run lint:fix