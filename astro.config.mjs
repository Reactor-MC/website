// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Onest',
        cssVariable: '--font-onest'
      }
    ]
  }
})
