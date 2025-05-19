---
description: Bun, Vue, TypeScript & UnoCSS Refactoring Guide
---

# Bun, Vue, TypeScript & UnoCSS Refactoring Workflow

Please help refactor my codebase with the following steps:

1. **Eliminate redundancy**
   - Consolidate similar functionality into shared Vue composables
   - Extract common patterns into reusable TypeScript modules
   - Merge overlapping type definitions into unified interfaces
   - Replace repetitive type assertions with custom type guards
   - Implement memoization for expensive computations
   - Extract repeated UnoCSS patterns into custom utilities

2. **Improve code architecture**
   - Leverage TypeScript's type system:
     - Use Vue's Composition API with proper typing
     - Create pure functions with explicit return types
     - Apply utility types for flexible props
     - Implement branded types for type-safe identifiers
     - Leverage readonly modifiers for immutable reactive data
   - Structure code for Vue and Bun optimization:
     - Utilize Vue's reactivity system efficiently
     - Use TypeScript discriminated unions for state management
     - Leverage Bun's performance optimizations
     - Implement streaming patterns for large data processing
     - Optimize JSON handling with Bun.JSON utilities
   - Implement modern patterns:
     - Use const assertions for immutable values
     - Apply mapped and conditional types
     - Leverage template literal types for dynamic class generation
     - Implement builder patterns with method chaining
     - Apply appropriate design patterns (Repository, Strategy)

3. **Optimize structure**
   - Organize into module-based architecture:
     - Create clear domain boundaries
     - Use path aliases for improved import readability
     - Separate business logic from UI components
     - Organize by feature rather than technical layer
   - Optimize for Bun and Vue's module system:
     - Use dynamic imports for code splitting
     - Implement proper tree-shaking patterns
     - Apply lazy loading for performance-critical components

4. **Enhance quality**
   - Apply Vue/TypeScript best practices:
     - Implement exhaustive type checking
     - Add proper JSDoc comments with TypeScript annotations
     - Apply consistent naming conventions
     - Use readonly arrays and tuples where applicable
   - Optimize for performance:
     - Implement async/await patterns efficiently
     - Use Bun's native capabilities
     - Apply proper environment variable handling
   - Add comprehensive documentation:
     - Document components, types and architecture
     - Include usage examples and performance considerations

5. **Improve testability**
   - Implement Bun-optimized testing:
     - Use Bun's built-in test runner
     - Create typed test fixtures and factories
     - Implement proper test isolation
   - Apply TypeScript patterns for testable code:
     - Use dependency injection with interfaces
     - Create pure composables with explicit typing
     - Implement proper error boundaries

6. **Modernize codebase**
   - Adopt latest Vue and TypeScript features:
     - Use optional chaining and nullish coalescing
     - Apply const assertions and type predicates
     - Leverage Vue 3's Composition API and <script setup>
   - Leverage Bun's modern capabilities:
     - Use Bun's native APIs instead of Node.js equivalents
     - Apply Bun's SQLite integration for data persistence
     - Implement efficient WebSocket handling
   - Apply modern UnoCSS features:
     - Implement atomic CSS with UnoCSS utilities

7. **Setup in package.json**
   - Essential scripts:
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
   - Development dependencies:
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
   - Dependencies:
     ```json
     "dependencies": {
       "vue": "^3.3.x",
       "vue-router": "^4.2.x",
       "pinia": "^2.1.x",
       "@vueuse/core": "^10.x"
     }
     ```