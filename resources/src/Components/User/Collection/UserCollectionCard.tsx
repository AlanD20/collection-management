import React from 'react';
import useAuth from '@/hooks/useAuth';
import { DefProps } from '@/@types/Global';
import { UsePage } from '@/@types/Response';
import { Collection } from '@/@types/Models';
import { PH_THUMBNAIL } from '@/common/constants';
import { usePage } from '@inertiajs/inertia-react';
import EditButtonLink from '@@/Form/Action/EditButtonLink';
import ViewButtonLink from '@@/Form/Action/ViewButtonLink';
import DeleteButtonLink from '@@/Form/Action/DeleteButtonLink';

interface Props extends DefProps {
  collection: Collection;
}

const UserCollectionCard = ({ collection, className = '' }: Props) => {
  const { params } = usePage<UsePage>().props;

  const { self } = useAuth();

  return (
    <div
      className={`card card-compact lg:card-normal min-w-[250px] w-[400px] bg-base-100 shadow-xl ${className}`}
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
            count: collection.itemsCount ? collection.itemsCount : 0
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
          <DeleteButtonLink
            routeName="u.collections.destroy"
            params={{
              uname: params.uname,
              collection: collection.id,
            }}
            hideWhen={!self}
          />
          <EditButtonLink
            routeName="u.collections.edit"
            params={{
              uname: params.uname,
              collection: collection.id,
            }}
            hideWhen={!self}
          />
          <ViewButtonLink
            routeName="u.collections.show"
            params={{
              uname: params.uname,
              collection: collection.id,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCollectionCard;
