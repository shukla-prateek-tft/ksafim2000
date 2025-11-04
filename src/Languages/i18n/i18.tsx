import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translation_en } from './en';
import { translation_he } from './he';
import { translation_ar } from './ar';
// Translation resources for mutiple languages
const resources = {
  en: translation_en,
  he: translation_he,
  ar: translation_ar
};

i18n.use(initReactI18next).init({
  lng: import.meta.env.VITE_DEFAULT_LANGUAGE,
  fallbackLng: import.meta.env.VITE_DEFAULT_LANGUAGE,
  debug: true,
  resources: resources,
  interpolation: {
    escapeValue: false
  }
});
export const updateLanguage = (language: string) => {
  i18n.changeLanguage(language);
};
export const getCurrentLanguage = () => {
  return i18n.language;
};
export default i18n;
