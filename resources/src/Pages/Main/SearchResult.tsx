import React from 'react';
import Hero from '@@/Main/Home/Hero';
import PageContainer from '@/Layouts/PageContainer';
import { Collection, Item, User } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import ItemCard from '@@/Main/Search/ItemCard';
import PaginationLinks from '@@/Table/PaginationLinks';

interface Props {
  users: Paginator<User[]>;
  items: Item[];
  collections: Paginator<Collection[]>;
}

const SearchResult = ({ users, items, collections, }: Props) => {

  console.log(items);
  const itemCondition = items && items.length > 0;

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold'>
        TOTAL RESULT IS {items.length}
      </h1>
      {/* <PaginationLinks meta={items.meta} /> */}
      {itemCondition &&
        items.map(item => (
          <ItemCard
            key={item.id}
            item={item}
          />
        ))
      }
    </div>
  );
};

export default PageContainer({
  tabTitle: 'Search Result',
  body: { component: SearchResult },
});
