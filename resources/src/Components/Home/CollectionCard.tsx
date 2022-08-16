import React from 'react';
import { DefProps } from '@/@types/Global';
import { Collection } from '@/@types/Models';
import { PH_THUMBNAIL } from '@/common/constants';
import ViewButtonLink from '@@/Form/Action/ViewButtonLink';

interface Props extends DefProps {
  collection: Collection;
}

const CollectionCard = ({ collection, className = '' }: Props) => {
  return (
    <div
      className={`card card-compact lg:card-normal bg-base-100 shadow-xl min-w-[300px] flex-1 h-[550px] ${className}`}
    >
      <figure>
        <img src={collection.thumbnail ?? PH_THUMBNAIL} alt={collection.name} />
      </figure>
      <div className="px-8 pt-4 flex justify-between text-xs italic">
        <span>Created {collection.createdAt}</span>
        <span>Updated {collection.updatedAt}</span>
      </div>
      <div className="card-body !py-4">
        <div className="flex w-full items-center text-xs capitalize">
          {__('user.col_item_count', {
            count: collection.itemsCount ? collection.itemsCount : 0,
          })}
        </div>
        <div className="flex flex-col mb-4">
          <h2 className="card-title capitalize font-bold">
            {`${collection.name} #${collection.id}`}
          </h2>
          <div className="badge">{collection.category.name}</div>
        </div>
        <p>{collection.description}</p>
        <div className="card-actions mt-4 justify-end">
          <ViewButtonLink
            routeName="u.collections.show"
            params={{
              uname: collection.user.username,
              collection: collection.id,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
