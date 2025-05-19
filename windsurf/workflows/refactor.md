---
description: TypeScript & Bun Refactoring Guide
---

# TypeScript & Bun Refactoring Workflow

Please help refactor my TypeScript/Bun codebase with the following steps:

1. **Eliminate redundancy**
   - Remove duplicate types, interfaces, and utility functions
   - Consolidate similar functionality into shared helpers
   - Apply DRY principles with TypeScript generics and utility types
   - Extract common patterns into reusable TypeScript modules
   - Remove dead code with TypeScript's unused variable detection
   - Implement proper caching with Bun's performance APIs

2. **Improve code architecture**
   - Leverage TypeScript's type system:
     - Use functional patterns for data transformations
     - Create pure functions with explicit return types
     - Use TypeScript interfaces for clear contracts
     - Implement proper type narrowing with type guards
     - Apply utility types (Pick, Omit, Partial) for flexibility
   - Structure code for Bun's runtime optimization:
     - Utilize Bun's native APIs where applicable
     - Implement proper error handling with typed errors
     - Use TypeScript discriminated unions for state management
     - Apply dependency injection with interface-based design
   - Implement modern TypeScript patterns:
     - Use const assertions for immutable values
     - Apply mapped and conditional types
     - Leverage template literal types for string manipulation
     - Use namespace organization when appropriate

3. **Optimize structure**
   - Organize into module-based architecture:
     - Create clear domain boundaries with namespaces/modules
     - Implement barrel files (index.ts) for clean exports
     - Use path aliases for improved import readability
     - Apply consistent naming patterns for files and folders
   - Optimize for Bun's module system:
     - Leverage ESM imports/exports
     - Use dynamic imports for code splitting
     - Implement proper tree-shaking patterns
     - Structure for optimal Bun package resolution

4. **Enhance quality**
   - Apply TypeScript best practices:
     - Use descriptive interface and type names
     - Implement exhaustive type checking with never
     - Add proper JSDoc comments with TypeScript annotations
     - Use strict null checking and non-nullable types
   - Optimize for Bun's performance:
     - Implement async/await patterns efficiently
     - Use Bun's native fetch and HTTP capabilities
     - Leverage Bun's built-in test runner
     - Optimize file operations with Bun's File API
   - Add comprehensive documentation:
     - Document public APIs with TSDoc
     - Include TypeScript examples in comments
     - Document complex type manipulations
     - Add runtime type validation where needed

5. **Improve testability**
   - Implement Bun-optimized testing:
     - Use Bun's built-in test runner
     - Create typed test fixtures and factories
     - Implement snapshot testing for complex objects
     - Leverage TypeScript for type-safe mocking
   - Apply TypeScript patterns for testable code:
     - Use dependency injection with interfaces
     - Create pure functions with explicit typing
     - Implement proper error boundaries with typed errors
     - Use TypeScript generics for reusable test utilities

6. **Modernize codebase**
   - Adopt latest TypeScript features:
     - Upgrade to newest TypeScript version
     - Use optional chaining and nullish coalescing
     - Implement template literal types
     - Apply const assertions and type predicates
   - Leverage Bun's modern capabilities:
     - Use Bun's native APIs instead of Node.js equivalents
     - Implement Bun's optimized bundling
     - Leverage Bun's performance APIs
     - Use Bun for both development and production
   - Apply modern web standards:
     - Implement proper HTTP caching strategies
     - Use structured error handling with Error causes
     - Apply proper security practices with typed validation
     - Implement efficient async patterns with Promise utilities