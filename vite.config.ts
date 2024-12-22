import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react': 'react',
      'react-dom': 'react-dom'
    }
  },
  build: {
    sourcemap: true,
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})