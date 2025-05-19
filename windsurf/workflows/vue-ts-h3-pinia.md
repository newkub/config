---
description: Best practices ในการเขียน Vue.js applications with TypeScript, H3, and Pinia
---

# Vue, TypeScript, H3, and Pinia Development Guide

This guide outlines best practices for developing modern Vue.js applications using TypeScript, H3 for API integration, and Pinia for state management.

## Project Setup

1. **Initialize a new project with Nuxt 3**
   ```bash
   npx nuxi init my-vue-ts-project
   cd my-vue-ts-project
   bun install
   ```

2. **Install core dependencies**
   ```bash
   bun install pinia @pinia/nuxt h3 ofetch
   bun install -D typescript vue-tsc @types/node
   ```

3. **Configure TypeScript**
   ```ts
   // tsconfig.json
   {
     "extends": "./.nuxt/tsconfig.json",
     "compilerOptions": {
       "strict": true,
       "types": ["@pinia/nuxt"],
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

## Vue Component Architecture

- Use Composition API with `<script setup>` for cleaner, more maintainable components
- Implement strong typing for props, emits, and component state
- Separate business logic into composables for reusability
- Follow single-responsibility principle for components
- Use TypeScript interfaces and types for all data models
- Implement proper error handling and loading states
- Create self-contained components with clear input/output contracts

## State Management with Pinia

- Create modular stores organized by domain/feature
- Define clear interfaces for store state
- Use getters for derived state calculations
- Implement actions for async operations and state mutations
- Properly type all store properties and methods
- Avoid direct state mutation outside of actions
- Use store composition for complex state interactions
- Consider implementing persistence when needed

## API Integration with H3

- Create a centralized API client with proper error handling
- Implement service modules for different API endpoints
- Use TypeScript interfaces for API request/response types
- Handle authentication and authorization consistently
- Implement request/response interceptors for common tasks
- Add proper error handling and loading states
- Use environment variables for API configuration

## Forms and Validation

- Create reusable form validation composables
- Implement type-safe form handling
- Validate inputs in real-time and on submission
- Provide clear error messages and visual feedback
- Handle form submission states properly
- Implement form reset functionality
- Consider accessibility in form design

## Performance Optimization

- Use lazy-loading for routes and components
- Implement proper caching strategies
- Optimize re-renders with computed properties and memoization
- Use v-once for static content
- Consider using virtual scrolling for large lists
- Implement proper debouncing and throttling
- Monitor and optimize bundle size

## Testing Best Practices

- Write unit tests for components and composables
- Implement integration tests for critical user flows
- Mock API calls and external dependencies
- Test state management logic separately
- Use component testing libraries like Vitest and Vue Test Utils
- Implement end-to-end tests for critical paths
- Aim for good test coverage of business logic

## Security Considerations

- Sanitize user inputs to prevent XSS attacks
- Implement proper authentication and authorization
- Protect sensitive routes and API endpoints
- Use HTTPS for all API communications
- Handle tokens and sensitive data securely
- Implement CSRF protection
- Follow security best practices for cookies and storage