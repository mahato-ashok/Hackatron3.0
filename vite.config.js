import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.jsx",
    }),
    // Gzip compression for text assets
    compression({ algorithm: 'gzip', ext: '.gz' }),
    // Brotli compression (better than gzip, used by modern browsers)
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
    // Image optimizer to compress the remaining 7.5MB of static sponsor/track images
    ViteImageOptimizer({
      exclude: [/\.gif$/i],
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80, lossless: false },
    }),
  ],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    target: 'es2020',
    // Warn on chunks > 500KB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'mui': [
            '@mui/material',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled',
          ],
          'utils': ['react-scroll', 'lucide-react'],
        },
      },
    },
    // Minify with esbuild (faster, good output)
    minify: 'esbuild',
  },
})
