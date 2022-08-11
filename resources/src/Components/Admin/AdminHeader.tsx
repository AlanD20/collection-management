import React from 'react';
import TabItem from '@@/Table/TabItem';
import ButtonLink from '../Form/ButtonLink';
import { usePage } from '@inertiajs/inertia-react';
import { DefProps, UsePage } from '@/@types/Global';

interface Props extends DefProps {
  componentName: string;
  create?: string;
}

const AdminHeader = ({ componentName, create, className }: Props) => {
  const $ = usePage<UsePage>().props;

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

      {create && (
        <ButtonLink
          href={route(create)}
          className="md:ml-auto btn btn-secondary btn-wide text-xl"
          label={__('form.create')}
        />
      )}
    </div>
  );
};
export default AdminHeader;
