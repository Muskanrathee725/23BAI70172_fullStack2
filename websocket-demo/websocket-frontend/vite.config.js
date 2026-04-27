import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // sockjs-client uses `global` which doesn't exist in browsers
  define: {
    global: 'globalThis',
  },
  server: {
    port: 5173,
  },
})
