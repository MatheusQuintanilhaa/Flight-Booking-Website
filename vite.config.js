import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
    external: ['./src/Components/Search/Search.jsx'],
    },
  },
});


// edit vite config