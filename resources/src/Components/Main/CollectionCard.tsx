import React from 'react';
import BadgeLink from '@@/Misc/BadgeLink';
import { DefProps } from '@/@types/Global';
import { Collection } from '@/@types/Models';
import { PH_THUMBNAIL } from '@/common/constants';
import ViewButtonLink from '@@/Form/Action/ViewButtonLink';
import MDEditor from '@uiw/react-md-editor';

interface Props extends DefProps {
  collection: Collection;
}

const CollectionCard = ({ collection, className = '' }: Props) => {
  return (
    <div
      className={`card card-compact lg:card-normal bg-base-100 shadow-xl min-w-[320px] self-stretch ${className}`}
    >
      <figure>
        <img src={collection.thumbnail ?? PH_THUMBNAIL} alt={collection.name} />
      </figure>
      <div className="px-8 pt-4 flex justify-between text-xs italic">
        <span>{`${__('model.created_at')} ${collection.createdAt}`}</span>
        <span>{`${__('model.updated_at')} ${collection.updatedAt}`}</span>
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
          <BadgeLink
            label={collection.category.name}
            query={collection.category.name}
          />
        </div>
        <MDEditor.Markdown source={collection.description} className="my-4" />
        <div className="card-actions justify-end mt-auto mb-2">
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
