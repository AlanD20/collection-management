import React from 'react';
import { Item } from '@/@types/Models';
import { UsePage } from '@/@types/Response';
import { HiDotsVertical } from 'react-icons/hi';
import { usePage } from '@inertiajs/inertia-react';
import GhostButtonLink from '@@/Form/GhostButtonLink';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

interface Props {
  item: Item;
}

const UserItemCardHeader = ({ item }: Props) => {
  const {
    params,
    auth: { user },
  } = usePage<UsePage>().props;

  const condition = user && (user.username === params.uname || user.admin);

  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="navbar w-full justify-between">
        <h4 className="flex-1 card-title !mb-0 capitalize font-bold">
          {`${item.name} #${item.id}`}
        </h4>
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
                    item: item.id,
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
                    item: item.id,
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
      <div className="flex gap-1 w-full items-center flex-wrap">
        {item.tags &&
          item.tags.length > 0 &&
          item.tags.map((tag) => (
            <div key={tag.id} className="badge">
              {tag.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserItemCardHeader;
