import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-md'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/website/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueDevTools(),
    Markdown()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    historyApiFallback: true
  }
})
