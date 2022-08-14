import React from 'react';
import { DefProps } from '@/@types/Global';
import ItemSideDetailBody from './ItemSideDetailBody';
import { Collection, Item, User } from '@/@types/Models';
import ItemSideDetailFooter from './ItemSideDetailFooter';
import ItemSideDetailHeader from './ItemSideDetailHeader';

interface Props extends DefProps {
  user: User;
  item: Item;
  liked: boolean;
}

const UserItemSideDetail = ({
  user,
  liked,
  item,
  className = '',
}: Props) => {
  return (
    <div
      className={`card card-bordered bg-base-100 shadow-md rounded-md p-4 px-8 w-[64ch] sticky top-32 ${className}`}
    >
      <ItemSideDetailHeader />

      <ItemSideDetailBody user={user} />

      <ItemSideDetailFooter
        item={item}
        liked={liked}
        likesCount={item.likesCount}
        commentsCount={item.commentsCount}
      />
    </div>
  );
};

export default UserItemSideDetail;
