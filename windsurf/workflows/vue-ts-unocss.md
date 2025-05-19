---

7. **Setup in package.json**
   - Essential scripts:
     ```json
     "scripts": {
       "dev": "bun run --hot src/index.ts",
       "build": "vue-tsc && vite build",
       "preview": "bun run build && vite preview",
       "test": "bun test",
       "test:watch": "bun test --watch",
       "lint": "biome check .",
       "lint:fix": "biome check --apply .",
       "typecheck": "vue-tsc --noEmit",
       "format": "biome format --write ."
     }
     ```
   - Development dependencies:
     ```json
     "devDependencies": {
       "@biomejs/biome": "^1.x",
       "@vitejs/plugin-vue": "^4.x",
       "typescript": "^5.x",
       "unocss": "^0.55.x",
       "vite": "^4.x",
       "vue-tsc": "^1.x"
     }
     ```
   - Dependencies:
     ```json
     "dependencies": {
       "vue": "^3.3.x",
       "vue-router": "^4.2.x",
       "pinia": "^2.1.x",
       "@vueuse/core": "^10.x"
     }
     ```