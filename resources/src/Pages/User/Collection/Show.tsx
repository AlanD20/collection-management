import React from 'react';
import { UsePage } from '@/@types/Global';
import { Collection } from '@/@types/Models';
import { usePage } from '@inertiajs/inertia-react';
import UserPageContainer from '@/Layouts/UserPageContainer';
import UserCollectionCard from '@@/User/Collection/UserCollectionCard';

interface Props {
  collection: Collection;
}

const Show = ({ collection }: Props) => {
  const { params } = usePage<UsePage>().props;

  console.log(collection);

  return (
    <div>
      <h1>THIS IS INSIDE THE COLLECTION</h1>
      <UserCollectionCard collection={collection} />
    </div>
  );
};

export default UserPageContainer({
  title: 'Single Collection',
  body: {
    component: Show,
  },
});
