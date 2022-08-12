import en from '@/common/en.json';
import _get from 'lodash/get';
import _has from 'lodash/has';
import { prefStore } from '@/common/store';

window.__ = (key, replace) => {
  let translate: string = _get(en, key);

  if (!replace) return translate;

  Object.keys(replace).forEach((key) => {
    translate = translate.replace(`:${key}`, replace[key]);
  });

  return translate;
};

window._has = (obj, key) => (_has(obj, 'hidden') ? obj[key] : null);

export {};
