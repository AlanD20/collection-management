import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { Collection } from '@/@types/Models';
import { PH_THUMBNAIL } from '@/common/constants';
import { usePage } from '@inertiajs/inertia-react';
import { DefProps, UsePage } from '@/@types/Global';

interface Props extends DefProps {
  collection: Collection;
}

const UserCollectionCard = ({ collection, className = '' }: Props) => {
  const { params, ...$ } = usePage<UsePage>().props;

  return (
    <div
      className={`card card-compact lg:card-normal min-w-[250px] w-[400px] bg-base-100 shadow-xl ${className}`}
    >
      <figure>
        <img src={collection.thumbnail ?? PH_THUMBNAIL} alt={collection.name} />
      </figure>
      <div className="px-8 pt-4 flex justify-between">
        <span>Created {collection.createdAt}</span>
        <span>Updated {collection.updatedAt}</span>
      </div>
      <div className="card-body">
        <div className="flex flex-col mb-4">
          <h2 className="card-title capitalize font-bold">
            {`${collection.name} #${collection.id}`}
          </h2>
          <div className="badge">{collection.category.name}</div>
        </div>
        <p>{collection.description}</p>
        <div className="card-actions justify-end">
          <ButtonLink
            href={route('u.collections.show', {
              uname: params.uname,
              col_id: collection.id,
            })}
            as="button"
            className="btn-accent text-base"
          >
            View
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default UserCollectionCard;
