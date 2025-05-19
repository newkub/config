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
   - Merge overlapping type definitions into unified interfaces
   - Use TypeScript's module augmentation for extending existing types
   - Replace repetitive type assertions with custom type guards
   - Implement memoization for expensive computations
   - Refactor similar conditional logic into parameterized functions
   - Extract repeated string/regex patterns into constants

2. **Improve code architecture**
   - Leverage TypeScript's type system:
     - Use functional patterns for data transformations
     - Create pure functions with explicit return types
     - Use TypeScript interfaces for clear contracts
     - Implement proper type narrowing with type guards
     - Apply utility types (Pick, Omit, Partial) for flexibility
     - Create indexed types for dynamic property access
     - Use intersection types for combining capabilities
     - Implement branded types for type-safe identifiers
     - Leverage readonly modifiers for immutable data
     - Apply generic constraints to control type parameters
   - Structure code for Bun's runtime optimization:
     - Utilize Bun's native APIs where applicable
     - Implement proper error handling with typed errors
     - Use TypeScript discriminated unions for state management
     - Apply dependency injection with interface-based design
     - Leverage Bun's file system performance optimizations
     - Implement streaming patterns for large data processing
     - Use Bun.serve for high-performance HTTP services
     - Optimize JSON handling with Bun.JSON utilities
     - Implement efficient database connections with connection pooling
   - Implement modern TypeScript patterns:
     - Use const assertions for immutable values
     - Apply mapped and conditional types
     - Leverage template literal types for string manipulation
     - Use namespace organization when appropriate
     - Implement builder patterns with method chaining
     - Create factory functions with proper return type inference
     - Use TypeScript decorators for cross-cutting concerns
     - Implement the Repository pattern for data access
     - Apply the Strategy pattern for algorithm selection

3. **Optimize structure**
   - Organize into module-based architecture:
     - Create clear domain boundaries with namespaces/modules
     - Implement barrel files (index.ts) for clean exports
     - Use path aliases for improved import readability
     - Apply consistent naming patterns for files and folders
     - Separate business logic from technical infrastructure
     - Organize by feature rather than technical layer
     - Create dedicated type definition files (.d.ts) where appropriate
     - Implement proper circular dependency resolution
     - Use subdirectories for complex feature modules
   - Optimize for Bun's module system:
     - Leverage ESM imports/exports
     - Use dynamic imports for code splitting
     - Implement proper tree-shaking patterns
     - Structure for optimal Bun package resolution
     - Minimize module boundary crossings
     - Implement lazy loading for performance-critical paths
     - Use proper package.json configuration for Bun
     - Apply consistent import ordering conventions
     - Leverage Bun's transpilation capabilities

4. **Enhance quality**
   - Apply TypeScript best practices:
     - Use descriptive interface and type names
     - Implement exhaustive type checking with never
     - Add proper JSDoc comments with TypeScript annotations
     - Use strict null checking and non-nullable types
     - Apply consistent naming conventions (PascalCase for types, camelCase for variables)
     - Implement proper error handling with custom error classes
     - Use readonly arrays and tuples where applicable
     - Leverage literal types for enhanced type safety
     - Apply proper access modifiers (public, private, protected)
   - Optimize for Bun's performance:
     - Implement async/await patterns efficiently
     - Use Bun's native fetch and HTTP capabilities
     - Leverage Bun's built-in test runner
     - Optimize file operations with Bun's File API
     - Use Bun.write for efficient file writes
     - Implement proper HTTP response streaming
     - Leverage Bun.password APIs for secure operations
     - Use Bun.spawn for efficient child process management
     - Apply proper environment variable handling
   - Add comprehensive documentation:
     - Document public APIs with TSDoc
     - Include TypeScript examples in comments
     - Document complex type manipulations
     - Add runtime type validation where needed
     - Create architecture diagrams for complex systems
     - Document performance considerations and trade-offs
     - Include versioning information in API documentation
     - Add usage examples for public interfaces
     - Document error handling strategies

5. **Improve testability**
   - Implement Bun-optimized testing:
     - Use Bun's built-in test runner
     - Create typed test fixtures and factories
     - Implement snapshot testing for complex objects