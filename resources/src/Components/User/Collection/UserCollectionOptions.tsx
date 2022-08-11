import React from 'react';
import HeaderBar from '@@/Headers/HeaderBar';
import SearchHeader from '@@/Headers/SearchHeader';
import { usePage } from '@inertiajs/inertia-react';
import { DefProps, UsePage } from '@/@types/Global';
import SortSelectHeader from '@@/Headers/SortSelectHeader';
import { U_COLLECTIONS_SP } from '@/common/select-options';

interface Props extends DefProps {}

const UserCollectionOptions = ({ className = '' }: Props) => {
  const { params } = usePage<UsePage>().props;
  const routeName = 'u.collections.index';

  return (
    <HeaderBar>
      <SortSelectHeader
        options={U_COLLECTIONS_SP}
        routeName={routeName}
        params={{
          uname: params.uname,
        }}
      />
      <SearchHeader
        routeName={routeName}
        params={{
          uname: params.uname,
        }}
      />
    </HeaderBar>
  );
};

export default UserCollectionOptions;
