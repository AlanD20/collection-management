import create from 'zustand';
import {
  PrefStore,
  AlertStore,
  SetStatusParam,
  ParamsStore,
} from '@/@types/store';
import { ParamsProp } from '@/@types/Global';

export const prefStore = create<PrefStore>((set) => ({
  locale: 'en',
  theme: 'light',
  setLocale: (locale: string) => set((state) => ({ locale })),
  setTheme: (theme: string) => set((state) => ({ theme })),
}));

export const paramsStore = create<ParamsStore>((set) => ({
  params: {
    uname: '',
    category: null,
    item: null,
    tag: null,
    collection: null,
    user: null,
  },
  setParams: (params: ParamsProp) => set((state) => ({ params })),
}));

export const alertStore = create<AlertStore>((set) => ({
  success: '',
  error: '',
  ts: 0,
  setStatus: (status: SetStatusParam) =>
    set((state) => {
      if (state.ts === status.ts) return { error: '', success: '' };

      if (status.error) return { error: status.error, success: '' };
      return { success: status.success, error: '' };
    }),
  clearStatus: () => set((state) => ({ success: '', error: '' })),
}));
