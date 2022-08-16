import React from 'react';
import TabItem from '@@/Table/TabItem';
import SearchHeader from '../SearchHeader';
import ButtonLink from '@@/Form/ButtonLink';
import { DefProps, RouteType, SelectOption } from '@/@types/Global';
import SortSelectHeader from '../SortSelectHeader';
import { ParamsProp } from '@/@types/Response';

export interface AdminHeaderProps extends DefProps {
  componentName: string;
  searchbar?: {
    routeName: string;
    className?: string;
  };
  sortOption?: {
    options: SelectOption[];
    routeName: string;
    params?: ParamsProp;
  };
  createRoute?: RouteType;
}

const AdminHeader = ({
  componentName,
  searchbar,
  sortOption,
  createRoute,
  className,
}: AdminHeaderProps) => {
  const subTab =
    componentName.endsWith('Create') || componentName.endsWith('Edit');

  return (
    <div className="w-full flex flex-col lg:flex-row justify-start items-center lg:justify-between mt-4 mb-8 gap-4">
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

      {sortOption &&
        <SortSelectHeader
          options={sortOption.options}
          routeName={sortOption.routeName}
          params={sortOption.params}
          className="px-4 z-[999999] w-full md:w-auto lg:hidden"
        />
      }

      {(searchbar || !createRoute?.hidden) && (
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-end">
          {searchbar && searchbar.routeName && (
            <SearchHeader
              routeName={searchbar.routeName}
              className={`${searchbar.className}`}
            />
          )}
          {createRoute?.name && (
            <ButtonLink
              href={route(createRoute?.name)}
              className="lg:ml-auto btn btn-secondary btn-wide text-xl"
              label={__('form.create')}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default AdminHeader;
