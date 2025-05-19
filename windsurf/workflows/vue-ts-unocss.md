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