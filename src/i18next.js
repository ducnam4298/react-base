import i18next from 'i18next';
import common_en from './translations/en/common.json';
import common_vi from './translations/vi/common.json';
import common_my from './translations/my/common.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem('language') ? localStorage.getItem('language') : 'vi-VN',
  resources: {
    'en-GB': {
      common: common_en,
    },
    'en-US': {
      common: common_en,
    },
    'vi-VN': {
      common: common_vi,
    },
    'my-MM': {
      common: common_my,
    },
  },
});

export default i18next;
