import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { Collection } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import PaginationLinks from '@@/Table/PaginationLinks';
import UserPageContainer from '@/Layouts/UserPageContainer';
import UserCollectionHeader from '@@/User/Collection/UserCollectionHeader';
import UserCollectionCard from '@@/User/Collection/UserCollectionCard';
import EmptyResource from '@@/Misc/EmptyResource';

interface Props {
  collections: Paginator<Collection[]>;
}

const Dashboard = ({ collections }: Props) => {

  const condition = collections && collections.data.length > 0;

  return (
    <div className="w-full flex justify-center items-start gap-8 flex-wrap p-8">

      {!condition && <EmptyResource model='Collection' />}

      {condition &&
        collections.data.map((col) => (
          <UserCollectionCard key={col.id} collection={col} />
        ))}

      {condition &&
        <PaginationLinks meta={collections.meta} className="mt-8" />
      }
    </div>
  );
};

export default UserPageContainer({
  title: 'User Collection',
  body: {
    component: Dashboard,
  },
  header: {
    component: UserCollectionHeader,
  },
});
