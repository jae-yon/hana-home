import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    sitemap({
      hostname: 'https://solutionhana.co.kr',
    }),
    react(),
    ViteImageOptimizer({
      png: {
        // 품질 (0~100)
        quality: 80,
      },
      jpeg: {
        quality: 75,
      },
      jpg: {
        quality: 75,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  preview: {
    port: 5000,
    host: true,
  },
  server: {
    port: 5000,
    host: true,
  },
})
