import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

// This file must exist even though the rules below are unchanged from the old
// .eslintrc.js: ESLint searches *upwards* from the cwd for a flat config, so
// without one here it finds the repo root's eslint.config.mjs (which extends
// eslint-config-next) and ignores src/functions' config entirely.
export default [
  { ignores: ['lib/**'] },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    settings: {
      ...importPlugin.configs.typescript.settings,
      // firebase-functions v5 exposes /v1 and /v2/* only through its package.json
      // "exports" map, which the legacy node resolver doesn't read. Without this
      // resolver those imports are reported as unresolved even though tsc and
      // Node both resolve them fine.
      'import/resolver': {
        typescript: { project: 'tsconfig.json' },
      },
    },
    rules: {
      ...importPlugin.configs.errors.rules,
      ...importPlugin.configs.warnings.rules,
      ...importPlugin.configs.typescript.rules,
      // firebase-admin is an `export =` namespace; the import plugin can't
      // introspect it and reports every admin.* member as missing. TypeScript
      // already checks this.
      'import/namespace': 'off',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/triple-slash-reference': 'error',
      '@typescript-eslint/unified-signatures': 'warn',
      'constructor-super': 'error',
      eqeqeq: ['warn', 'always'],
      'import/no-deprecated': 'warn',
      'import/no-extraneous-dependencies': 'error',
      'import/no-unassigned-import': 'warn',
      'no-cond-assign': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-invalid-this': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-redeclare': 'error',
      'no-sequences': 'error',
      'no-shadow': ['error', { hoist: 'all' }],
      'no-throw-literal': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'no-var': 'warn',
      'no-void': 'error',
      'prefer-const': 'warn',
    },
  },
];
