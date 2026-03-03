import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/spots': {
        target: 'http://localhost:3001'
      }
    }
  }
})