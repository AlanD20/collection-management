import React from 'react';
import SearchHeader from '@@/Headers/SearchHeader';
import { usePage } from '@inertiajs/inertia-react';
import { DefProps, UsePage } from '@/@types/Global';
import SortSelectHeader from '@@/Headers/SortSelectHeader';
import { U_COLLECTIONS_SP } from '@/common/select-options';

interface Props extends DefProps { }

const UserCollectionOptions = ({ className = '' }: Props) => {

  const $ = usePage<UsePage>().props;
  const routeName = 'u.collections.index';

  return (
    <div
      className={`navbar bg-base-100 my-4 flex-col items-stretch gap-4 md:flex-row md:gap-0 rounded-lg shadow-md py-4 px-8 justify-between md:items-center ${className}`}
    >
      <SortSelectHeader
        options={U_COLLECTIONS_SP}
        routeName={routeName}
        params={{
          uname: $.uname
        }}
      />
      <SearchHeader
        routeName={routeName}
        params={{
          uname: $.uname
        }}
      />
    </div>
  );
};

export default UserCollectionOptions;
