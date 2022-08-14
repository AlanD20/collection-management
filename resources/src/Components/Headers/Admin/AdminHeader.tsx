import React from 'react';
import TabItem from '@@/Table/TabItem';
import SearchHeader from '../SearchHeader';
import ButtonLink from '@@/Form/ButtonLink';
import { DefProps, RouteType } from '@/@types/Global';

export interface AdminHeaderProps extends DefProps {
  componentName: string;
  searchbar?: {
    routeName: string;
    className?: string;
  };
  createRoute?: RouteType;
}

const AdminHeader = ({
  componentName,
  searchbar,
  createRoute,
  className,
}: AdminHeaderProps) => {
  const subTab =
    componentName.endsWith('Create') || componentName.endsWith('Edit');

  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-center mt-4 mb-8 gap-4">
      <div className={`tabs tabs-boxed bg-base-300 ${className}`}>
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
        <TabItem
          path={route('admin.tags.index')}
          label="Manage Tags"
          active={!subTab && componentName.startsWith('Admin/Tag')}
        />
      </div>

      {(searchbar || !createRoute?.hidden) && (
        <div className="flex gap-4 items-center ml-auto">
          {searchbar && searchbar.routeName && (
            <SearchHeader
              routeName={searchbar.routeName}
              className={`${searchbar.className}`}
            />
          )}
          {createRoute?.name && (
            <ButtonLink
              href={route(createRoute?.name)}
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
