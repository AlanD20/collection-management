import { LocalType } from './Global';
import { StatusProp } from './Response';

export type SetStatusParam = {
  success?: string;
  error?: string;
  ts: number;
};

export interface AlertStore extends StatusProp {
  setStatus: (status: StatusParam) => void;
  clearStatus: () => void;
}
