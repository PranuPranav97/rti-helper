import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations, Languages } from "./translations";

i18n.use(initReactI18next).init({
  resources: Object.keys(translations).reduce((acc, lang) => {
    acc[lang as Languages] = { translation: translations[lang as Languages] };
    return acc;
  }, {} as Record<Languages, { translation: (typeof translations)[Languages] }>),

  lng: "kn", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
