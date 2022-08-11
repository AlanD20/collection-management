import React from 'react';
import { Collection } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import UserPageContainer from '@/Layouts/UserPageContainer';
import UserCollectionHeader from '@@/User/Collection/UserCollectionHeader';
import UserCollectionCard from '@@/User/Collection/UserCollectionCard';
import PaginationLinks from '@@/Table/PaginationLinks';

interface Props {
  uname: string;
  collections: Paginator<Collection[]>;
}

const Dashboard = ({ uname, collections }: Props) => {
  return (
    <div className="w-full flex justify-center items-start gap-8 flex-wrap p-8">
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
