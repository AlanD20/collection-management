import Input from '@@/Form/Input';
import debounce from 'lodash/debounce';
import { DefProps } from '@/@types/Global';
import { getQueryAsObj } from '../../common/helpers';
import React, { ChangeEvent } from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Props extends DefProps {
  routeName: string;
  params?: object;
}

const SearchHeader = ({ routeName, params = {}, className = '' }: Props) => {
  const handleSearchInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    Inertia.get(
      route(routeName, {
        ...params,
        ...getQueryAsObj(),
        q: e.target.value.trim(),
      }),
      {},
      {
        preserveScroll: true,
        preserveState: true,
        replace: true,
      }
    );
  });

  return (
    <div className={`flex items-center ${className}`}>
      <Input
        type="text"
        name="q"
        onChange={handleSearchInput}
        placeholder="Search..."
        className={`w-full md:w-[40ch] ${className}`}
      />
    </div>
  );
};

export default SearchHeader;
