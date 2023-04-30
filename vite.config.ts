import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),     
    svgr({ 
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      '/items': 'http://localhost:4001',
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
    },
  },
})
