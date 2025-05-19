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