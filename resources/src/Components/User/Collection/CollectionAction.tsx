import React from 'react';
import { DefProps } from '@/@types/Global';
import { HiDotsVertical } from 'react-icons/hi';
import { usePage } from '@inertiajs/inertia-react';
import GhostButtonLink from '@@/Form/GhostButtonLink';
import { ParamsProp, UsePage } from '@/@types/Response';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

interface Props extends DefProps {
  params?: ParamsProp;
}

const CollectionAction = ({ params, className = '' }: Props) => {
  const {
    params: _params,
    auth: { user },
  } = usePage<UsePage>().props;

  const condition = user && (user.username === _params.uname || user.admin);

  if (!condition) return null;

  return (
    <div className={`flex-none dropdown dropdown-end ${className}`}>
      <label tabIndex={0} className="btn btn-square btn-ghost">
        <HiDotsVertical className="text-xl font-bold" />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <GhostButtonLink
            routeName="u.collections.edit"
            params={
              params ?? {
                uname: _params.uname,
                collection: _params.collection,
              }
            }
          >
            <AiOutlineEdit />
            <span className="mx-auto">{__('form.edit')}</span>
          </GhostButtonLink>
          <GhostButtonLink
            routeName="u.collections.destroy"
            method="delete"
            params={
              params ?? {
                uname: _params.uname,
                collection: _params.collection,
              }
            }
          >
            <AiOutlineDelete />
            <span className="mx-auto">{__('form.delete')}</span>
          </GhostButtonLink>
        </li>
      </ul>
    </div>
  );
};
export default CollectionAction;
