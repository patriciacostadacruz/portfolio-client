import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esJSON from './languages/ES/translations.json';
import enJSON from './languages/EN/translations.json';
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    es: { ...esJSON },
  },
  lng: 'en',
});
