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

3. **Optimize structure**
   - Split into separate files with clear responsibilities
   - Organize related functionality into modules
   - Ensure appropriate import/export patterns
   - Apply consistent folder structure conventions
   - Group related components and utilities logically
   - Consider feature-based organization for complex applications
   - Implement proper layering (UI, business logic, data access)

4. **Enhance quality**
   - Improve naming conventions for clarity
     - Use descriptive variables that reveal intent
     - Follow consistent casing conventions
     - Avoid abbreviations unless universally understood
   - Add appropriate error handling
     - Implement try/catch blocks where necessary