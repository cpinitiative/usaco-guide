module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'no-prototype-builtins': 'off',
    'react/no-unescaped-entities': 'off',
    'no-useless-escape': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    curly: ['error', 'multi-line'],
    // some of these are just too hard to fix at the moment :(
    'react/prop-types': 'off',
  },
  ignorePatterns: [
    '**/node_modules',
    'src/functions',
    'gatsby-config.ts',
    'gatsby-node.ts',
    'gatsby-ssr.tsx',
    'gatsby-browser.tsx',
    'tailwind.config.js',
  ],
};
