import React from 'react';
import { UsePage } from '@/@types/Global';
import { Collection, Item } from '@/@types/Models';
import { usePage } from '@inertiajs/inertia-react';
import LikeButtonLink from '@@/Form/Action/LikeButtonLink';

interface Props {
  collection: Collection;
  item: Item;
  likes: number[];
}

const UserItemCardHeader = ({ collection, item, likes }: Props) => {
  const { params } = usePage<UsePage>().props;

  return (
    <div className="flex flex-col mb-4">
      <div className="flex w-full justify-between items-center gap-2 py-2 px-4 mb-2">
        <h4 className="card-title capitalize font-bold !mb-0">
          {`${item.name} #${item.id}`}
        </h4>
        <LikeButtonLink
          routeName="u.collections.items.likes"
          liked={likes.includes(item.id)}
          params={{
            uname: params.uname,
            collection: collection.id,
            item: item.id,
          }}
        />
      </div>

      <div className="flex gap-2 w-full items-center flex-wrap">
        {item.tags &&
          item.tags.length &&
          item.tags.map((tag) => (
            <div key={tag.id} className="badge">
              {tag.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserItemCardHeader;
