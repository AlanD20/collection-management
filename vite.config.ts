import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/src/app.tsx',
      refresh: true,
    }),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': '/resources/src',
    },
  },
});
