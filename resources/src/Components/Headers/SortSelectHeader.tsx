import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { DefProps, SelectOption } from '@/@types/Global';
import { getQueryAsObj } from '@/common/helpers';
import SelectDropDown from '@@/Form/SelectDropDown';

interface Props extends DefProps {
  options: SelectOption[];
  routeName: string;
  params?: object;
}

const SortSelectHeader = ({
  routeName,
  options,
  params = {},
  className = '',
}: Props) => {
  const handleOnChange = (newValue: unknown) => {
    const [sort, order] = (newValue as SelectOption).value.split('-');

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

  return (
    <SelectDropDown
      label="Sort By:"
      name="sort"
      options={options}
      onChange={handleOnChange}
      className={`w-full min-w-[20ch] md:w-[40ch] !flex-row ${className}`}
    />
  );
};

export default SortSelectHeader;
