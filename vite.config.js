import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/productos': {
        target: 'https://eay18uag0f.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/productos/, '/producto'),
      },
      '/api/combos': {
        target: 'https://64uv58hvi5.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/combos/, '/combos'),
      },
      '/api/locales': {
        target: 'https://3ynfhy0ua0.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/locales/, '/prod/locales'),
      },
      '/api/auth': {
        target: 'https://mgf212lzse.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/auth/, '/dev/users'),
      },
      '/api/favoritos': {
        target: 'https://u7sme2r9z5.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/favoritos/, '/prod/favoritos'),
      }
    }
  }
})
