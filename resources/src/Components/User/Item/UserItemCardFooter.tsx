import { UsePage } from '@/@types/Global';
import { Collection, Item } from '@/@types/Models';
import DeleteButtonLink from '@@/Form/Action/DeleteButtonLink';
import EditButtonLink from '@@/Form/Action/EditButtonLink';
import ViewButtonLink from '@@/Form/Action/ViewButtonLink';
import { usePage } from '@inertiajs/inertia-react';
import React from 'react';

interface Props {
  collection: Collection;
  item: Item;
}

const UserItemCardFooter = ({ collection, item }: Props) => {
  const { params } = usePage<UsePage>().props;

  return (
    <div className="card-actions justify-between">
      <div className="flex flex-col gap-2 text-xs italic">
        <span>Created {item.createdAt}</span>
        <span>Updated {item.updatedAt}</span>
      </div>
      <div className="flex gap-2 items-center">
        <DeleteButtonLink
          routeName="u.collections.items.destroy"
          params={{
            uname: params.uname,
            collection: collection.id,
            item: item.id,
          }}
          hideWhen={!self}
        />
        <EditButtonLink
          routeName="u.collections.items.edit"
          params={{
            uname: params.uname,
            collection: collection.id,
            item: item.id,
          }}
          hideWhen={!self}
        />
        <ViewButtonLink
          routeName="u.collections.items.show"
          params={{
            uname: params.uname,
            collection: collection.id,
            item: item.id,
          }}
        />
      </div>
    </div>
  );
};

export default UserItemCardFooter;
