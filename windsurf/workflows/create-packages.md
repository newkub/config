---
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