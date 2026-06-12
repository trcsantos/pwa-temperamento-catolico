import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg'], // arquivos que estão na sua pasta public
      manifest: {
        name: 'Descubra o seu temperamento de acordo com a fé católica',
        short_name: 'TempCatolico',
        description: 'Questionário para ajudar no autoconhecimento e na busca pela santidade dentro do conceito apresentado pelo Pe. Paulo Ricardo: "a graça não anula a natureza, mas a aperfeiçoa"',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})