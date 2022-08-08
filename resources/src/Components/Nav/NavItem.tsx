import { Children, DefProps } from '@/@types/global';
import { InertiaLinkProps, Link } from '@inertiajs/inertia-react';
import React from 'react';

interface Props extends DefProps, InertiaLinkProps {
  label?: string;
  parentClass?: string;
}

const NavItem = (
  { label, parentClass = '', className = '', ...attr }: Props
) => {

  return (
    <li className={parentClass}>
      <Link
        {...attr}
        className={className}
      >
        {label ? label : attr.children}

      </Link>
    </li>
  );
};
export default NavItem;
