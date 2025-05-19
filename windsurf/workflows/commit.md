---
description: AI Commit Guide
---

# AI-Powered Git Commit

This workflow helps you create meaningful git commits using AI.

## How to Use

1. Stage your changes with `git add` or use the `--all` flag
2. Run the commit command with the AI option:
   ```bash
   windsurf commit --ai [model]
   ```

## Available Models

- `openai` (default): Uses GPT-3.5 Turbo
- `gemini`: Uses Google's Gemini Pro
- `anthropic` or `claude`: Uses Claude 3 Opus

## Configuration Options

- `--ai-key <key>`: Specify API key for the AI service
- `--ai-temp <temperature>`: Set temperature (0.0-1.0, default: 0.7)
- `--ai-max-length <length>`: Maximum length of commit message (default: 100)

## Example