import React from 'react';
import { UsePage } from '@/@types/Global';
import { usePage } from '@inertiajs/inertia-react';
import { Collection, Item } from '@/@types/Models';

interface Props {
  collection: Collection;
  item: Item;
}

const UserItemCardBody = ({ collection, item }: Props) => {
  const { params } = usePage<UsePage>().props;

  return (
    <div className="flex w-full flex-col">
      <p className="pb-4">{collection.description}</p>
    </div>
  );
};

export default UserItemCardBody;
