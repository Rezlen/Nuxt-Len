// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt';
export default defineNuxtConfig({
  modules: ['@nuxtjs/ionic'],
  ssr: false,
  CSS: ["@/theme/variables.css"]
})