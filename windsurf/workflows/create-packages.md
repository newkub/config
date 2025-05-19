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