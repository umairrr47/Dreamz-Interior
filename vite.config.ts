import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          forms: ['react-hook-form', '@hookform/resolvers', 'yup'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-accordion']
        }
      }
    },
    sourcemap: true,
    minify: 'terser',
    target: 'esnext'
  },
  server: {
    port: 3000,
    host: true
  }
});