import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg'],
      manifest: {
        name: 'Descubra o seu temperamento de acordo com a fé católica',
        short_name: 'TempCatolico',
        description: 'Questionário para ajudar no autoconhecimento e na busca pela santidade dentro do conceito apresentado pelo Pe. Paulo Ricardo: "a graça não anula a natureza, mas a aperfeiçoa."',
        theme_color: '#fcfbf8',
        background_color: '#fcfbf8',
        display: 'standalone',
        start_url: '/',
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: false,
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
  },
})