import React from 'react';
import { Paginator } from '@/@types/Response';
import PageContainer from '@/Layouts/PageContainer';
import { Collection, Item, User } from '@/@types/Models';
import ItemResult from '@@/Main/Search/Section/ItemResult';
import UserResult from '@@/Main/Search/Section/UserResult';

interface Props {
  users: Paginator<User[]>;
  items: Paginator<Item[]>;
  collections: Paginator<Collection[]>;
}

const SearchResult = ({ users, items }: Props) => {

  return (
    <div className='flex flex-col gap-4'>
      <ItemResult items={items} total={items.meta.total} />
      <UserResult users={users} total={users.meta.total} />
    </div>
  );
};

export default PageContainer({
  tabTitle: 'Search Result',
  body: { component: SearchResult },
});
