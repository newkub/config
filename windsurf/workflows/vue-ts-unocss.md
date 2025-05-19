---
description: Bun, Vue, TypeScript & UnoCSS Refactoring Guide
---

# Bun, Vue, TypeScript & UnoCSS Refactoring Workflow

Please help refactor my codebase with the following steps:

1. **Eliminate redundancy**
   - Remove duplicate types, interfaces, and utility functions
   ```ts
   // Before: Duplicate interfaces
   interface User { id: string; name: string; }
   interface UserData { id: string; name: string; }
   
   // After: Single unified interface
   interface User { id: string; name: string; }
   ```
   - Consolidate similar functionality into shared Vue composables