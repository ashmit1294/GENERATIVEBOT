import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Query_URL } from './utils/constants';

const config = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:'http://localhost:8082' ,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

export default config;
