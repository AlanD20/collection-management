import route from 'ziggy-js';
import { Attributes } from 'react';
import { Page } from '@inertiajs/inertia';
import { UserWithoutRelation } from './Models';
import { KeyParamsProps, ParamsProp } from './Response';

export type AnyKey = { [key: string]: any };

type ThemeType = 'dracula' | 'emerald';
type LocalType = 'en' | 'es';

export type PageTitle =
  | string
  | {
      text: string;
      param: KeyParamsProps;
    };

export type QueryParams = {
  sort?: 'asc' | 'desc';
  order_by?: string;
  q?: string;
};

export type RouteType = {
  name: string;
  params?: KeyParamsProps[];
  hidden?: boolean;
};

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
