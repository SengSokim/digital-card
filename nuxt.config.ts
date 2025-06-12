// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxt/icon', 'shadcn-nuxt'],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  supabase: {
    redirectOptions: {
      login: '/auth/login',
      callback: '/confirm',
      include: undefined,
      exclude: [],
      saveRedirectToCookie: false,
    }
  }
  
})