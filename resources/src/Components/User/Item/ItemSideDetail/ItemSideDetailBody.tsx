import React from 'react';
import { User } from '@/@types/Models';
import { UsePage } from '@/@types/Response';
import { usePage } from '@inertiajs/inertia-react';

interface Props {
  user: User;
}

const ItemSideDetailBody = ({ user }: Props) => {
  const { params } = usePage<UsePage>().props;

  return (
    <div className="flex flex-col gap-4 my-4 mb-16">
      <div className="flex flex-col w-full gap-2 justify-center">
        <span className="font-bold">{__('user.name')}</span>
        <span>{user.name}</span>
      </div>
      <div className="flex flex-col w-full gap-2 justify-center">
        <span className="font-bold">{__('user.username')}</span>
        <span>{user.username}</span>
      </div>
      <div className="flex flex-col w-full gap-2 justify-center">
        <span className="font-bold">{__('user.email')}</span>
        <span>{user.email}</span>
      </div>
      <div className="flex w-full gap-4 justify-start">
        <span className="font-bold">{__('user.admin')}</span>
        <span>
          <i className={`text-lg fas fa-${user.admin ? 'check' : 'times'}`}></i>
        </span>
      </div>
      <div className="flex w-full gap-2 justify-start">
        <span className="font-bold">{__('user.blocked')}</span>
        <span
          className={`capitalize text-center font-semibold text-${
            user.block ? 'red' : 'green'
          }-700 `}
        >
          {user.block ? __('user.blocked') : __('user.active')}
        </span>
      </div>
    </div>
  );
};

export default ItemSideDetailBody;
