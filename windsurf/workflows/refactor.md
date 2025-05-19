---
description: refactor ตามนี้
---

# Code Refactoring Workflow

Please help refactor my code with the following steps:

1. **Eliminate redundancy**
   - Remove duplicate variables, functions, and logic
   - Consolidate similar functionality
   - Apply DRY (Don't Repeat Yourself) principles
   - Extract common patterns into shared utilities
   - Remove dead or unreachable code
   - Merge similar conditional branches
   - Implement proper caching for repeated operations

2. **Improve code architecture**
   - Choose appropriate paradigm based on these conditions:
     - Use functional programming when:
       - Data transformation is the primary operation
       - Operations are stateless and side-effect free
       - Composition of small, pure functions is beneficial
       - Working with collections and data pipelines
       - Immutability is desired for predictable behavior
     - Use OOP when:
       - Complex state management is required
       - Encapsulation of data and behavior is important
       - Class hierarchies provide clear modeling benefits
       - Domain objects have clear identity and lifecycle
       - Polymorphism would simplify conditional logic
   - Extract reusable functions and components
   - Apply proper separation of concerns
   - Use types and interfaces instead of inline definitions
   - Implement appropriate design patterns (Factory, Strategy, Observer, etc.)
   - Reduce coupling between modules through dependency injection
   - Consider using composition over inheritance
   - Apply the SOLID principles where applicable

3. **Optimize structure**
   - Split into separate files with clear responsibilities
   - Organize related functionality into modules
   - Ensure appropriate import/export patterns
   - Apply consistent folder structure conventions
   - Group related components and utilities logically
   - Consider feature-based organization for complex applications
   - Implement proper layering (UI, business logic, data access)
   - Use barrel files for clean exports
   - Create clear boundaries between domain contexts
   - Implement proper module resolution strategies
   - Consider micro-frontends for large-scale applications

4. **Enhance quality**
   - Improve naming conventions for clarity
     - Use descriptive variables that reveal intent
     - Follow consistent casing conventions
     - Avoid abbreviations unless universally understood
     - Name functions after what they return or do
     - Use domain-specific terminology consistently
   - Add appropriate error handling
     - Implement try/catch blocks where necessary
     - Create custom error types for domain-specific errors
     - Provide meaningful error messages
     - Handle edge cases explicitly
     - Implement proper error propagation
     - Add contextual information to errors
     - Consider retry mechanisms for transient failures
   - Optimize performance where possible
     - Identify and fix bottlenecks
     - Minimize redundant calculations
     - Implement caching strategies where appropriate
     - Consider time and space complexity
     - Use memoization for expensive operations
     - Optimize rendering cycles in UI components
     - Implement lazy loading and code splitting
   - Include helpful comments/documentation
     - Document public API interfaces thoroughly
     - Explain complex algorithms or business rules
     - Add JSDoc/TSDoc comments for functions and classes
     - Document why, not what (code should be self-explanatory)
     - Include examples for non-obvious usage
     - Document expected input/output and edge cases
     - Keep documentation in sync with code changes

5. **Improve testability**
   - Ensure functions are pure and deterministic where possible
   - Add unit tests for critical functionality
   - Implement mocking strategies for external dependencies
   - Separate side effects from pure business logic
   - Design for testability (dependency injection, interface-based design)
   - Add integration tests for component interactions
   - Implement end-to-end tests for critical user journeys
   - Use test-driven development for new features
   - Write tests that focus on behavior, not implementation
   - Implement snapshot testing for UI components
   - Use property-based testing for complex algorithms
   - Create test fixtures and factories for consistent test data
   - Measure and maintain test coverage metrics
   - Implement contract tests for service boundaries
   
6. **Modernize codebase**
   - Update to latest language features and best practices
   - Replace deprecated methods and libraries
   - Implement async/await patterns where applicable
   - Use modern ES/TS features (optional chaining, nullish coalescing)
   - Adopt current framework patterns and idioms
   - Implement proper type safety and null checking
   - Consider using immutable data structures