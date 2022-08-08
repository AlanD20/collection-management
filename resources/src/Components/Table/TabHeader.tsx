import React from 'react';
import TabItem from './TabItem';
import { DefProps, UsePage } from '@/@types/Global';
import ButtonLink from '../Form/ButtonLink';
import { usePage } from '@inertiajs/inertia-react';

interface Props extends DefProps {
  name: string;
  create?: string;
}

const TabHeader = ({ name, create, className }: Props) => {
  const $ = usePage<UsePage>().props;

  const subTab = name.endsWith('Create') || name.endsWith('Edit');

  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-center mt-4 mb-8 gap-4">
      <div className={`tabs tabs-boxed ${className}`}>
        <TabItem
          path={route('admin.index')}
          label="Dashboard"
          active={!subTab && name.startsWith('Admin/Dashboard')}
        />
        <TabItem
          path={route('admin.users.index')}
          label="Manage Users"
          active={!subTab && name.startsWith('Admin/User')}
        />
        <TabItem
          path={route('admin.categories.index')}
          label="Manage Categories"
          active={!subTab && name.startsWith('Admin/Category')}
        />
      </div>

      {create && (
        <ButtonLink
          href={route(create)}
          className="md:ml-auto btn btn-secondary btn-wide text-xl"
          label={$._.form.create}
        />
      )}
    </div>
  );
};
export default TabHeader;
