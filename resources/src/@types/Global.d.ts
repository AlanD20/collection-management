import route from 'ziggy-js';
import { Attributes } from 'react';
import { Page } from '@inertiajs/inertia';
import { UserWithoutRelation } from './Models';

export type AnyKey = { [key: string]: any };

export type StatusProp = {
  success: string;
  error: string;
  ts: number;
};

export interface ParamsProp {
  uname?: string | null;
  category?: number | null;
  tag?: number | null;
  user?: number | null;
  collection?: number | null;
  item?: number | null;
}

export type QueryParams = {
  sort?: 'asc' | 'desc';
  order_by?: string;
  q?: string;
};
export type KeyParamsProps = keyof ParamsProp;

export interface PageProps {
  appName: string;
  locale: string;
  theme: string;
  auth: {
    user: UserWithoutRelation;
  };
  status: StatusProp;
  params: ParamsProp;
  ts: number;
}

export type RouteType = {
  name: string;
  params?: KeyParamsProps[];
  hidden?: boolean;
};

export type UsePage = Page & Page<PageProps>;

export type ComponentElement = React.ReactComponentElement;

export type Component<T = any> = {
  component: ComponentElement;
  props?: T;
};

export type LayoutWrapper<H = any, B = any> = {
  header?: Component<H>;
  body: Component<B>;
  tabTitle: string;
  small?: boolean;
  className?: string;
};

export interface Children {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

export interface DefProps {
  className?: string;
  hideWhen?: boolean | string | number | null;
}

export type SelectOption = {
  value: string;
  label: string;
};

export type HelperTranslate = (key: string, replace?: AnyKey) => string;
export type _has = <T>(obj: T, key: keyof T) => T[keyof T] | null;

declare global {
  var route: (name: string, params?: ParamsProp & QueryParams) => string;
  var __: HelperTranslate;
  var _has: _has;

  interface Window {
    __: HelperTranslate;
    _has: _has;
  }
}
