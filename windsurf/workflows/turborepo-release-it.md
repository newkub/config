---
description: Workflow for creating monorepo packages with turborepo, bun, biome, and release-it
---

# Monorepo Package Creation Workflow

A comprehensive guide to setting up and managing a monorepo with Turborepo, Bun, Biome, and release-it.

## Initial Setup

1. **Create Turborepo Project**
   ```bash
   bunx create-turbo@latest
   ```

2. **Configure Root Workspace**
   ```json
   // package.json
   {
     "private": true,
     "workspaces": ["apps/*", "packages/*"],
     "scripts": {
       "build": "turbo run build",
       "dev": "turbo run dev",
       "lint": "turbo run lint",
       "format": "biome format --write .",
       "test": "turbo run test",
       "release": "release-it"
     },
     "devDependencies": {
       "turbo": "latest",
       "@biomejs/biome": "latest",
       "typescript": "latest",
       "release-it": "latest"
     }
   }
   ```

3. **Setup Turborepo Pipeline**
   ```json
   // turbo.json
   {
     "$schema": "https://turbo.build/schema.json",
     "globalDependencies": ["**/.env.*local"],
     "pipeline": {
       "build": {
         "dependsOn": ["^build"],
         "outputs": ["dist/**"]
       },
       "test": {
         "dependsOn": ["build"],
         "inputs": ["src/**/*.ts", "test/**/*.ts"]
       },
       "lint": {},
       "dev": {
         "cache": false,
         "persistent": true
       }
     }
   }
   ```

4. **Configure Biome**
   ```json
   // biome.json
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

## Package Management

1. **Create New Package**
   ```bash
   mkdir -p packages/my-package
   cd packages/my-package
   bun init
   bunx tsc --init
   ```

2. **Configure Package**
   ```json
   // packages/my-package/package.json
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

3. **TypeScript Configuration**
   ```json
   // packages/my-package/tsconfig.json
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
       "isolatedModules": true,
       "verbatimModuleSyntax": true,
       "noUncheckedIndexedAccess": true,
       "noEmit": true
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules", "dist"]
   }
   ```

## Release Management

1. **Configure release-it**
   ```json
   // .release-it.json
   {
     "git": {
       "commitMessage": "chore: release v${version}",
       "tagName": "v${version}"
     },
     "github": {
       "release": true
     },
     "npm": {
       "publish": false
     },
     "hooks": {
       "before:init": ["bun run lint", "bun run test"],
       "after:bump": "bun run build"
     },
     "plugins": {
       "@release-it/conventional-changelog": {
         "preset": "angular",
         "infile": "CHANGELOG.md"
       }
     }
   }
   ```

2. **Add release-it to root dependencies**
   ```bash
   bun add -d release-it @release-it/conventional-changelog
   ```

## Workspace Commands

1. **Run Commands Across All Packages**
   ```bash
   bun run build    # Builds all packages
   bun run lint     # Lints all packages
   bun run test     # Tests all packages
   ```

2. **Filter Commands to Specific Packages**
   ```bash
   bun run build --filter=@myorg/my-package
   ```

3. **Dependency Management**
   ```bash
   # Add dependency to root
   bun add -d package-name -w
   
   # Add dependency to specific package
   bun add package-name -w packages/my-package
   
   # Add workspace dependency
   bun add @myorg/shared-package -w packages/my-package
   ```

## CI/CD Integration

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
   ```json
   // package.json
   {
     "private": true,
     "workspaces": ["apps/*", "packages/*"],
     "scripts": {
       "build": "turbo run build",
       "dev": "turbo run dev",
       "lint": "turbo run lint",
       "format": "biome format --write .",
       "test": "turbo run test",
       "release": "release-it"
     },
     "devDependencies": {
       "turbo": "latest",
       "@biomejs/biome": "latest",
       "typescript": "latest",
       "release-it": "latest"
     }
   }
   ```

3. **Setup Turborepo Pipeline**
   ```json
   // turbo.json
   {
     "$schema": "https://turbo.build/schema.json",
     "globalDependencies": ["**/.env.*local"],
     "pipeline": {
       "build": {
         "dependsOn": ["^build"],
         "outputs": ["dist/**"]
       },
       "test": {
         "dependsOn": ["build"],
         "inputs": ["src/**/*.ts", "test/**/*.ts"]
       },
       "lint": {},
       "dev": {
         "cache": false,
         "persistent": true
       }
     }
   }
   ```

4. **Configure Biome**
   ```json
   // biome.json
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

## Package Management

1. **Create New Package**
   ```bash
   mkdir -p packages/my-package
   cd packages/my-package
   bun init
   bunx tsc --init
   ```

2. **Configure Package**
   ```json
   // packages/my-package/package.json
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

3. **TypeScript Configuration**
   ```json
   // packages/my-package/tsconfig.json
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
       "isolatedModules": true,
       "verbatimModuleSyntax": true,
       "noUncheckedIndexedAccess": true,
       "noEmit": true
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules", "dist"]
   }
   ```

## Release Management

1. **Configure release-it**
   ```json
   // .release-it.json
   {
     "git": {
       "commitMessage": "chore: release v${version}",
       "tagName": "v${version}"
     },
     "github": {
       "release": true
     },
     "npm": {
       "publish": false
     },
     "hooks": {
       "before:init": ["bun run lint", "bun run test"],
       "after:bump": "bun run build"
     },
     "plugins": {
       "@release-it/conventional-changelog": {
         "preset": "angular",
         "infile": "CHANGELOG.md"
       }
     }
   }
   ```

2. **Add release-it to root dependencies**
   ```bash
   bun add -d release-it @release-it/conventional-changelog
   ```

## Workspace Commands

1. **Run Commands Across All Packages**
   ```bash
   bun run build    # Builds all packages
   bun run lint     # Lints all packages
   bun run test     # Tests all packages
   ```

2. **Filter Commands to Specific Packages**
   ```bash
   bun run build --filter=@myorg/my-package
   ```

3. **Dependency Management**
   ```bash
   # Add dependency to root
   bun add -d package-name -w
   
   # Add dependency to specific package
   bun add package-name -w packages/my-package
   
   # Add workspace dependency
   bun add @myorg/shared-package -w packages/my-package