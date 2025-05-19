---
description: เขียน workflows การสร้าง monorepo packages ด้วย turborepo, bun, biome, release it
---

# Monorepo Package Creation Workflow

This workflow guides you through creating and managing a monorepo using Turborepo with Bun:

## Setup Monorepo

1. **Create Turborepo project**
   ```bash
   bunx create-turbo@latest
   ```

2. **Configure root package.json**
   - Set `"private": true` for the root workspace
   - Configure workspaces array
   ```json
   "workspaces": [
     "apps/*",
     "packages/*"
   ]
   ```

3. **Add development dependencies in root**
   ```bash
   bun add -d turbo @biomejs/biome typescript
   ```

4. **Configure Turborepo**
   ```bash
   # Create turbo.json in root
   touch turbo.json
   ```

5. **Setup turbo.json**
   ```json
   {
     "$schema": "https://turbo.build/schema.json",
     "globalDependencies": ["**/.env.*local"],
     "pipeline": {
       "build": {
         "dependsOn": ["^build"],
         "outputs": ["dist/**"]
       },
       "lint": {},
       "dev": {
         "cache": false,
         "persistent": true
       },
       "test": {
         "dependsOn": ["build"],
         "inputs": ["src/**/*.ts", "test/**/*.ts"]
       }
     }
   }
   ```

## Package Configuration

1. **Create new package in the monorepo**
   ```bash
   mkdir -p packages/my-package
   cd packages/my-package
   bun init
   ```

2. **Configure package.json for each package**
   - Set `"type": "module"` for ESM support
   - Add appropriate `"files"`, `"main"`, and `"exports"` fields
   ```json
   {
     "name": "@myorg/my-package",
     "version": "0.1.0",
     "type": "module",
     "main": "./dist/index.js",
     "types": "./dist/index.d.ts",
     "files": ["dist"],
     "exports": {
       ".": {
         "import": "./dist/index.js",
         "types": "./dist/index.d.ts"
       }
     },
     "scripts": {
       "build": "bun build ./src/index.ts --target node --outdir ./dist --format esm",
       "lint": "biome lint . && tsc --noEmit",
       "format": "biome format --write .",
       "test": "bun test"
     }
   }
   ```

3. **Configure TypeScript for each package**
   ```bash
   bunx tsc --init
   ```

4. **Setup tsconfig.json for packages**
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

1. **Initialize Biome configuration in root**
   ```bash
   bunx biome init
   ```

2. **Configure biome.json in root**
   ```json
   {
     "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
     "vcs": {
       "enabled": true,
       "clientKind": "git",
       "useIgnoreFile": true
     },
     "formatter": {
       "enabled": true,
       "indentStyle": "tab"
     },
     "organizeImports": {
       "enabled": true
     },
     "linter": {
       "enabled": true,
       "rules": {
         "recommended": true
       }
     }
   }
   ```

3. **Add scripts to root package.json**
   ```json
   "scripts": {
     "build": "turbo run build",
     "dev": "turbo run dev",
     "lint": "turbo run lint",
     "format": "biome format --write .",
     "test": "turbo run test"
   }
   ```

## Release Configuration

1. **Setup Changesets for versioning**
   ```bash
   bun add -d @changesets/cli
   bunx changeset init
   ```

2. **Configure release workflow**
   ```json
   "scripts": {
     "changeset": "changeset",
     "version": "changeset version",
     "publish": "turbo run build && changeset publish"
   }
   ```

3. **Add release script to individual packages**
   ```json
   "scripts": {
     "release": "npm publish --access public"
   }
   ```

## Monorepo Workflow

1. **Run commands across all packages**
   ```bash
   bun run build    # Builds all packages
   bun run lint     # Lints all packages
   bun run test     # Tests all packages
   ```

2. **Work with specific packages**
   ```bash
   bun run build --filter=@myorg/my-package
   ```

3. **Create a new changeset**
   ```bash
   bun changeset
   ```

4. **Publish changes**
   ```bash
   bun run publish
   ```

## CI/CD Integration

1. **Setup GitHub Actions workflow**
   ```yaml
   # .github/workflows/ci.yml
   name: CI
   on:
     push:
       branches: [main]
     pull_request:
       branches: [main]
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: oven-sh/setup-bun@v1
         - run: bun install
         - run: bun run build
         - run: bun run test
         - run: bun run lint
   ```

2. **Setup release workflow**
   ```yaml
   # .github/workflows/release.yml
   name: Release
   on:
     push:
       branches: [main]
   jobs:
     release:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: oven-sh/setup-bun@v1
         - run: bun install
         - name: Create Release
           uses: changesets/action@v1
           with:
             publish: bun run publish
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
             NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
   ```

## Best Practices

1. **Inter-package dependencies**
   ```json
   "dependencies": {
     "@myorg/shared-package": "workspace:*"
   }
   ```

2. **Shared configurations**
   - Create a `packages/tsconfig` package for shared TypeScript configs
   - Create a `packages/eslint-config` for shared ESLint configs

3. **Caching optimization**
   - Use `.turbo` in `.gitignore`
   - Configure remote caching for CI

4. **Dependency management**
   - Use `bun add -d package-name -w` to add to root workspace
   - Use `bun add package-name -w packages/my-package` for specific packages

This workflow ensures consistent development practices across your monorepo, improves build performance with Turborepo's caching, and simplifies the release process with Changesets.