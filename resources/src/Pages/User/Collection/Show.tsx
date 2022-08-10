import React from 'react';
import { Collection } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import UserPageContainer from '@/Layouts/UserPageContainer';
import CollectionHeader from '@@/User/Collection/CollectionHeader';
import CollectionHead from '@@/User/Collection/CollectionHead';
import CollectionTableRow from '@@/User/Collection/CollectionTableRow';


interface Props {
  uname: string;
  collections: Paginator<Collection[]>;
}

const Show = ({ uname, collections }: Props) => {

  console.log(collections);

  return (
    <div>
      <h1>THIS IS INSIDE THE COLLECTION</h1>
    </div >
  );
};

export default UserPageContainer({
  title: 'User Collection',
  body: {
    component: Show,
  },
  header: {
    component: CollectionHeader,
  },
});
