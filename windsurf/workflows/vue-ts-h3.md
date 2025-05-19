---
description: Best practices ในการเขียน Vue.js applications
---

# Vue.js Development Best Practices

This guide outlines best practices for developing Vue.js applications:

## Component Design

1. **Use composition API with `<script setup>`**
   ```vue
   <script setup lang="ts">
   import { ref, computed, onMounted } from 'vue'
   import type { User } from '@/types'
   
   const props = defineProps<{
     userId: string
   }>()
   
   const user = ref<User | null>(null)
   const isLoading = ref(true)
   
   const fullName = computed(() => {
     if (!user.value) return ''
     return `${user.value.firstName} ${user.value.lastName}`
   })
   
   onMounted(async () => {
     user.value = await fetchUser(props.userId)
     isLoading.value = false
   })
   </script>
   ```

2. **Leverage TypeScript**
   - Define props with type annotations
   - Create interfaces for component data
   - Use type imports
   ```ts
   // types.ts
   export interface User {
     id: string
     firstName: string
     lastName: string
     email: string
   }
   
   // Component
   import type { User } from '@/types'
   ```

3. **Extract reusable logic to composables**
   ```ts
   // useUsers.ts
   export function useUsers() {
     const users = ref<User[]>([])
     const isLoading = ref(true)
     const error = ref<Error | null>(null)
     
     async function fetchUsers() {
       isLoading.value = true
       try {
         users.value = await apiClient.getUsers()
       } catch (err) {
         error.value = err as Error
       } finally {
         isLoading.value = false
       }
     }
     
     return {
       users,
       isLoading,
       error,
       fetchUsers
     }
   }
   ```

## State Management

1. **Use Pinia for global state**