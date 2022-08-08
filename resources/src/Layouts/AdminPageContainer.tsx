import React from 'react';
import Layout from './Layout';
import TabItem from '@/Components/Table/TabItem';
import { ComponentWrapper } from '@/@types/Global';

interface Props extends ComponentWrapper {
  name: string;
}

const AdminPageContainer = (
  { component, title, name, className = '' }: Props
) => {

  component.layout = (page: JSX.Element) => {
    return (
      <Layout title={title}>
        <div className={`tabs tabs-boxed mb-8 ${className}`}>
          <TabItem
            path={route('admin.index')}
            label="Dashboard"
            active={name.startsWith('Admin/Dashboard')}
          />
          <TabItem
            path={route('admin.users.index')}
            label="Manage Users"
            active={name.startsWith('Admin/User')}
          />
          <TabItem
            path={route('admin.categories.index')}
            label="Manage Categories"
            active={name.startsWith('Admin/Category')}
          />
        </div>
        {page}

      </Layout>
    );
  };
  return component;
};

export default AdminPageContainer;
