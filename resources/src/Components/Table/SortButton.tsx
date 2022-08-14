import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { BiSortDown, BiSortUp } from 'react-icons/bi';

interface Props {
  label: string;
  name: string;
  routeName: string;
  params?: object;
}

const SortButton = ({ label, name, routeName, params = [] }: Props) => {
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');

  const handleSwapSortType = () =>
    setSort((prev) => {
      if (prev === 'asc') return 'desc';
      return 'asc';
    });

  return (
    <Link
      href={route(routeName, {
        ...params,
        sort,
        order_by: name,
      })}
      as="button"
      replace={true}
      preserveState
      preserveScroll
      className="link no-underline flex items-center gap-2"
      onSuccess={handleSwapSortType}
    >
      <span>{label}</span>
      {sort === 'asc' ? (
        <BiSortDown className="text-lg font-bold" />
      ) : (
        <BiSortUp className="text-lg font-bold" />
      )}
    </Link>
  );
};
export default SortButton;
