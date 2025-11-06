// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,

  // [DIPERBAIKI] Gunakan modul Nuxt yang benar
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@vueuse/nuxt",
    "nuxt-aos",
    "@nuxtjs/tailwindcss",
  ],

  aos: {
    once: true,
    disable: "phone",
    duration: 700,
    easing: "ease-out-cubic",
  },

  srcDir: "src/",
  css: ["~/css/style.css"],
});