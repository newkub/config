---
description: Bun and TypeScript Refactoring Guide
---

# Bun and TypeScript Refactoring Workflow

Please help refactor my codebase with the following structured approach:

## 1. Foundation Setup

- **Package Configuration**
  ```json
  "dependencies": {
    "@clack/prompts": "^0.7.0",
    "commander": "^11.1.0",
    "execa": "^8.0.1",
    "picocolors": "^1.0.0"
  }
  ```

- **Development Tools**
  ```json
  "devDependencies": {
    "@biomejs/biome": "^1.4.1",
    "@types/bun": "^1.0.0",
    "@types/node": "^20.10.0",
    "typescript": "^5.3.0",
    "bun-types": "latest"
  }
  ```

- **Essential Scripts**
  ```json
  "scripts": {
    "dev": "bun run --watch src/index.ts",
    "build": "bun build src/index.ts --target node --outdir dist",
    "start": "bun run dist/index.js",
    "test": "bun test",
    "test:watch": "bun test --watch",
    "lint": "biome check .",
    "lint:fix": "biome check --apply .",
    "typecheck": "tsc --noEmit",
    "format": "biome format --write ."
  }