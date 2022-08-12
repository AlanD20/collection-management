import React from 'react';
import { Paginator } from '@/@types/Response';
import EmptyResource from '@@/Misc/EmptyResource';
import { Collection, Item } from '@/@types/Models';
import UserHeader from '@@/Headers/User/UserHeader';
import UserItemCard from '@@/User/Item/UserItemCard';
import PaginationLinks from '@@/Table/PaginationLinks';
import UserPageContainer from '@/Layouts/UserPageContainer';

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
  tabTitle: 'Collection Items',
  body: {
    component: Dashboard,
  },
  header: {
    component: UserHeader,
    props: {
      title: ":uname's Collection Items",
      optionRoute: {
        name: 'u.collections.items.index',
        params: ['uname', 'collection'],
      },
      createRoute: {
        name: 'u.collections.items.create',
        params: ['uname', 'collection'],
      },
    },
  },
});
