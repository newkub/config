---
description: Bun Vue TypeScript Website Development Guide
---

# Bun Vue TypeScript Website Development Guide

This guide outlines best practices for building high-performance web applications with Bun, Vue, and TypeScript.

## 1. Project Setup

- **Core Dependencies**
  ```json
  "dependencies": {
    "vue": "^3.3.4",
    "vue-router": "^4.2.4",
    "pinia": "^2.1.6",
    "axios": "^1.5.0",
    "vee-validate": "^4.11.3"
  }
  ```

- **Development Environment**
  ```json
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.3.4",
    "typescript": "^5.2.2",
    "vite": "^4.4.9",
    "bun-types": "latest",
    "vue-tsc": "^1.8.10",
    "vitest": "^0.34.4",
    "@vue/test-utils": "^2.4.1"
  }
  ```

- **Workflow Scripts**
  ```json
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "typecheck": "vue-tsc --noEmit",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts",
    "lint:fix": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix"
  }
description: Bun Vue TypeScript Website Development Guide
---

# Bun Vue TypeScript Website Development Guide

This guide outlines best practices for building high-performance web applications with Bun, Vue, and TypeScript.

## 1. Project Setup

- **Core Dependencies**
  ```json
  "dependencies": {
    "vue": "^3.3.4",
    "vue-router": "^4.2.4",
    "pinia": "^2.1.6",
    "axios": "^1.5.0",
    "vee-validate": "^4.11.3"
  }
  ```

- **Development Environment**
  ```json
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.3.4",
    "typescript": "^5.2.2",
    "vite": "^4.4.9",
    "bun-types": "latest",
    "vue-tsc": "^1.8.10",
    "vitest": "^0.34.4",
    "@vue/test-utils": "^2.4.1"
  }
  ```

- **Workflow Scripts**