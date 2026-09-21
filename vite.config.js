import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import fs from 'node:fs'
import path from 'node:path'

function spa404Plugin() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      try {
        const indexPath = path.resolve(__dirname, 'dist/index.html')
        const notFoundPath = path.resolve(__dirname, 'dist/404.html')
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath)
        }
      } catch (err) {
        // ignore if not running in node
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spa404Plugin(),
  ],
  server: {
    host: true,
    port: 5173,
  },
})
