import React from 'react';
import { DefProps } from '@/@types/Global';
import { Link } from '@inertiajs/inertia-react';

interface Props extends DefProps {
  label: string;
  query: string | number;
}

const BadgeLink = ({ label, query, className = '' }: Props) => {
  return (
    <Link
      href={route('main.search', { query: '' + query })}
      className={`badge ${className}`}
    >
      <span>{label}</span>
    </Link>
  );
};

export default BadgeLink;
