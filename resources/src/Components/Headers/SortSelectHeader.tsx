import { Inertia } from '@inertiajs/inertia';
import { ParamsProp } from '@/@types/Response';
import { getQueryAsObj } from '@/common/helpers';
import React, { useEffect, useState } from 'react';
import SelectDropDown from '@@/Form/SelectDropDown';
import { DefProps, SelectOption } from '@/@types/Global';
import cap from 'lodash/capitalize';

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
      className={`mx-auto min-w-[20ch] lg:w-[40ch] lg:!flex-row ${className}`}
    />
  );
};

export default SortSelectHeader;
