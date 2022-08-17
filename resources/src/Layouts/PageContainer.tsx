import React from 'react';
import Layout from './Layout';
import { MainHeaderProps } from '@@/Headers/Main/MainHeader';
import { ComponentElement, LayoutWrapper } from '@/@types/Global';

const PageContainer = ({
  header,
  body,
  tabTitle,
  small,
  className = '',
}: LayoutWrapper<MainHeaderProps>) => {
  body.component.layout = (page: ComponentElement) => {
    return (
      <Layout title={tabTitle}>

        {header &&
          React.createElement(header?.component, header?.props)
        }

        <div
          className={`px-5 md:px-20 ${small ? 'w-[35ch] md:w-[55ch]' : 'w-full'
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

export default PageContainer;
