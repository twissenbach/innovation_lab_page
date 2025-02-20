import { defineConfig } from 'vite'
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT,
  },
  plugins: [vercel()],
});
