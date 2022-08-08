import React from 'react';
import Layout from './Layout';
import TabItem from '@@/Table/TabItem';
import { ComponentWrapper } from '@/@types/Global';
import ButtonLink from '@/Components/Form/ButtonLink';
import TabHeader from '@/Components/Table/TabHeader';

interface Props extends ComponentWrapper {
  name: string;
  create?: string;
}

const AdminPageContainer = ({
  component,
  title,
  name,
  small,
  create,
  className = '',
}: Props) => {
  component.layout = (page: JSX.Element) => {
    return (
      <Layout title={title}>
        <TabHeader name={name} create={create} className={className} />

        <div className={`${small ? 'w-[45ch]' : 'w-full'}`}>{page}</div>
      </Layout>
    );
  };
  return component;
};

export default AdminPageContainer;
