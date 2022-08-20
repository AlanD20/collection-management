import React from 'react';
import { User } from '@/@types/Models';
import BlockUser from './Action/BlockUser';
import DeleteUser from './Action/DeleteUser';
import GrantPermission from './Action/GrantPermission';

interface Props {
  user: User;
}

const UserGridCard = ({ user }: Props) => {
  return (
    <div className="card p-0 bg-base-100 shadow-xl">
      <div className="indicator">
        <span className="indicator-item badge badge-primary top-6 right-12 text-lg">
          #{user.id}
        </span>
        <div className="card-body">
          <div className="flex flex-col capitalize">
            <span className="font-bold">{__('form.name')}</span>
            <span>{user.name}</span>
          </div>
          <div className="flex flex-col capitalize">
            <span className="font-bold">{__('form.username')}</span>
            <span>{user.username}</span>
          </div>
          <div className="flex flex-col capitalize">
            <span className="font-bold">{__('form.email')}</span>
            <span>{user.email}</span>
          </div>
          <div className="flex gap-4  capitalize">
            <span className="font-bold">{__('form.status')}</span>
            <span
              className={`capitalize font-semibold text-${
                user.block ? 'red' : 'green'
              }-500`}
            >
              {user.block ? 'blocked' : 'active'}
            </span>
          </div>
          <div className="flex gap-4 capitalize">
            <span className="font-bold">{__('form.admin')}</span>
            <span className="w-8">
              <i
                className={`text-lg fas fa-${user.admin ? 'check' : 'times'}`}
              ></i>
            </span>
          </div>

          <div className="mt-4 card-actions flex gap-6 px-12">
            <GrantPermission params={{ user: user.id }} isAdmin={user.admin} />
            <BlockUser params={{ user: user.id }} isBlocked={user.block} />
            <DeleteUser params={{ user: user.id }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGridCard;
