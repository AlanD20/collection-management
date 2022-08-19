import React from 'react';
import { DefProps } from '@/@types/Global';
import { Collection, Item } from '@/@types/Models';
import UserItemCardFooter from './UserItemCardFooter';
import UserItemCardHeader from './UserItemCardHeader';

interface Props extends DefProps {
  collection: Collection;
  item: Item;
  likes: number[];
}

const UserItemCard = ({
  collection,
  item,
  likes = [],
  className = '',
}: Props) => {
  return (
    <div
      className={`card card-compact lg:card-normal min-w-[350px] w-[500px] bg-base-100 shadow-xl ${className}`}
    >
      <div className="card-body !py-4">
        <UserItemCardHeader item={item} />

        <UserItemCardFooter item={item} likes={likes} />
      </div>
    </div>
  );
};

export default UserItemCard;
