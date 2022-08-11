import route from 'ziggy-js';
import { Attributes } from 'react';
import { Page } from '@inertiajs/inertia';
import { UserWithoutRelation } from './Models';

export type HelperTranslate = (key: string) => string;

export type StatusProp = {
  success: string;
  error: string;
  ts: number;
};

export type ParamsProp = {
  uname?: string;
  category_id?: number;
  user_id?: number;
  col_id?: number;
  item_id?: number;
};

export interface PageProps<> {
  appName: string;
  locale: string;
  auth: {
    user: UserWithoutRelation;
  };
  status: StatusProp;
  params: ParamsProp;
}

export type UsePage = Page & Page<PageProps>;

export type ComponentElement = React.ReactComponentElement;

export type Component = {
  component: ComponentElement;
  props?: any;
};

export type LayoutWrapper = {
  header?: Component;
  body: Component;
  title: string;
  small?: boolean;
  className?: string;
};

export interface Children {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

export interface DefProps {
  className?: string;
}

export type SelectOption = {
  value: string;
  label: string;
};

declare global {
  var route: route;
  var __: HelperTranslate;
  interface Window {
    __: HelperTranslate;
  }
}
