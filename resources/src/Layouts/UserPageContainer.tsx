import React from 'react';
import Layout from './Layout';
import { ComponentWrapper } from '@/@types/Global';

interface Props extends ComponentWrapper {
  header?: React.ReactNode | JSX.Element | JSX.Element[];
}

const UserPageContainer = ({
  component,
  title,
  header,
  small,
  className = '',
}: Props) => {
  component.layout = (page: JSX.Element) => {
    return (
      <Layout title={title}>
        {header}

        <div className={`${small ? 'w-[45ch]' : 'w-full'}`}>{page}</div>
      </Layout>
    );
  };
  return component;
};

export default UserPageContainer;
