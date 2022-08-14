import { ParamsProp, StatusProp } from './Response';

export interface PrefStore {
  locale: string;
  theme: string;
  setLocale: (locale: string) => void;
  setTheme: (theme: string) => void;
}

export type SetStatusParam = {
  success?: string;
  error?: string;
  ts: number;
};

export interface AlertStore extends StatusProp {
  setStatus: (status: StatusParam) => void;
  clearStatus: () => void;
}

export interface ParamsStore {
  params: ParamsProp;
  setParams: (params: ParamsProp) => void;
}
