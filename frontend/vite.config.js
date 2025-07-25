import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/users': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
      },
      '/stats': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
      },
    },
  },
})
