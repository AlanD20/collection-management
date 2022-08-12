import React from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { Collection, Item } from '@/@types/Models';
import { PH_THUMBNAIL } from '@/common/constants';
import { usePage } from '@inertiajs/inertia-react';
import { DefProps, UsePage } from '@/@types/Global';

interface Props extends DefProps {
  collection: Collection;
  item: Item;
}

const UserItemCard = ({ collection, item, className = '' }: Props) => {
  const { params = {}, ...$ } = usePage<UsePage>().props;

  return (
    <div
      className={`card card-compact lg:card-normal min-w-[250px] w-[400px] bg-base-100 shadow-xl ${className}`}
    >
      <div className="px-8 pt-4 flex justify-between">
        <span>Created {item.createdAt}</span>
        <span>Updated {item.updatedAt}</span>
      </div>
      <div className="card-body">
        <div className="flex flex-col mb-4">
          <h2 className="card-title capitalize font-bold">
            {`${item.name} #${item.id}`}
          </h2>
        </div>
        <p>{collection.fields[0].label}</p>
        <div className="card-actions justify-end">
          <ButtonLink
            href={route('u.collections.items.edit', {
              uname: params.uname,
              collection: params.collection,
              item: params.item,
            })}
            as="button"
            className="btn-secondary text-base"
          >
            Edit
          </ButtonLink>
          <ButtonLink
            href={route('u.collections.show', {
              uname: params.uname,
              collection: params.collection,
              item: params.item,
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

export default UserItemCard;
