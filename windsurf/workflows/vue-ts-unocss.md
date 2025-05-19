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
     ```
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

   **Project Structure Example:**
   ```
   src/
   ├── assets/                 # Static assets
   ├── components/             # Auto-imported shared components
   │   ├── ui/                 # UI components
   │   └── layout/             # Layout components
   ├── composables/            # Auto-imported Vue composables
   │   └── index.ts            # Optional barrel file
   ├── modules/                # Feature modules (similar to Nuxt modules)
   │   ├── auth/               # Authentication module
   │   │   ├── components/     # Auto-imported module components
   │   │   ├── composables/    # Auto-imported module composables
   │   │   ├── types/          # Module type definitions
   │   │   └── index.ts        # Module entry point
   │   └── products/           # Products module
   │       ├── components/     # Auto-imported module components
   │       ├── composables/    # Auto-imported module composables
   │       ├── types/          # Module type definitions
   │       └── index.ts        # Module entry point
   ├── pages/                  # File-based routing (like Nuxt)
   │   ├── index.vue           # Home page
   │   └── [id].vue            # Dynamic route
   ├── layouts/                # Page layouts (like Nuxt)
   │   └── default.vue         # Default layout
   ├── middleware/             # Route middleware (like Nuxt)
   ├── stores/                 # Pinia stores
   ├── plugins/                # App plugins
   ├── public/                 # Public static assets
   ├── types/                  # Global type definitions
   ├── utils/                  # Auto-imported utility functions
   ├── App.vue                 # Root component
   └── main.ts                 # Application entry point
   ```

4. **Enhance quality**
   - Apply Vue/TypeScript best practices:
     - Use descriptive interface and component names
     ```ts
     // Before
     interface I {
       n: string;
       a: number;
     }
     
     // After
     interface UserProfile {
       name: string;
       age: number;
     }
     ```
     - Implement exhaustive type checking with never
     ```ts
     type Status = 'pending' | 'success' | 'error';
     
     function handleStatus(status: Status): string {
       switch (status) {
         case 'pending': return 'Loading...';
         case 'success': return 'Operation completed';
         case 'error': return 'An error occurred';
         default: {
           // This ensures all cases are handled
           const exhaustiveCheck: never = status;
           return exhaustiveCheck;
         }
       }
     }
     ```
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
     - Leverage Bun.password APIs for secure operations
     - Use Bun.spawn for efficient build processes
     - Apply proper environment variable handling
   - Add comprehensive documentation:
     - Document Vue components with TSDoc
     - Include TypeScript examples in comments
     - Document complex type manipulations
     - Add runtime type validation where needed
     - Create architecture diagrams for complex systems
     - Document performance considerations and trade-offs
     - Include versioning information in API documentation
     - Add usage examples for reusable components
     - Document UnoCSS utility classes and patterns

5. **Improve testability**
   - Implement Bun-optimized testing:
     - Use Bun's built-in test runner
     ```ts
     // tests/components/Button.test.ts
     import { test, expect } from 'bun:test';
     import { mount } from '@vue/test-utils';
     import Button from '../../src/components/ui/Button.vue';
     
     test('Button renders correctly', () => {
       const wrapper = mount(Button, {
         props: {
           label: 'Click me',
           variant: 'primary'
         }
       });
       
       expect(wrapper.text()).toContain('Click me');
       expect(wrapper.classes()).toContain('btn-primary');
     });
     
     test('Button emits click event', async () => {
       const wrapper = mount(Button);
       
       await wrapper.trigger('click');
       
       expect(wrapper.emitted('click')).toBeTruthy();
     });
     ```
     - Create typed test fixtures and factories for Vue components
     - Implement snapshot testing for Vue component rendering
     - Leverage TypeScript for type-safe mocking
     - Use parameterized tests for comprehensive coverage
     - Implement proper test isolation with beforeEach/afterEach
     - Create helper utilities for common Vue test operations
     - Apply proper test categorization (unit, integration, e2e)
     - Implement performance benchmarking tests
   - Apply TypeScript patterns for testable code:
     - Use dependency injection with interfaces
     - Create pure composables with explicit typing
     - Implement proper error boundaries with typed errors
     - Use TypeScript generics for reusable test utilities
     - Create mock implementations that satisfy interfaces
     - Apply the Adapter pattern for external dependencies
     - Implement proper test doubles (stubs, spies, mocks)
     - Use factory functions for test data generation
     - Create type-safe assertion utilities for Vue components

6. **Modernize codebase**
   - Adopt latest Vue and TypeScript features:
     - Upgrade to newest Vue and TypeScript versions
     - Use optional chaining and nullish coalescing
     ```ts
     // Before
     const userName = user && user.profile && user.profile.name ? user.profile.name : 'Guest';
     
     // After
     const userName = user?.profile?.name ?? 'Guest';
     ```
     - Implement template literal types
     ```ts
     type CSSUnit = 'px' | 'em' | 'rem' | '%';
     type CSSValue<T extends number> = `${T}${CSSUnit}`;
     
     // Type checks ensure the string follows the pattern
     const margin: CSSValue<1 | 2 | 4 | 8> = '2rem'; // Valid
     const padding: CSSValue<1 | 2 | 4 | 8> = '3rem'; // Error: '3' is not assignable
     ```
     - Apply const assertions and type predicates
     - Use satisfies operator for type validation
     - Implement the using keyword for resource management
     - Apply tuple types with labels for clarity
     - Use the as const assertion for literal type inference
     - Leverage Vue 3's Composition API and <script setup>
   - Leverage Bun's modern capabilities:
     - Use Bun's native APIs instead of Node.js equivalents
     ```ts
     // Before (Node.js)
     import fs from 'fs/promises';
     const data = await fs.readFile('data.json', 'utf-8');
     const parsedData = JSON.parse(data);
     
     // After (Bun)
     const file = Bun.file('data.json');
     const parsedData = await file.json();
     ```
     - Implement Bun's optimized bundling for Vue applications
     - Leverage Bun's performance APIs
     - Use Bun for both development and production
     - Apply Bun's SQLite integration for data persistence
     - Implement efficient WebSocket handling with Bun
     - Use Bun.serve for HTTP server implementation
     - Leverage Bun's plugin system for extensibility
     - Implement proper hot module replacement for Vue
   - Apply modern UnoCSS features:
     - Implement atomic CSS with UnoCSS utilities
     