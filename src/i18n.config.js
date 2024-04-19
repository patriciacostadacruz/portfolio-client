import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esJSON from './locales/es.json';
import enJSON from './locales/en.json';

const languageKey = 'selectedLanguage';
const savedLanguage = localStorage.getItem(languageKey);

i18n.use(initReactI18next).init({
  resources: {
    en: { global: enJSON },
    es: { global: esJSON },
  },
  lng: savedLanguage || 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
