import _get from 'lodash/get';
import _has from 'lodash/has';
import en from '@/common/en.json';
import ku from '@/common/ku.json';
import { prefStore } from './common/store';

window._has = (obj, key) => (_has(obj, 'hidden') ? obj[key] : null);

window._locale = () => prefStore.getState().locale;

window.__ = (key, replace) => {
  const getLocale = () => prefStore.getState().locale;
  let locale = getLocale() === 'en' ? en : ku;

  let translate: string = _get(locale, key);
  if (!replace) return translate;

  Object.keys(replace).forEach((key) => {
    translate = translate.replace(`:${key}`, replace[key]);
  });

  return translate;
};

export {};
