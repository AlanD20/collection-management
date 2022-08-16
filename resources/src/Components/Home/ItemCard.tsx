import React from 'react';
import { DefProps } from '@/@types/Global';
import { PH_THUMBNAIL } from '@/common/constants';
import { Item } from '@/@types/Models';
import ViewButtonLink from '@@/Form/Action/ViewButtonLink';

interface Props extends DefProps {
  item: Item;
}

const ItemCard = ({ item, className = '' }: Props) => {
  return (
    <div
      className={`card card-compact lg:card-normal min-w-[300px] bg-base-100 shadow-xl h-[400px] ${className}`}
    >
      <div className="px-8 pt-4 flex justify-between text-xs italic">
        <span>Created {item.createdAt}</span>
        <span>Updated {item.updatedAt}</span>
      </div>
      <div className="card-body !py-4">
        <div className="flex flex-col mb-4">
          <h2 className="card-title capitalize font-bold">
            {`${item.name} #${item.id}`}
          </h2>
          <div className="flex w-full gap-1 flex-wrap">
            {item.tags.map((tag) => (
              <div key={tag.id} className="badge">
                {tag.name}
              </div>
            ))}
          </div>
        </div>
        <p>{item.id} descriptions....</p>
        <div className="card-actions mt-4 justify-end">
          <ViewButtonLink
            routeName="u.collections.show"
            params={{
              uname: item.collection.user.username,
              collection: item.collection.id,
              item: item.id,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
