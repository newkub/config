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
  ```

## 2. Code Architecture Optimization

### TypeScript Enhancement
- Implement branded types for type-safe identifiers
- Create discriminated unions for state management
- Apply utility types for reusable functionality
- Use readonly modifiers for immutable data structures
- Leverage template literal types for string manipulation

### Bun-Specific Optimizations
- Leverage Bun's fast startup and runtime performance
- Use Bun.file() API for efficient file operations
- Implement Bun.serve() for lightweight HTTP services
- Apply Bun's SQLite integration for data storage
- Utilize Bun.password APIs for secure credential handling

### CLI Structure Improvement
- Organize commands with proper TypeScript interfaces
- Create pure utility functions with explicit return types
- Separate business logic from command handlers
- Implement proper error handling and exit codes
- Extract common patterns into reusable modules

## 3. Code Quality & Maintainability

### Redundancy Elimination
- Consolidate similar functionality into shared utilities
- Extract repeated patterns into reusable functions
- Merge overlapping type definitions into unified interfaces
- Implement memoization for expensive computations
- Replace repetitive type assertions with custom type guards

### Project Structure Organization
- Create clear domain boundaries with module-based architecture
- Organize by feature rather than technical layer
- Use path aliases for improved import readability
- Implement dynamic imports for code splitting
- Apply proper separation of concerns

### Documentation & Conventions
- Add JSDoc comments with TypeScript annotations
- Document command interfaces with usage examples
- Implement consistent naming conventions
- Include performance considerations in documentation
- Create architecture diagrams for complex systems

## 4. Testing & Performance

### Testability Improvement
- Use Bun's built-in test runner for optimal performance
- Create typed test fixtures and factories
- Implement dependency injection with interfaces
- Create pure functions for easier testing
- Apply proper test isolation techniques

### Performance Optimization
- Implement async/await patterns efficiently
- Apply proper environment variable handling
- Use const assertions for immutable values
- Optimize resource usage and memory management
- Implement proper error handling strategies

### Modern Pattern Adoption
- Use optional chaining and nullish coalescing
- Apply const assertions and type predicates
- Leverage TypeScript 5.0+ features
- Implement proper error handling with Result types
- Apply appropriate design patterns (Repository, Strategy, Command)