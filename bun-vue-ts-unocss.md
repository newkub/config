---
description: Bun, Vue, TypeScript & UnoCSS Setup for Modern Websites
---

# Bun, Vue, TypeScript & UnoCSS Website Setup Guide

This guide helps you set up and optimize a modern website using Bun, Vue 3, TypeScript, and UnoCSS with Vite.

## 1. Project Initialization

- **Create New Project**
  ```bash
  bun create vite my-website --template vue-ts
  cd my-website
  ```

- **Core Dependencies**
  ```bash
  bun add vue@latest vue-router@latest pinia@latest @vueuse/core@latest
  ```

- **Development Dependencies**
  ```bash
  bun add -d typescript @vitejs/plugin-vue vite unocss vue-tsc @biomejs/biome
  ```

## 2. Configuration Setup

### Vite Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
  },
})
```

### UnoCSS Configuration
```typescript
// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
  ],
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors',
    'card': 'bg-white rounded-lg shadow p-4',
  },
})
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Package Scripts
```json
"scripts": {
  "dev": "vite",
  "build": "vue-tsc && vite build",
  "preview": "vite preview",
  "lint": "biome check .",
  "lint:fix": "biome check --apply .",
  "format": "biome format --write .",
  "typecheck": "vue-tsc --noEmit"
}
```

## 3. Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable Vue components
│   ├── common/     # Site-wide components
│   └── features/   # Feature-specific components
├── composables/    # Vue composables
├── layouts/        # Page layouts
├── pages/          # Route pages
├── router/         # Vue Router configuration
├── stores/         # Pinia stores
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── App.vue         # Root component
├── main.ts         # Application entry point
└── env.d.ts        # Environment type declarations
```

## 4. Best Practices

### Component Structure
```vue
<!-- src/components/features/ProductCard.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Product } from '@/types/product'

interface Props {
  product: Product
  featured?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  featured: false
})

const emit = defineEmits<{
  (e: 'add-to-cart', productId: string): void
}>()

const isHovered = ref(false)

const priceClass = computed(() => 
  props.featured ? 'text-xl font-bold text-red-500' : 'text-lg text-gray-700'
)

function handleAddToCart() {
  emit('add-to-cart', props.product.id)
}
</script>

<template>
  <div 
    class="card transition-all duration-300"
    :class="{ 'scale-105': isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img :src="product.imageUrl" alt="product.name" class="w-full h-48 object-cover rounded-t-lg" />
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <p :class="priceClass">${{ product.price.toFixed(2) }}</p>
      <button class="btn mt-4 w-full" @click="handleAddToCart">Add to Cart</button>
    </div>
  </div>
</template>
```

### Type Definitions
```typescript
// src/types/product.ts
export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: ProductCategory
  inStock: boolean
  tags: string[]
}

export type ProductCategory = 'electronics' | 'clothing' | 'books' | 'home'

export interface ProductFilter {
  category?: ProductCategory
  minPrice?: number
  maxPrice?: number
  inStockOnly: boolean
}
```

### Store Implementation
```typescript
// src/stores/productStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product, ProductFilter } from '@/types/product'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  const filteredProducts = computed(() => 
    applyFilters(products.value, currentFilter.value)
  )
  
  const currentFilter = ref<ProductFilter>({
    inStockOnly: false
  })
  
  async function fetchProducts() {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch('/api/products')
      products.value = await response.json()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch products'
    } finally {
      isLoading.value = false
    }
  }
  
  function setFilter(filter: Partial<ProductFilter>) {
    currentFilter.value = { ...currentFilter.value, ...filter }
  }
  
  function applyFilters(products: Product[], filter: ProductFilter): Product[] {
    return products.filter(product => {
      if (filter.inStockOnly && !product.inStock) return false
      if (filter.category && product.category !== filter.category) return false
      if (filter.minPrice !== undefined && product.price < filter.minPrice) return false
      if (filter.maxPrice !== undefined && product.price > filter.maxPrice) return false
      return true
    })
  }
  
  return {
    products,
    filteredProducts,
    isLoading,
    error,
    currentFilter,
    fetchProducts,
    setFilter
  }
})
```

## 5. Performance Optimizations

- Use dynamic imports for route-level code splitting
- Implement Suspense for async components
- Apply proper caching strategies
- Optimize image loading with modern formats
- Leverage UnoCSS for minimal CSS output
- Use Bun's fast runtime for development and build processes