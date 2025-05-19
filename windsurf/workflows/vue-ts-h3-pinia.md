---
description: Best practices ในการเขียน Vue.js applications with TypeScript, H3, and Pinia
---

# Vue, TypeScript, H3, and Pinia Development Guide

This guide outlines best practices for developing modern Vue.js applications using TypeScript, H3 for API integration, and Pinia for state management.

## Project Setup

1. **Initialize a new project with Nuxt 3**
   ```bash
   npx nuxi init my-vue-ts-project
   cd my-vue-ts-project
   bun install
   ```

2. **Install core dependencies**
   ```bash
   bun install pinia @pinia/nuxt h3 ofetch
   bun install -D typescript vue-tsc @types/node
   ```

3. **Configure TypeScript**
   ```ts
   // tsconfig.json
   {
     "extends": "./.nuxt/tsconfig.json",
     "compilerOptions": {
       "strict": true,
       "types": ["@pinia/nuxt"],
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

## Vue Component Architecture

1. **Use composition API with `<script setup>` and TypeScript**
   ```vue
   <script setup lang="ts">
   import { ref, computed, onMounted } from 'vue'
   import type { User } from '@/types'
   
   // Props with TypeScript interfaces
   const props = defineProps<{
     userId: string
   }>()
   
   // Component state
   const user = ref<User | null>(null)
   const isLoading = ref(true)
   
   // Computed properties
   const fullName = computed(() => {
     if (!user.value) return ''
     return `${user.value.firstName} ${user.value.lastName}`
   })
   
   // Lifecycle hooks
   onMounted(async () => {
     user.value = await fetchUser(props.userId)
     isLoading.value = false
   })
   </script>
   ```

2. **Define strong types for your data models**
   ```ts
   // types/index.ts
   export interface User {
     id: string
     firstName: string
     lastName: string
     email: string
     role: UserRole
   }
   
   export enum UserRole {
     Admin = 'admin',
     Editor = 'editor',
     Viewer = 'viewer'
   }
   
   export interface ApiResponse<T> {
     data: T
     meta: {
       totalCount: number
       page: number
       pageSize: number
     }
   }
   ```

3. **Extract reusable logic with composables**
   ```ts
   // composables/useUsers.ts
   import { ref, computed } from 'vue'
   import type { User } from '@/types'
   import { usersService } from '@/services/users'
   
   export function useUsers() {
     const users = ref<User[]>([])
     const isLoading = ref(false)
     const error = ref<Error | null>(null)
     
     const hasUsers = computed(() => users.value.length > 0)
     
     async function fetchUsers() {
       isLoading.value = true
       error.value = null
       
       try {
         users.value = await usersService.getAll()
       } catch (err) {
         error.value = err as Error
         console.error('Failed to fetch users:', err)
       } finally {
         isLoading.value = false
       }
     }
     
     return {
       users,
       isLoading,
       error,
       hasUsers,
       fetchUsers
     }
   }
   ```

## State Management with Pinia

1. **Create a Pinia store**
   ```ts
   // stores/auth.ts
   import { defineStore } from 'pinia'
   import type { User } from '@/types'
   import { authService } from '@/services/auth'
   
   interface AuthState {
     user: User | null
     token: string | null
     isAuthenticated: boolean
   }
   
   export const useAuthStore = defineStore('auth', {
     state: (): AuthState => ({
       user: null,
       token: null,
       isAuthenticated: false
     }),
     
     getters: {
       userRole: (state) => state.user?.role,
       isAdmin: (state) => state.user?.role === 'admin'
     },
     
     actions: {
       async login(email: string, password: string) {
         try {
           const { user, token } = await authService.login(email, password)
           this.user = user
           this.token = token
           this.isAuthenticated = true
           
           // Store token in localStorage or cookie
           localStorage.setItem('auth_token', token)
           
           return user
         } catch (error) {
           this.logout()
           throw error
         }
       },
       
       logout() {
         this.user = null
         this.token = null
         this.isAuthenticated = false
         localStorage.removeItem('auth_token')
       },
       
       async checkAuth() {
         const token = localStorage.getItem('auth_token')
         if (!token) return false
         
         try {
           this.token = token
           this.user = await authService.getProfile()
           this.isAuthenticated = true
           return true
         } catch {
           this.logout()
           return false
         }
       }
     }
   })
   ```

2. **Use store in components**
   ```vue
   <script setup lang="ts">
   import { useAuthStore } from '@/stores/auth'
   import { ref } from 'vue'
   
   const authStore = useAuthStore()
   
   const form = ref({
     email: '',
     password: ''
   })
   
   const error = ref('')
   const isLoading = ref(false)
   
   async function handleLogin() {
     error.value = ''
     isLoading.value = true
     
     try {
       await authStore.login(form.value.email, form.value.password)
       navigateTo('/dashboard')
     } catch (err) {
       error.value = (err as Error).message || 'Login failed'
     } finally {
       isLoading.value = false
     }
   }
   </script>
   
   <template>
     <form @submit.prevent="handleLogin" class="login-form">
       <div v-if="error" class="error-message">{{ error }}</div>
       
       <div class="form-group">
         <label for="email">Email</label>
         <input 
           id="email" 
           v-model="form.email" 
           type="email" 
           required
           class="input-field"
         />
       </div>
       
       <div class="form-group">
         <label for="password">Password</label>
         <input 
           id="password" 
           v-model="form.password" 
           type="password" 
           required
           class="input-field"
         />
       </div>
       
       <button 
         type="submit" 
         class="btn-primary"
         :disabled="isLoading"
       >
         {{ isLoading ? 'Logging in...' : 'Login' }}
       </button>
     </form>
   </template>
   ```

## API Integration with H3

1. **Create API client with H3 and ofetch**
   ```ts
   // services/api.ts
   import { $fetch } from 'ofetch'
   import type { FetchOptions } from 'ofetch'
   
   const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
   
   // Create a custom fetch instance
   export const apiFetch = $fetch.create({
     baseURL: API_BASE_URL,
     credentials: 'include',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     // Add request interceptor
     onRequest({ options }) {
       // Add auth token from localStorage
       const token = localStorage.getItem('auth_token')
       if (token) {
         options.headers = {
           ...options.headers,
           Authorization: `Bearer ${token}`
         }
       }
     },
     // Add response interceptor
     async onResponse({ response }) {
       // Handle specific status codes
       if (response.status === 401) {
         // Handle unauthorized
         localStorage.removeItem('auth_token')
         navigateTo('/login')
       }
     },
     // Add error interceptor
     async onResponseError({ response }) {
       // Handle API errors
       console.error('API Error:', response.status, response._data)
     }
   })
   ```

2. **Create service modules for different API endpoints**
   ```ts
   // services/users.ts
   import { apiFetch } from './api'
   import type { User, ApiResponse } from '@/types'
   
   interface CreateUserData {
     firstName: string
     lastName: string
     email: string
     password: string
     role?: string
   }
   
   export const usersService = {
     async getAll(): Promise<User[]> {
       const response = await apiFetch<ApiResponse<User[]>>('/users')
       return response.data
     },
     
     async getById(id: string): Promise<User> {
       return await apiFetch<User>(`/users/${id}`)
     },
     
     async create(userData: CreateUserData): Promise<User> {
       return await apiFetch<User>('/users', {
         method: 'POST',
         body: userData
       })
     },
     
     async update(id: string, userData: Partial<User>): Promise<User> {
       return await apiFetch<User>(`/users/${id}`, {
         method: 'PATCH',
         body: userData
       })
     },
     
     async delete(id: string): Promise<void> {
       await apiFetch(`/users/${id}`, {
         method: 'DELETE'
       })
     }
   }
   ```

3. **Implement error handling and loading states**
   ```vue
   <script setup lang="ts">
   import { ref, onMounted } from 'vue'
   import type { User } from '@/types'
   import { usersService } from '@/services/users'
   
   const users = ref<User[]>([])
   const isLoading = ref(true)
   const error = ref<string | null>(null)
   
   async function loadUsers() {
     isLoading.value = true
     error.value = null
     
     try {
       users.value = await usersService.getAll()
     } catch (err) {
       error.value = (err as Error).message || 'Failed to load users'
       console.error('Error loading users:', err)
     } finally {
       isLoading.value = false
     }
   }
   
   onMounted(() => {
     loadUsers()
   })
   </script>
   
   <template>
     <div class="users-container">
       <h1>Users</h1>
       
       <button @click="loadUsers" class="btn-outline">
         Refresh
       </button>
       
       <!-- Loading state -->
       <div v-if="isLoading" class="loading-indicator">
         Loading users...
       </div>
       
       <!-- Error state -->
       <div v-else-if="error" class="error-message">
         {{ error }}
         <button @click="loadUsers" class="btn-sm">Try again</button>
       </div>
       
       <!-- Empty state -->
       <div v-else-if="users.length === 0" class="empty-state">
         No users found
       </div>
       
       <!-- Data display -->
       <ul v-else class="users-list">
         <li v-for="user in users" :key="user.id" class="user-item">
           <h3>{{ user.firstName }} {{ user.lastName }}</h3>
           <p>{{ user.email }}</p>
           <span class="badge">{{ user.role }}</span>
         </li>
       </ul>
     </div>
   </template>
   ```

## Forms and Validation

1. **Create a form validation composable**
   ```ts
   // composables/useFormValidation.ts
   import { ref, reactive, computed } from 'vue'
   
   interface ValidationRule {
     validate: (value: any) => boolean
     message: string
   }
   
   interface FieldRules {
     [field: string]: ValidationRule[]
   }
   
   export function useFormValidation<T extends Record<string, any>>(initialValues: T) {
     const form = reactive({ ...initialValues }) as T
     const errors = ref<Record<string, string>>({})
     const isSubmitting = ref(false)
     
     const rules = reactive<FieldRules>({})
     
     // Add validation rules for a field
     function addRules(field: keyof T, fieldRules: ValidationRule[]) {
       rules[field as string] = fieldRules
     }
     
     // Validate a single field
     function validateField(field: keyof T) {
       const fieldRules = rules[field as string] || []
       
       for (const rule of fieldRules) {
         if (!rule.validate(form[field])) {
           errors.value[field as string] = rule.message
           return false
         }
       }
       
       // Clear error if validation passes
       delete errors.value[field as string]
       return true
     }
     
     // Validate all fields
     function validate() {
       let isValid = true
       errors.value = {}
       
       for (const field in rules) {
         if (!validateField(field as keyof T)) {
           isValid = false
         }
       }
       
       return isValid
     }
     
     // Reset form to initial values
     function reset() {
       Object.assign(form, initialValues)
       errors.value = {}
     }
     
     const isValid = computed(() => Object.keys(errors.value).length === 0)
     
     return {
       form,
       errors,
       isSubmitting,
       isValid,
       addRules,
       validateField,
       validate,
       reset
     }
   }
   ```

2. **Use the validation composable in a form component**
   