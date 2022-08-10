import React from 'react';
import Layout from './Layout';
import { ComponentElement, LayoutWrapper } from '@/@types/Global';

const PageContainer = ({
  body,
  title,
  small,
  className = '',
}: LayoutWrapper) => {
  body.component.layout = (page: ComponentElement) => {
    return (
      <Layout title={title}>
        <div className={`px-20 ${small ? 'w-[55ch]' : 'w-full'} ${className}`}>
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
