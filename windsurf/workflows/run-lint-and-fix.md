---
description: Run Lint and Check Code Issues
---

# Run Lint and Check Code Issues

This guide explains how to lint your code and check for common issues in your Bun TypeScript CLI project.

## Running Lint Checks

To identify code issues and style violations, run:

```bash
bun run lint
```

This executes Biome's linting rules against your codebase as configured in `biome.json`.

## Formatting Your Code

To automatically format your code according to style rules:

```bash
bun run format
```

This applies consistent formatting to your entire codebase.

## Common Issues and Solutions

### Import Sorting Problems

**Issue**: Imports not properly organized
**Solution**: Run `bun run format` to automatically sort imports

### TypeScript Errors

**Issue**: Type inconsistencies or missing type declarations
**Solution**: Run `bun run typecheck` to identify type issues, then:
- Add proper type annotations
- Fix interface implementations
- Update function signatures

### Code Style Violations

**Issue**: Inconsistent formatting or style issues
**Solution**: 
- Run `bun run format` to apply consistent formatting
- Configure style rules in `biome.json`

### Unused Variables and Imports

**Issue**: Dead code and unused declarations
**Solution**: 
- Enable the `unusedVariables` rule in Biome
- Manually remove or comment out unused code

## Configuring Lint Rules

Customize linting behavior in `biome.json`:

```json
{
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "style": {
        "useNodejsImportProtocol": "off"
      }
    }
  }
}
```
