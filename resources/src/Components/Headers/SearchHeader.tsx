import Input from '@@/Form/Input';
import debounce from 'lodash/debounce';
import { DefProps } from '@/@types/Global';
import React, { ChangeEvent } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { ParamsProp } from '@/@types/Response';
import { getQueryAsObj } from '@/common/helpers';

interface Props extends DefProps {
  routeName: string;
  params?: ParamsProp;
}

const SearchHeader = ({
  routeName,
  hideWhen = false,
  params = {},
  className = '',
}: Props) => {
  const handleSearchInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    Inertia.get(
      route(routeName, {
        ...params,
        ...getQueryAsObj(),
        query: e.target.value.trim(),
      }),
      {
        preserveScroll: true,
        preserveState: true,
        replace: true,
      }
    );
  });

  if (hideWhen) return null;

  return (
    <div className={`flex items-center w-full lg:w-auto ${className}`}>
      <Input
        type="text"
        name="query"
        onChange={handleSearchInput}
        placeholder={__('form.label_search')}
        className={`w-full justify-center lg:w-[40ch] ${className}`}
      />
    </div>
  );
};

export default SearchHeader;
