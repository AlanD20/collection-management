import React from 'react';
import { Item } from '@/@types/Models';
import { UsePage } from '@/@types/Response';
import { HiDotsVertical } from 'react-icons/hi';
import { usePage } from '@inertiajs/inertia-react';
import GhostButtonLink from '@@/Form/GhostButtonLink';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

interface Props {
  item: Item;
}

const ItemDetailHeader = ({ item }: Props) => {
  const {
    params,
    auth: { user },
  } = usePage<UsePage>().props;

  const condition = user && (user.username === params.uname || user.admin);

  return (
    <div className="flex justify-between items-center w-full gap-4">
      <div className="flex justify-between gap-4 text-xs w-full">
        <div className="flex gap-1 flex-col lg:flex-row items-center">
          <span>{__('model.created_at')}</span>
          <span>{item.updatedAt}</span>
        </div>
        <div className="flex gap-1 flex-col lg:flex-row items-center">
          <span>{__('model.updated_at')}</span>
          <span>{item.updatedAt}</span>
        </div>
      </div>

      {condition && (
        <div className="flex-none dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-square btn-ghost">
            <HiDotsVertical className="text-xl font-bold" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <GhostButtonLink
                routeName="u.collections.items.edit"
                params={{
                  uname: params.uname,
                  collection: params.collection,
                  item: params.item,
                }}
              >
                <AiOutlineEdit />
                <span className="mx-auto">{__('form.edit')}</span>
              </GhostButtonLink>
              <GhostButtonLink
                routeName="u.collections.items.destroy"
                method="delete"
                params={{
                  uname: params.uname,
                  collection: params.collection,
                  item: params.item,
                }}
              >
                <AiOutlineDelete />
                <span className="mx-auto">{__('form.delete')}</span>
              </GhostButtonLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemDetailHeader;
