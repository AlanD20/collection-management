import React from 'react';
import { Item } from '@/@types/Models';
import { UsePage } from '@/@types/Response';
import { FaRegCommentDots } from 'react-icons/fa';
import { usePage } from '@inertiajs/inertia-react';
import LikeButtonLink from '@@/Form/Action/LikeButtonLink';

interface Props {
  item: Item;
  liked: boolean;
  likesCount: number;
  commentsCount: number;
}

const ItemSideDetailFooter = ({
  item,
  likesCount,
  commentsCount,
  liked,
}: Props) => {
  const { params } = usePage<UsePage>().props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full gap-4 justify-between items-center">
        <div className="flex gap-4 justify-end items-center">
          <FaRegCommentDots className="text-3xl" />
          {commentsCount}
        </div>
        <div className="flex gap-2 justify-end items-center">
          {likesCount}
          <LikeButtonLink
            routeName="u.collections.items.likes"
            liked={liked}
            params={{
              uname: params.uname,
              collection: params.collection,
              item: params.item,
            }}
          />
        </div>
      </div>
      <div className="flex gap-12 text-xs italic w-full flex-col md:flex-row items-center md:justify-between">
        <span>Created {item.createdAt}</span>
        <span>Updated {item.updatedAt}</span>
      </div>
    </div>
  );
};

export default ItemSideDetailFooter;
