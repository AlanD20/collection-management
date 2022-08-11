import create from 'zustand';
import { PrefStore, AlertStore, SetStatusParam } from '@/@types/store';

export const prefStore = create<PrefStore>((set) => ({
  locale: 'en',
  theme: 'light',
  setLocale: (locale: string) => set((state) => ({ locale })),
  setTheme: (theme: string) => set((state) => ({ theme })),
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
