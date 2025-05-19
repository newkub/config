---
description: commit
---



This workflow helps you create well-structured commits following conventional commit standards.

## Steps

1. **Stage your changes**
   - Stage specific files: `git add <filename>`
   - Stage all changes: `git add -A`

2. **Create a conventional commit**
   - Format: `type(scope): description`
   - Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
   - Example: `feat(auth): add login functionality`

3. **Use AI assistance (optional)**
   - Generate commit messages automatically with AI
   - Use the `--ai` flag with your preferred model

4. **Amend commits if needed**
   - Fix previous commit: `--amend` flag
   - Modify without changing message: `--no-edit` flag

## Examples

```bash
# Basic commit
git commit -m "feat: add user profile page"

# Commit with scope
git commit -m "fix(auth): resolve login timeout issue"

# AI-generated commit
git commit --ai openai
```
