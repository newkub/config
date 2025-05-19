---
description: Bun, Vue, TypeScript & UnoCSS Refactoring Guide
---

# Bun, Vue, TypeScript & UnoCSS Refactoring Workflow

Please help refactor my codebase with the following structured approach:

## 1. Foundation Setup

- **Package Configuration**
  ```json
  "dependencies": {
    "vue": "^3.3.x",
    "vue-router": "^4.2.x",
    "pinia": "^2.1.x",
    "@vueuse/core": "^10.x"
  }
  ```

- **Development Tools**
  ```json
  "devDependencies": {
    "@biomejs/biome": "^1.x",
    "@vitejs/plugin-vue": "^4.x",
    "typescript": "^5.x",
    "unocss": "^0.55.x",
    "vite": "^4.x",
    "vue-tsc": "^1.x"
  }
  ```

- **Essential Scripts**
  ```json
  "scripts": {
    "dev": "bun run --hot src/index.ts",
    "build": "vue-tsc && vite build",
    "preview": "bun run build && vite preview",
    "test": "bun test",
    "test:watch": "bun test --watch",
    "lint": "biome check .",
    "lint:fix": "biome check --apply .",
    "typecheck": "vue-tsc --noEmit",
    "format": "biome format --write ."
  }
  ```

## 2. Code Architecture Optimization

### TypeScript Enhancement
- Implement branded types for type-safe identifiers
- Create discriminated unions for state management
- Apply utility types for flexible component props
- Use readonly modifiers for immutable reactive data
- Leverage template literal types for dynamic class generation

### Vue Structure Improvement
- Utilize Composition API with proper TypeScript integration
- Create pure composables with explicit return types
- Separate business logic from UI components
- Implement proper error boundaries
- Extract common patterns into reusable modules

### Bun-Specific Optimizations
- Leverage Bun's native capabilities over Node.js equivalents
- Implement streaming patterns for large data processing
- Use Bun.JSON utilities for optimized parsing/serialization
- Apply Bun's SQLite integration for efficient data persistence
- Optimize WebSocket handling with Bun's built-in support

## 3. Code Quality & Maintainability

### Redundancy Elimination
- Consolidate similar functionality into shared composables
- Extract repeated UnoCSS patterns into custom utilities
- Merge overlapping type definitions into unified interfaces
- Implement memoization for expensive computations
- Replace repetitive type assertions with custom type guards

### Project Structure Organization
- Create clear domain boundaries with module-based architecture
- Organize by feature rather than technical layer
- Use path aliases for improved import readability
- Implement dynamic imports for code splitting
- Apply lazy loading for performance-critical components

### Documentation & Conventions
- Add JSDoc comments with TypeScript annotations
- Document components with usage examples
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
- Optimize Vue's reactivity system usage
- Implement proper tree-shaking patterns

### Modern Pattern Adoption
- Use optional chaining and nullish coalescing
- Apply const assertions and type predicates
- Leverage Vue 3's latest features including `<script setup>`
- Implement atomic CSS with UnoCSS utilities
- Apply appropriate design patterns (Repository, Strategy, Builder)