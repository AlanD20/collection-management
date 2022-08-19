import React from 'react';
import { Paginator } from '@/@types/Response';
import EmptyResource from '@@/Misc/EmptyResource';
import { Collection, Item } from '@/@types/Models';
import UserHeader from '@@/Headers/User/UserHeader';
import { U_ITEMS_SP } from '@/common/select-options';
import UserItemCard from '@@/User/Item/UserItemCard';
import PaginationLinks from '@@/Table/PaginationLinks';
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
            className="hover:translate-y-2 hover:cursor-pointer transition-transform duration-150 ease-out"
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
      itemsHeader: true,
      title: {
        text: ":uname's Collection Items",
        param: 'uname',
      },
      backRoute: {
        label: 'form.back_items',
        name: 'u.collections.index',
        params: ['uname'],
      },
      optionRoute: {
        sortOptions: U_ITEMS_SP,
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
