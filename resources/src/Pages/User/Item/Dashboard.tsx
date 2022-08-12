import React from 'react';
import { Collection, Item } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import EmptyResource from '@@/Misc/EmptyResource';
import PaginationLinks from '@@/Table/PaginationLinks';
import UserPageContainer from '@/Layouts/UserPageContainer';
import UserCollectionHeader from '@@/User/Collection/UserCollectionHeader';
import UserItemCard from '@@/User/Item/UserItemCard';

interface Props {
  collection: Collection;
  items: Paginator<Item[]>;
}

const Dashboard = ({ collection, items }: Props) => {
  const condition = items && items.data.length > 0;

  return (
    <div className="w-full flex justify-center items-start gap-8 flex-wrap p-8">
      {!condition && <EmptyResource model="Item" />}

      {condition &&
        items.data.map((item) => (
          <UserItemCard key={item.id} item={item} collection={collection} />
        ))}

      {condition && <PaginationLinks meta={items.meta} className="mt-8" />}
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
