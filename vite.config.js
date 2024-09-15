// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org', // TMDB API base URL
        changeOrigin: true, // This ensures the origin of the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes "/api" prefix from the forwarded request
      },
    },
  },
});
