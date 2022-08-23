import React from 'react';
import useAuth from '@/hooks/useAuth';
import BadgeLink from '@@/Misc/BadgeLink';
import { DefProps } from '@/@types/Global';
import MDEditor from '@uiw/react-md-editor';
import { Collection } from '@/@types/Models';
import CollectionAction from './CollectionAction';
import { PH_THUMBNAIL } from '@/common/constants';
import ViewButtonLink from '@@/Form/Action/ViewButtonLink';

interface Props extends DefProps {
  collection: Collection;
}

const UserCollectionCard = ({ collection, className = '' }: Props) => {
  return (
    <div
      className={`card card-compact lg:card-normal bg-base-100 shadow-xl min-w-[350px] max-w-[40ch] relative self-stretch  ${className}`}
    >
      <figure>
        <img src={collection.thumbnail ?? PH_THUMBNAIL} alt={collection.name} />
      </figure>
      <div className="flex justify-between items-center w-full mt-4 px-4">
        <div className="px-8 flex justify-between text-xs italic w-full gap-2">
          <span>{`${__('model.created_at')} ${collection.createdAt}`}</span>
          <span>{`${__('model.updated_at')} ${collection.updatedAt}`}</span>
        </div>
        <CollectionAction
          params={{
            uname: collection.user.username,
            collection: collection.id,
          }}
        />
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
        <MDEditor.Markdown source={collection.description} className="mb-8" />
        <div className="card-actions mt-auto mb-4 justify-end">
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

export default UserCollectionCard;
