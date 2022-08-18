import React from 'react';
import Layout from './Layout';
import { AdminHeaderProps } from '@@/Headers/Admin/AdminHeader';
import { ComponentElement, LayoutWrapper } from '@/@types/Global';

const AdminPageContainer = ({
  body,
  header,
  tabTitle,
  small,
  className = '',
}: LayoutWrapper<AdminHeaderProps>) => {
  body.component.layout = (page: ComponentElement) => {
    return (
      <Layout title={tabTitle}>
        {header && React.createElement(header?.component, header?.props)}

        <div
          className={`${
            small ? 'w-[35ch] lg:w-[45ch]' : 'w-full'
          } ${className}`}
        >
          {React.createElement(body.component, {
            ...page.props,
            ...body.props,
          })}
        </div>
      </Layout>
    );
  };
  return body.component;
};

export default AdminPageContainer;
