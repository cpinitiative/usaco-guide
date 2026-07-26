import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    testTimeout: 30000,
    include: ['src/integration/**/*.test.ts', 'src/integration/**/*.test.tsx'],
    exclude: ['node_modules', '.next', 'e2e'],
    setupFiles: [],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
