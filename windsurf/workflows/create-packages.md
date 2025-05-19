---
description: เขียน workflows การสร้าง packages ด้วย bun, biome, release it
---

# Package Creation Workflow

This workflow guides you through creating and publishing packages using modern JavaScript tools:

## Setup Project

1. **Initialize project with Bun**
   ```bash
   bun init
   ```

2. **Configure package.json**
   - Set `"type": "module"` for ESM support
   - Add appropriate `"files"`, `"main"`, and `"exports"` fields
   - Configure scripts for building, testing, and publishing

3. **Add development dependencies**
   ```bash
   bun add -d @biomejs/biome typescript release-it
   ```

4. **Configure TypeScript**
   ```bash
   bunx tsc --init
   ```

5. **Setup tsconfig.json**
   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "module": "NodeNext",
       "moduleResolution": "NodeNext",
       "esModuleInterop": true,
       "declaration": true,
       "outDir": "./dist",
       "strict": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true,
       "isolatedModules": true,
       "verbatimModuleSyntax": true,
       "noUncheckedIndexedAccess": true,
       "noEmit": true
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules", "dist"]
   }
   ```

## Code Quality Setup

1. **Initialize Biome configuration**
   ```bash
   bunx biome init
   ```

2. **Configure biome.json**
   - Enable formatter, linter, and organize imports
   - Configure rules according to project needs

3. **Add scripts to package.json**
   ```json
   "scripts": {
     "format": "biome format --write .",
     "lint": "biome lint . && bunx tsc --noEmit"
   }
   ```

## Build Configuration

1. **Configure Bun build in package.json**
   ```json
   "scripts": {
     "build": "bun build ./src/index.ts --target node --outdir ./dist --format esm"
   }
   ```

2. **For libraries with multiple entry points**
   ```json
   "scripts": {
     "build": "bun build ./src/index.ts ./src/cli.ts --target node --outdir ./dist --format esm"
   }
   ```

## Release Configuration

1. **Setup release-it**
   ```bash
   bunx release-it --init
   ```

2. **Configure in package.json**