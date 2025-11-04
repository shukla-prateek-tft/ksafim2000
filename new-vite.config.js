import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';

export default defineConfig({
  plugins: [
    react(),
    wyw({
      // Optional: enable SSR support if needed
      ssr: false,

      // Optional: enable debug logs during build
      debug: false,

      // Optional: pass custom Babel config (if needed)
      babelConfig: {
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        plugins: []
      },

      // Optional: control class name hashing
      hash: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
