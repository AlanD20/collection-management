import React from 'react';
import { Item } from '@/@types/Models';
import { UsePage } from '@/@types/Response';
import { usePage } from '@inertiajs/inertia-react';
import ViewButtonLink from '@@/Form/Action/ViewButtonLink';
import LikeButtonLink from '@@/Form/Action/LikeButtonLink';

interface Props {
  item: Item;
  likes: number[];
}

const UserItemCardFooter = ({ item, likes }: Props) => {
  const { params } = usePage<UsePage>().props;

  return (
    <div className="card-actions justify-between">
      <div className="flex flex-col gap-2 text-xs italic">
        <span>{`${__('model.created_at')} ${item.createdAt}`}</span>
        <span>{`${__('model.updated_at')} ${item.updatedAt}`}</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center">
          {item.likesCount}
          <LikeButtonLink
            routeName="u.collections.items.likes"
            liked={likes.includes(item.id)}
            params={{
              uname: params.uname,
              collection: params.collection,
              item: item.id,
            }}
          />
        </div>
        <ViewButtonLink
          routeName="u.collections.items.show"
          params={{
            uname: params.uname,
            collection: params.collection,
            item: item.id,
          }}
        />
      </div>
    </div>
  );
};

export default UserItemCardFooter;
