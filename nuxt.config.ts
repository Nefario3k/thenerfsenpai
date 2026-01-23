import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: parseInt(process.env.PORT || '8500'),
  },
  modules: ['@nuxt/image', '@nuxt/scripts'],
  css: ['./app/assets/css/variables.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})