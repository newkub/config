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
   ```ts
   // Before: Similar fetch logic in multiple components
   // Component A
   const { data: users } = await useFetch('/api/users')
   // Component B
   const { data: products } = await useFetch('/api/products')
   
   // After: Shared composable
   function useApi<T>(endpoint: string) {
     return useFetch<T>(`/api/${endpoint}`)
   }
   // Usage
   const { data: users } = useApi<User[]>('users')
   ```
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
     ```ts
     // src/composables/useAuth.ts
     import { ref, computed } from 'vue'
     
     interface User {
       id: string
       name: string
       role: 'admin' | 'user'
     }
     
     export function useAuth() {
       const user = ref<User | null>(null)
       const isAuthenticated = computed(() => user.value !== null)
       const isAdmin = computed(() => user.value?.role === 'admin')
       
       function login(userData: User): void {
         user.value = userData
       }
       
       function logout(): void {
         user.value = null
       }
       
       return {
         user,
         isAuthenticated,
         isAdmin,
         login,
         logout
       }
     }