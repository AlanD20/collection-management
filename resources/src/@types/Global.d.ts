import route from 'ziggy-js';
import { Page } from '@inertiajs/inertia';
import { Attributes } from 'react';

export interface UsePage extends Page {
  props: Page.props;
}

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
}
