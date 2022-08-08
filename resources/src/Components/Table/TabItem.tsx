import { DefProps } from '@/@types/Global';
import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react';

interface Props extends DefProps {
  path: string;
  label: string;
  active?: boolean;
}

const TabItem = ({ path, label, active, className }: Props) => {
  const $ = usePage();

  return (
    <Link
      href={path}
      as="button"
      className={`tab tab-lg ${active ? 'tab-active' : ''} ${className}`}
    >
      {label}
    </Link>
  );
};

export default TabItem;
