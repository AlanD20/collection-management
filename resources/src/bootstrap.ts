import _get from 'lodash/get';
import _has from 'lodash/has';
import en from '@/common/en.json';
import es from '@/common/es.json';
import { LOCALE_STORAGE_KEY, THEME_STORAGE_KEY } from './common/constants';

// Check if object has given key
window._has = (obj, key) => (_has(obj, 'hidden') ? obj[key] : null);

// Set default theme
const theme = localStorage.getItem(THEME_STORAGE_KEY) ?? 'emerald';
document.querySelector('html')?.setAttribute('data-theme', theme);

// Translate with givne key
window.__ = (key, replace) => {
  const getLocale = () => localStorage.getItem(LOCALE_STORAGE_KEY) ?? 'en';
  let locale = getLocale() === 'en' ? en : es;

  let translate: string = _get(locale, key);
  if (!replace) return translate;

  Object.keys(replace).forEach((key) => {
    translate = translate.replace(`:${key}`, replace[key]);
  });

  return translate;
};

export {};
