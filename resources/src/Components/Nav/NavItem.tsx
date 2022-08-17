import React from 'react';
import { DefProps } from '@/@types/Global';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/inertia-react';

interface Props extends DefProps, InertiaLinkProps {
  label?: string;
  parentClass?: string;
}

const NavItem = ({
  label,
  parentClass = '',
  className = '',
  ...attr
}: Props) => {

  return (
    <li className={parentClass}>
      <Link {...attr} className={className}>
        {label ? label : attr.children}
      </Link>
    </li>
  );
};
export default NavItem;
