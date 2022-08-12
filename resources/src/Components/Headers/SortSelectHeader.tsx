import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { getQueryAsObj } from '@/common/helpers';
import SelectDropDown from '@@/Form/SelectDropDown';
import { DefProps, ParamsProp, SelectOption } from '@/@types/Global';

interface Props extends DefProps {
  options: SelectOption[];
  routeName: string;
  params?: ParamsProp;
}

const SortSelectHeader = ({
  routeName,
  options,
  hideWhen = false,
  params = {},
  className = '',
}: Props) => {
  const handleOnChange = (newValue: unknown) => {
    const [sort, order] = (newValue as SelectOption).value.split('-') as [
      'asc' | 'desc',
      string
    ];

    Inertia.get(
      route(routeName, {
        ...params,
        ...getQueryAsObj(),
        sort,
        order_by: order,
      }),
      {},
      {
        preserveScroll: true,
        preserveState: true,
        replace: true,
      }
    );
  };

  if (hideWhen) return null;

  return (
    <SelectDropDown
      label="Sort By:"
      name="sort"
      options={options}
      onChange={handleOnChange}
      className={`min-w-[20ch] md:w-[40ch] !flex-row ${className}`}
    />
  );
};

export default SortSelectHeader;
