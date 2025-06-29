import vueMacros from '@vue-macros/eslint-config'
import functional from 'eslint-plugin-functional';

export default [

  vueMacros,
  functional.configs.recommended,
  functional.configs.stylistic,
  {
    ignores: ['**/.vitepress/cache/**', '**/.obsidian/**']
  },
  {
    files: ['**/.vitepress/**/*.vue']
  }
]