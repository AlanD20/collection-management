import React from 'react';
import BadgeLink from '@@/Misc/BadgeLink';
import { Collection } from '@/@types/Models';
import { Link } from '@inertiajs/inertia-react';

interface Props {
  collection: Collection;
  categories?: boolean;
}

const CollectionCard = ({ collection, categories }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Link
        href={route('u.collections.show', {
          uname: collection.user.username,
          collection: collection.id,
        })}
        className="flex flex-col gap-2 bg-base-200 p-4 rounded-lg shadow-md"
      >
        <h3 className="text-2xl capitalize">{`${collection.name} #${collection.id}`}</h3>
        {categories && (
          <BadgeLink
            label={collection.category.name}
            query={collection.category.name}
          />
        )}
      </Link>
    </div>
  );
};

export default CollectionCard;
