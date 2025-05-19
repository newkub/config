---
description: Bun, Vue, TypeScript & UnoCSS Setup for Modern Websites
---

# Bun, Vue, TypeScript & UnoCSS Website Setup Guide

This guide helps you set up and optimize a modern website using Bun, Vue 3, TypeScript, and UnoCSS with Vite.

## 1. Project Initialization

- **Create New Project**
  ```bash
  bun create vite my-website --template vue-ts
  cd my-website
  ```

- **Core Dependencies**
  ```bash
  bun add vue@latest vue-router@latest pinia@latest @vueuse/core@latest
  ```

- **Development Dependencies**
  ```bash
  bun add -d typescript @vitejs/plugin-vue vite unocss vue-tsc @biomejs/biome
  ```

## 2. Configuration Setup

### Vite Configuration