import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  server: {
    port: 5173,
    proxy: {
      // npm run dev mein /api calls seedha backend pe jayengi
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})