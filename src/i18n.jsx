import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import ko from "./locales/ko/translation.json";
import fr from "./locales/fr/translation.json";
import ja from "./locales/ja/translation.json";
import zh from "./locales/zh/translation.json";
import vi from "./locales/vi/translation.json";

const fetchTranslations = async (lang) => {
  const response = await fetch(`/path/to/your/translation/api/${lang}`);
  return await response.json();
};

const savedLanguage = localStorage.getItem("language") || "vi";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
    ko: {
      translation: ko,
    },
    fr: {
      translation: fr,
    },
    ja: {
      translation: ja,
    },
    zh: {
      translation: zh,
    },
  },
  // resources: {},
  lng: savedLanguage,
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

// // Lấy dữ liệu bản dịch và cập nhật resources của i18next
// const loadTranslations = async (lang) => {
//   const translations = await fetchTranslations(lang);
//   i18n.addResourceBundle(lang, "translation", translations);
// };

// // Tải bản dịch cho ngôn ngữ đã lưu hoặc ngôn ngữ mặc định
// loadTranslations(savedLanguage);

export default i18n;
