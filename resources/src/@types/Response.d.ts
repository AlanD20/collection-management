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
