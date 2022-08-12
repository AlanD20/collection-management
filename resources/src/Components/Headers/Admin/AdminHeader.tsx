import React from 'react';
import TabItem from '@@/Table/TabItem';
import { DefProps } from '@/@types/Global';
import ButtonLink from '../../Form/ButtonLink';
import SearchHeader from '../SearchHeader';

export interface AdminHeaderProps extends DefProps {
  componentName: string;
  searchbar?: {
    routeName: string;
    className?: string;
  };
  create?: string;
}

const AdminHeader = ({
  componentName,
  searchbar,
  create,
  className,
}: AdminHeaderProps) => {
  const subTab =
    componentName.endsWith('Create') || componentName.endsWith('Edit');

  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-center mt-4 mb-8 gap-4">
      <div className={`tabs tabs-boxed ${className}`}>
        <TabItem
          path={route('admin.index')}
          label="Dashboard"
          active={!subTab && componentName.startsWith('Admin/Dashboard')}
        />
        <TabItem
          path={route('admin.users.index')}
          label="Manage Users"
          active={!subTab && componentName.startsWith('Admin/User')}
        />
        <TabItem
          path={route('admin.categories.index')}
          label="Manage Categories"
          active={!subTab && componentName.startsWith('Admin/Category')}
        />
      </div>

      {(searchbar || create) && (
        <div className="flex gap-4 items-center ml-auto">
          {searchbar && searchbar.routeName && (
            <SearchHeader
              routeName={searchbar.routeName}
              className={`${searchbar.className}`}
            />
          )}
          {create && (
            <ButtonLink
              href={route(create)}
              className="md:ml-auto btn btn-secondary btn-wide text-xl"
              label={__('form.create')}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default AdminHeader;
