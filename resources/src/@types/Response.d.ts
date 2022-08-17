import { Page } from '@inertiajs/inertia';
import { LocalType, ThemeType } from './Global';
import { UserWithoutRelation } from './Models';

export type StatusProp = {
  success: string;
  error: string;
  ts: number;
};

export interface ParamsProp extends SortProps, QueryProps {
  uname?: string | null;
  category?: number | null;
  tag?: number | null;
  user?: number | null;
  collection?: number | null;
  item?: number | null;
  comment?: number | null;
}

export interface SortProps {
  sort?: 'asc' | 'desc';
  order_by?: string;
}
export interface QueryProps {
  query?: string;
}

export type KeyParamsProps = keyof ParamsProp;

export interface PageProps {
  appName: string;
  locale: LocalType;
  theme: ThemeType;
  prevUrl: string;
  auth: {
    user: UserWithoutRelation;
  };
  status: StatusProp;
  params: ParamsProp;
  ts: number;
}
export type UsePage = Page & Page<PageProps>;

export type MetaLink = {
  url: string | null;
  label: string;
  active: boolean;
};

export type MetaPaginator = {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  path: string;
  links: MetaLink[];
};

export interface Paginator<T> {
  data: T;
  links: {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
  };
  meta: MetaPaginator;
}
