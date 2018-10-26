import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en-US', // set locale
  fallbackLocale: 'en-US',
  messages: {}, // set locale messages
})

const loadedLanguages = [] // our default language that is preloaded

function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (page, lang) {
  if (!loadedLanguages.includes(lang)) {
    return import(/* webpackChunkName: "lang-[request]" */ `../locale/${page}-${lang}`).then(msgs => {
      i18n.setLocaleMessage(lang, msgs.default)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    })
  }
  if (i18n.locale !== lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

export function setupLang (page) {
  const locale = navigator.language
  let lang = 'en-US'
  if (/en[_-]?/i.test(locale)) {
    lang = 'en-US'
  }
  return loadLanguageAsync(page, lang)
}
