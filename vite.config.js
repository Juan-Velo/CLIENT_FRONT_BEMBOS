import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      proxy: {
        '/api/productos': {
          target: env.VITE_API_PRODUCTOS,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/productos/, '/producto'),
        },
        '/api/combos': {
          target: env.VITE_API_COMBOS,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/combos/, '/combos'),
        },
        '/api/locales': {
          target: env.VITE_API_LOCALES,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/locales/, '/prod/locales'),
        },
        '/api/auth': {
          target: env.VITE_API_AUTH,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/auth/, '/dev/users'),
        },
        '/api/favoritos': {
          target: env.VITE_API_FAVORITOS,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/favoritos/, '/prod/favoritos'),
        }
      }
    }
  }
})
