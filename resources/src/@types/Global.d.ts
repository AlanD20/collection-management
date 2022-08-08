import route from 'ziggy-js';
import { Page } from '@inertiajs/inertia';

export interface UsePage extends Page {
  props: Page.props & {
    [key: string]: any;
  };
}

export type Component = React.ReactComponentElement;

export type ComponentWrapper = {
  component: Component;
  title: string;
  className?: string;
};

export interface Children {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

export interface DefProps {
  className?: string;
}

declare global {
  var route: route;
  declare function usePage<UsePage>();
}
