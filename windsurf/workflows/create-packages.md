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

## Release Configuration

1. **Setup release-it**
   ```bash
   bunx release-it --init
   ```

2. **Configure in package.json**
   ```json
   "release-it": {
     "git": {
       "commitMessage": "chore: release v${version}",
       "tagName": "v${version}"
     },
     "npm": {
       "publish": true
     },
     "github": {
       "release": true
     }
   }
   ```

3. **Add release script**
   ```json
   "scripts": {
     "release": "bun run build && release-it"
   }
   ```

## Publishing Process

1. **Build package**
   ```bash
   bun run build
   ```

2. **Test package locally**
   ```bash
   bun link
   ```

3. **Publish to npm**
   ```bash
   bun run release
   ```

This workflow ensures your packages are well-formatted, properly tested, and smoothly released with automated versioning and changelog generation.