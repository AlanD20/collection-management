import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { Collection } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import PaginationLinks from '@@/Table/PaginationLinks';
import UserPageContainer from '@/Layouts/UserPageContainer';
import UserCollectionHeader from '@@/User/Collection/UserCollectionHeader';
import UserCollectionCard from '@@/User/Collection/UserCollectionCard';

interface Props {
  collections: Paginator<Collection[]>;
}

const Dashboard = ({ collections }: Props) => {
  return (
    <div className="w-full flex justify-center items-start gap-8 flex-wrap p-8">
      <ButtonLink label="tesssss" href={route('stat')} as="button" />
      {collections &&
        collections.data.length > 0 &&
        collections.data.map((col) => (
          <UserCollectionCard key={col.id} collection={col} />
        ))}
      <PaginationLinks meta={collections.meta} className="mt-8" />
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
