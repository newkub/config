---
description: Best practices in writing React applications with TypeScript
---

# React with TypeScript Development Guide

This guide outlines best practices for developing modern React applications using TypeScript.

## Project Setup

1. **Initialize a new project with Vite**
   ```bash
   npm create vite@latest my-react-ts-project -- --template react-ts
   cd my-react-ts-project
   npm install
   ```

2. **Install core dependencies**
   ```bash
   npm install react-router-dom @tanstack/react-query axios zod
   npm install -D @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

3. **Configure TypeScript**
   ```ts
   // tsconfig.json
   {
     "compilerOptions": {
       "target": "ES2020",
       "useDefineForClassFields": true,
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "skipLibCheck": true,
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noFallthroughCasesInSwitch": true,
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     },
     "include": ["src"],
     "references": [{ "path": "./tsconfig.node.json" }]
   }
   ```

## React Component Architecture