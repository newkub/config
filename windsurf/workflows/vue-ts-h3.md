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