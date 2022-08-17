import React from 'react';
import { Item } from '@/@types/Models';
import ItemCard from '@@/Main/ItemCard';
import { Paginator } from '@/@types/Response';
import EmptyResource from '@@/Misc/EmptyResource';
import MainHeader from '@@/Headers/Main/MainHeader';
import PageContainer from '@/Layouts/PageContainer';
import { U_ITEMS_SP } from '@/common/select-options';
import PaginationLinks from '@@/Table/PaginationLinks';

interface Props {
  items: Paginator<Item[]>;
}

const Items = ({ items }: Props) => {
  const condition = items && items.data.length > 0;

  return (
    <div className="my-4 w-full flex gap-4 flex-wrap ">
      {condition &&
        items.data.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}

      {!condition && <EmptyResource model="Item" />}

      {condition && <PaginationLinks meta={items.meta} />}
    </div>
  );
};

export default PageContainer({
  tabTitle: 'Items',
  body: { component: Items },
  header: {
    component: MainHeader,
    props: {
      title: 'Items',
      optionRoute: {
        sortOptions: U_ITEMS_SP,
        name: 'items.index',
        params: ['uname'],
      },
    },
  },
});
