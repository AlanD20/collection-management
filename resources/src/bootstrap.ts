import en from '@/common/en.json';
import _get from 'lodash/get';
import { prefStore } from '@/common/store';

window.__ = (key: string): string => {
  return _get(en, key);
};

export {};
