import React from 'react';
import { Paginator } from '@/@types/Response';
import EmptyResource from '@@/Misc/EmptyResource';
import UserHeader from '@@/Headers/User/UserHeader';
import UserItemCard from '@@/User/Item/UserItemCard';
import PaginationLinks from '@@/Table/PaginationLinks';
import { Collection, Item } from '@/@types/Models';
import UserPageContainer from '@/Layouts/UserPageContainer';

interface Props {
  collection: Collection;
  items: Paginator<Item[]>;
  likes: number[];
}

const Dashboard = ({ collection, items, likes }: Props) => {
  const condition = items && items.data.length > 0;

  return (
    <div className="w-full flex justify-center items-start gap-8 flex-wrap p-8">
      {!condition && <EmptyResource model="Item" />}

      {condition &&
        items.data.map((item) => (
          <UserItemCard
            key={item.id}
            item={item}
            likes={likes}
            collection={collection}
          />
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
      backRoute: {
        name: 'u.collections.index',
        params: ['uname'],
      },
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
