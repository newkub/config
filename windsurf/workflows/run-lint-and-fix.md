---
description: Run Lint and Check Code Issues
---

# Run Lint and Check Code Issues

This guide explains how to lint your code and check for common issues in your Bun TypeScript CLI project.

## Running Lint Checks

To identify code issues and style violations, run:

```bash
bun run lint
```

This executes Biome's linting rules against your codebase as configured in `biome.json`.

## Formatting Your Code

To automatically format your code according to style rules:

```bash
bun run format