import React from 'react';
import Layout from './Layout';
import { UserHeaderProps } from '@@/Headers/User/UserHeader';
import { ComponentElement, LayoutWrapper } from '@/@types/Global';
import { UserHeaderCompactProps } from '@@/Headers/User/UserHeaderCompact';

const UserPageContainer = ({
  header,
  body,
  tabTitle,
  small,
  className = '',
}: LayoutWrapper<UserHeaderProps | UserHeaderCompactProps>) => {
  body.component.layout = (page: ComponentElement) => {
    return (
      <Layout title={tabTitle}>
        {header &&
          // @ts-ignore
          React.createElement(header?.component, header?.props)}

        <div className={`${small ? 'lg:w-[65ch]' : 'w-full'} ${className}`}>
          {body &&
            React.createElement(body.component, {
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
