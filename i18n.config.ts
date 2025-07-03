export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr-FR',
  messages: {
    'fr-FR': {
      welcome: 'Bienvenue',
      lang: {
        fr: 'Français',
        en: 'Anglais'
      },
      siteIdentity: {
        siteName: 'Nudger'
      }
    },
    'en-US': {
      welcome: 'Welcome',
      lang: {
        fr: 'French',
        en: 'English'
      },
      siteIdentity: {
        siteName: 'Nudger'
      }
    }
  }
})) 