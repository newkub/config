---
description: Best practices ในการเขียน Vue.js applications
---

# Vue.js Development Best Practices

This guide outlines best practices for developing Vue.js applications:

## Project Structure

1. **Feature-based organization**
   ```
   src/
     ├── assets/           # รูปภาพ, fonts, global CSS
     ├── components/       # Reusable components
     │   ├── base/         # Base/UI components
     │   ├── features/     # Feature-specific components
     │   │   ├── auth/
     │   │   └── dashboard/
     │   └── layout/       # Layout components
     ├── composables/      # Composable functions
     ├── pages/            # หน้าต่างๆ ของแอพ
     ├── services/         # API calls, external services
     ├── stores/           # Pinia stores
     ├── types/            # TypeScript type definitions
     ├── utils/            # Helper functions, constants
     └── App.vue
   ```

2. **Component naming conventions**
   - Use PascalCase for component names
   - Include feature prefix for clarity
   ```vue
   <!-- AuthLoginForm.vue instead of LoginForm.vue -->
   <script setup lang="ts">
   // Component logic
   </script>
   ```

3. **Clear component responsibilities**
   - Presentational components (UI only)
   - Container components (data fetching, state management)
   - Layout components (structure and positioning)

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
   ```ts
   import { render, screen, fireEvent } from '@testing-library/vue'
   import LoginForm from './LoginForm.vue'
   
   test('submits form with user credentials', async () => {
     const mockSubmit = vi.fn()
     render(LoginForm, {
       props: {
         onSubmit: mockSubmit
       }
     })
     
     await fireEvent.update(screen.getByLabelText('Username'), 'user@example.com')
     await fireEvent.update(screen.getByLabelText('Password'), 'password123')
     await fireEvent.click(screen.getByRole('button', { name: /login/i }))
     
     expect(mockSubmit).toHaveBeenCalledWith({
       username: 'user@example.com',
       password: 'password123'
     })
   })
   ```

## API Integration

1. **Create API client with h3**
   ```ts
   // api/client.ts
   import { $fetch } from 'ofetch'
   
   const apiClient = $fetch.create({
     baseURL: import.meta.env.VITE_API_URL,
     credentials: 'include',
     headers: {
       'Content-Type': 'application/json'
     },
     onRequest({ options }) {
       const token = localStorage.getItem('auth_token')
       if (token) {
         options.headers = {
           ...options.headers,
           Authorization: `Bearer ${token}`
         }
       }
     }
   })
   
   export default apiClient
   ```

2. **Implement API services**
   ```ts
   // api/users.service.ts
   import apiClient from './client'
   import type { User, CreateUserData } from '@/types'
   
   export const usersService = {
     async getAll(): Promise<User[]> {
       return await apiClient('/users')
     },
     
     async getById(id: string): Promise<User> {
       return await apiClient(`/users/${id}`)
     },
     
     async create(userData: CreateUserData): Promise<User> {
       return await apiClient('/users', {
         method: 'POST',
         body: userData
       })
     }
   }
   ```

3. **Handle loading and error states**
   ```vue
   <template>
     <div>
       <div v-if="isLoading">Loading users...</div>
       <div v-else-if="error">Error: {{ error.message }}</div>
       <UserList v-else :users="users" />
     </div>
   </template>
   
   <script setup>
   import { usersService } from '@/api/users.service'
   
   const users = ref([])
   const isLoading = ref(true)
   const error = ref(null)
   
   onMounted(async () => {
     try {
       users.value = await usersService.getAll()
     } catch (err) {
       error.value = err
     } finally {
       isLoading.value = false
     }
   })
   </script>
   ```
## Styling Best Practices

1. **Global CSS for component styling**
   ```vue
   <style>
   .button {
     /* Styles apply globally */
   }
   </style>
   ```

2. **CSS variables for theming**
   ```css
   :root {
     --primary-color: #3498db;
     --secondary-color: #2ecc71;
     --text-color: #333;
     --spacing-unit: 8px;
   }
   
   .button {
     background-color: var(--primary-color);
     color: white;
     padding: calc(var(--spacing-unit) * 2);
   }
   ```

3. **Utility-first approach with UnoCSS**
   ```vue
   <template>
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Submit
     </button>
   </template>
   ```

4. **UnoCSS configuration**
   ```ts
   // unocss.config.ts
   import { defineConfig, presetWind4, pre } from 'unocss'
   import { presetWind4 } from 'unocss'
   import { presetIcons } from 'unocss'

   export default defineConfig({
     presets: [
       presetWind4(),
       presetIcons({
         collections: {
           mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default)
         }
       })
     ]
   })
   ```
   ```

## Accessibility

1. **Semantic HTML**
   ```vue
   <template>
     <nav aria-label="Main Navigation">
       <ul>
         <li><router-link to="/">Home</router-link></li>
         <li><router-link to="/about">About</router-link></li>
       </ul>
     </nav>
   </template>
   ```

2. **ARIA attributes when needed**
   ```vue
   <template>
     <button 
       aria-expanded="false" 
       aria-controls="menu-content"
       @click="toggleMenu"
     >
       Menu
     </button>
     <div 
       id="menu-content" 
       :aria-hidden="!isMenuOpen"
       :class="{ hidden: !isMenuOpen }"
     >
       <!-- Menu content -->
     </div>
   </template>
   ```

3. **Keyboard navigation**
   ```vue
   <template>
     <div 
       tabindex="0" 
       role="button"
       @click="activate" 
       @keyup.enter="activate"
       @keyup.space="activate"
     >
       Clickable Element
     </div>
   </template>
   ```

These best practices ensure maintainable, performant, and accessible Vue applications. Adopt them according to your project's specific needs to improve code quality and developer experience.