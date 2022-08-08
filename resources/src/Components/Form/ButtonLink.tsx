import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { DefProps } from '@/@types/global';
import type { InertiaLinkProps } from '@inertiajs/inertia-react';

interface Props extends DefProps, InertiaLinkProps {
  label: string;
}

const ButtonLink = ({ label, className = '', ...attr }: Props) => {
  return (
    <Link
      {...attr}
      className={`btn btn-primary btn-md capitalize flex items-center ${className}`}
    >
      <span>{label}</span>
    </Link >

  );
};
export default ButtonLink;
