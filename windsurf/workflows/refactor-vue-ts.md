---
description: Bun, Vue, TypeScript & UnoCSS Refactoring Guide
---

# ผมใช้ bun, vue, typescript, unocss

Please help refactor my codebase with the following steps:

1. **Eliminate redundancy**
   - Remove duplicate types, interfaces, and utility functions
   - Consolidate similar functionality into shared Vue composables
   - Apply DRY principles with TypeScript generics and utility types
   - Extract common patterns into reusable TypeScript modules
   - Remove dead code with TypeScript's unused variable detection
   - Implement proper caching with Bun's performance APIs
   - Merge overlapping type definitions into unified interfaces
   - Use TypeScript's module augmentation for extending Vue types
   - Replace repetitive type assertions with custom type guards
   - Implement memoization for expensive computations
   - Refactor similar conditional logic into parameterized functions
   - Extract repeated UnoCSS patterns into custom utilities

2. **Improve code architecture**
   - Leverage TypeScript's type system:
     - Use Vue's Composition API with proper typing
     - Create pure functions with explicit return types
     - Use TypeScript interfaces for Vue component props
     - Implement proper type narrowing with type guards
     - Apply utility types (Pick, Omit, Partial) for flexible props
     - Create indexed types for dynamic property access
     - Use intersection types for combining capabilities
     - Implement branded types for type-safe identifiers
     - Leverage readonly modifiers for immutable reactive data
     - Apply generic constraints to control type parameters
   - Structure code for Vue and Bun optimization:
     - Utilize Vue's reactivity system efficiently
     - Implement proper error handling with typed errors
     - Use TypeScript discriminated unions for state management
     - Apply dependency injection with provide/inject
     - Leverage Bun's file system performance optimizations
     - Implement streaming patterns for large data processing
     - Use Bun.serve for high-performance HTTP services
     - Optimize JSON handling with Bun.JSON utilities
     - Implement efficient UnoCSS configurations
   - Implement modern Vue/TypeScript patterns:
     - Use const assertions for immutable values
     - Apply mapped and conditional types
     - Leverage template literal types for dynamic class generation
     - Use namespace organization when appropriate
     - Implement builder patterns with method chaining
     - Create factory functions with proper return type inference
     - Use TypeScript decorators for cross-cutting concerns
     - Implement the Repository pattern for data access
     - Apply the Strategy pattern for algorithm selection

3. **Optimize structure**
   - Organize into module-based architecture:
     - Create clear domain boundaries with Vue features
     - Implement barrel files (index.ts) for clean exports
     - Use path aliases for improved import readability
     - Apply consistent naming patterns for Vue components
     - Separate business logic from UI components
     - Organize by feature rather than technical layer
     - Create dedicated type definition files (.d.ts) for Vue plugins
     - Implement proper circular dependency resolution
     - Use subdirectories for complex feature modules
   - Optimize for Bun and Vue's module system:
     - Leverage ESM imports/exports
     - Use dynamic imports for code splitting in Vue Router
     - Implement proper tree-shaking patterns
     - Structure for optimal Bun package resolution
     - Minimize module boundary crossings
     - Implement lazy loading for performance-critical components
     - Use proper package.json configuration for Bun
     - Apply consistent import ordering conventions
     - Leverage Bun's transpilation capabilities for Vue

4. **Enhance quality**
   - Apply Vue/TypeScript best practices:
     - Use descriptive interface and component names
     - Implement exhaustive type checking with never
     - Add proper JSDoc comments with TypeScript annotations
     - Use strict null checking and non-nullable types
     - Apply consistent naming conventions (PascalCase for components, camelCase for variables)
     - Implement proper error handling with custom error classes
     - Use readonly arrays and tuples where applicable
     - Leverage literal types for enhanced type safety
     - Apply proper UnoCSS utility organization
   - Optimize for Bun and Vue performance:
     - Implement async/await patterns efficiently
     - Use Bun's native fetch and HTTP capabilities
     - Leverage Bun's built-in test runner for Vue components
     - Optimize file operations with Bun's File API
     - Use Bun.write for efficient asset handling
     - Implement proper Vue suspense and async components
     - Use subdirectories for complex feature modules
   - Optimize for Bun and Vue's module system:
     - Leverage ESM imports/exports
     - Use dynamic imports for code splitting in Vue Router
     - Implement proper tree-shaking patterns
     - Structure for optimal Bun package resolution
     - Minimize module boundary crossings
     - Implement lazy loading for performance-critical components
     - Use proper package.json configuration for Bun
     - Apply consistent import ordering conventions
     - Leverage Bun's transpilation capabilities for Vue

4. **Enhance quality**