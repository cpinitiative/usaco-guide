import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    testTimeout: 10000,
    include: [
      'src/lib/**/*.test.ts',
      'src/lib/**/*.test.tsx',
      'src/components/**/*.test.ts',
      'src/components/**/*.test.tsx',
      'src/utils/**/*.test.ts',
      'src/models/**/*.test.ts',
      'src/pages/api/**/*.test.ts',
    ],
    exclude: ['node_modules', '.next', '**/*.stories.tsx', '**/*.stories.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'lcov', 'html'],
      reportsDirectory: 'coverage',
      exclude: [
        'node_modules/',
        '.next/',
        'e2e/',
        'src/integration/',
        '**/*.stories.tsx',
        '**/*.stories.ts',
        '**/types/**',
        '**/*.d.ts',
        '**/mocks/**',
      ],
      thresholds: {
        lines: 4,
        functions: 4,
        branches: 8,
        statements: 4,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
