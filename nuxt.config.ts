import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  components: true,
  css: [
    '~/assets/css/tailwind.css'
  ],
  build: {
    transpile: ['@nuxt/types', '@nuxtjs/axios']
  },
  // PostCSS configuration
  postcss: {
    plugins: {
      // Example: Configure autoprefixer
      autoprefixer: {},
      // Add other PostCSS plugins as needed
    },
  },
  
  modules: [
    '@nuxt/ui',
    'nuxt-swiper'
  ],

})


