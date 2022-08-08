import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { DefProps } from '@/@types/Global';
import type { InertiaLinkProps } from '@inertiajs/inertia-react';

interface Props extends DefProps, InertiaLinkProps {
  label?: string;
}

const ButtonLink = ({ label, className = '', ...attr }: Props) => {
  return (
    <Link {...attr} className={`btn capitalize flex items-center ${className}`}>
      {label ? <span>{label}</span> : attr.children}
    </Link>
  );
};
export default ButtonLink;
