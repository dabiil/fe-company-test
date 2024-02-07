import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  plugins: [
    tsconfigPaths(),
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});
