// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/i18n'
  ],
  i18n: {
    defaultLocale: 'fr-FR',
    locales: [
      { code: 'fr-FR', name: 'Français' },
      { code: 'en-US', name: 'English' }
    ],
    strategy: 'prefix_except_default',
    bundle: {
      optimizeTranslationDirective: false
    }
  }
})