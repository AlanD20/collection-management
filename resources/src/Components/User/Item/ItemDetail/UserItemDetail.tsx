import React from 'react';
import { DefProps } from '@/@types/Global';
import { Collection, Item } from '@/@types/Models';
import ItemDetailHeader from './ItemDetailHeader';
import ItemDetailTitle from './ItemDetailTitle';
import ItemDetailBody from './ItemDetailBody';

interface Props extends DefProps {
  item: Item;
  liked: boolean;
  collection: Collection;
}

const UserItemDetail = ({ collection, liked, item, className = '' }: Props) => {
  return (
    <div className={`flex flex-col justify-center items-start w-full bg-base-100 shadow-md rounded-md gap-8 p-8 px-12 ${className}`}>

      <ItemDetailHeader item={item} />

      <ItemDetailTitle item={item} />

      <ItemDetailBody item={item} />

    </div>
  );
};

export default UserItemDetail;
