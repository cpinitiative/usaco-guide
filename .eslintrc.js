module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
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
    '@typescript-eslint/no-empty-function': 'off',
    // some of these are just too hard to fix at the moment :(
    'react/prop-types': 'off',
  },
  ignorePatterns: ['**/node_modules/*', 'src/functions/*'],
};
