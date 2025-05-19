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
   ```ts
   // stores/auth.ts
   import { defineStore } from 'pinia'
   
   export const useAuthStore = defineStore('auth', {
     state: () => ({
       user: null,
       token: null,
       isAuthenticated: false
     }),
     actions: {
       async login(credentials) {
         // Login logic
       },
       logout() {
         // Logout logic
       }
     },
     getters: {
       userRole: (state) => state.user?.role
     }
   })
   ```

2. **Component-level state with `ref` and `reactive`**
   ```vue
   <script setup>
   const formState = reactive({
     username: '',
     password: '',
     rememberMe: false
   })
   
   const errors = ref({})
   const isSubmitting = ref(false)
   </script>
   ```

3. **Prefer props for parent-child communication**
   ```vue
   <!-- Parent -->
   <template>
     <UserList 
       :users="users" 
       :is-loading="isLoading"
       @user-selected="handleUserSelected" 
     />
   </template>
   
   <!-- Child -->
   <script setup>
   const props = defineProps(['users', 'isLoading'])
   const emit = defineEmits(['userSelected'])
   
   function selectUser(user) {
     emit('userSelected', user)
   }
   </script>
   ```

## Performance Optimization

1. **Component lazy loading**
   ```ts
   // router.ts
   const routes = [
     {
       path: '/dashboard',
       component: () => import('./features/dashboard/DashboardPage.vue')
     }
   ]
   ```

2. **Use `v-memo` for expensive renders**
   ```vue
   <template>
     <div v-for="item in items" :key="item.id" v-memo="[item.id, item.updated]">
       <!-- Complex item rendering -->
     </div>
   </template>
   ```

3. **Virtualize long lists**
   ```vue
   <template>
     <VirtualList
       style="height: 400px"
       :items="largeDataset"
       :item-height="40"
     >
       <template #item="{ item }">
         <ListItem :data="item" />
       </template>
     </VirtualList>
   </template>
   ```

## Testing

1. **Component testing with Vitest and Vue Test Utils**
   ```ts
   // UserCard.spec.ts
   import { mount } from '@vue/test-utils'
   import { describe, it, expect } from 'vitest'
   import UserCard from './UserCard.vue'
   
   describe('UserCard', () => {
     it('renders user name correctly', () => {
       const wrapper = mount(UserCard, {
         props: {
           user: { id: '1', name: 'John Doe' }
         }
       })
       
       expect(wrapper.text()).toContain('John Doe')
     })
     
     it('emits select event when clicked', async () => {
       const user = { id: '1', name: 'John Doe' }
       const wrapper = mount(UserCard, {
         props: { user }
       })
       
       await wrapper.find('.card').trigger('click')
       expect(wrapper.emitted('select')?.[0]).toEqual([user])
     })
   })
   ```

2. **Use testing library for user-centric tests**