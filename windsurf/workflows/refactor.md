---
description: refactor ตามนี้
---

# Code Refactoring Workflow

Please help refactor my code with the following steps:

1. **Eliminate redundancy**
   - Remove duplicate variables, functions, and logic
   - Consolidate similar functionality
   - Apply DRY (Don't Repeat Yourself) principles

2. **Improve code architecture**
   - Choose appropriate paradigm based on these conditions:
     - Use functional programming when:
       - Data transformation is the primary operation
       - Operations are stateless and side-effect free
       - Composition of small, pure functions is beneficial
       - Working with collections and data pipelines
     - Use OOP when:
       - Complex state management is required
       - Encapsulation of data and behavior is important
       - Class hierarchies provide clear modeling benefits