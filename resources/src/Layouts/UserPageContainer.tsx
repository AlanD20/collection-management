import React from 'react';
import Layout from './Layout';
import { ComponentElement, LayoutWrapper } from '@/@types/Global';

const UserPageContainer = ({
  header,
  body,
  title,
  small,
  className = '',
}: LayoutWrapper) => {
  body.component.layout = (page: ComponentElement) => {
    return (
      <Layout title={title}>
        {React.createElement(header?.component, header?.props)}

        <div className={`${small ? 'w-[45ch]' : 'w-full'} ${className}`}>
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

export default UserPageContainer;
