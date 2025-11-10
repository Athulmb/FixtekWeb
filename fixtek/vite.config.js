import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  base: './', // ✅ Important for correct relative paths when deployed
  build: {
    outDir: 'dist', // ✅ Default build output (Vercel expects this)
  },
})
