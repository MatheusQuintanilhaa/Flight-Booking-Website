import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      resolvers: [
        {
          resolveImportMeta(property) {
            if (property === 'url') {
              return "'_react-icons/' + id.name";
            }
          },
        },
      ],
    }),
  ],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
