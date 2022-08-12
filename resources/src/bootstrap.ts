import en from '@/common/en.json';
import _get from 'lodash/get';
import { prefStore } from '@/common/store';

window.__ = (key, replace) => {
  let translate: string = _get(en, key);

  if (!replace) return translate;

  Object.keys(replace).forEach((key) => {
    translate = translate.replace(`:${key}`, replace[key]);
  });

  return translate;
};

export {};
