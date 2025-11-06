import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 🎯 CRITICAL: This is the missing part!
  server: {
    proxy: {
      // 1. When the frontend asks for /api/...
      '/api': {
        // 2. Redirect the request to the Spring Boot server running on port 8001
        target: 'http://localhost:8001', 
        changeOrigin: true,
        secure: false, // Use false if you are not using HTTPS on the backend
      },
    },
  },
});