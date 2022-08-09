import React from 'react';
import Layout from './Layout';
import { ComponentWrapper } from '@/@types/Global';

const PageContainer = ({
  component,
  title,
  small,
  className = '',
}: ComponentWrapper) => {
  component.layout = (page: JSX.Element) => {
    return (
      <Layout title={title}>
        <div className={`px-20 ${small ? 'w-[55ch]' : 'w-full'} ${className}`}>
          {page}
        </div>
      </Layout>
    );
  };
  return component;
};

export default PageContainer;
