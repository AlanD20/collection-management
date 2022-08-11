import React from 'react';
import { User } from '@/@types/Models';
import ButtonLink from '@@/Form/ButtonLink';

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
            <span className="font-bold">Name:</span>
            <span>{user.name}</span>
          </div>
          <div className="flex flex-col capitalize">
            <span className="font-bold">Username:</span>
            <span>{user.username}</span>
          </div>
          <div className="flex flex-col capitalize">
            <span className="font-bold">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex gap-4  capitalize">
            <span className="font-bold">Status:</span>
            <span
              className={`capitalize font-semibold text-${
                user.block ? 'red' : 'green'
              }-500`}
            >
              {user.block ? 'blocked' : 'active'}
            </span>
          </div>
          <div className="flex gap-4 capitalize">
            <span className="font-bold">Admin:</span>
            <span className="w-8">
              <i
                className={`text-lg fas fa-${user.admin ? 'check' : 'times'}`}
              ></i>
            </span>
          </div>

          <div className="mt-4 card-actions flex gap-6 px-12">
            {/* Promote/Demote user */}
            <ButtonLink
              href={route(`admin.users.${user.admin ? 'demote' : 'promote'}`, {
                id: user.id,
              })}
              method="post"
              as="button"
              preserveScroll={true}
              className={`min-w-[60px] btn-outline ${
                user.admin ? 'btn-error' : 'btn-success'
              }`}
            >
              <i
                className={`text-lg fas fa-user-${
                  user.admin ? 'slash' : 'crown'
                }`}
              ></i>
            </ButtonLink>

            {/* Block/Unblock user */}

            <ButtonLink
              href={route(`admin.users.${user.block ? 'unblock' : 'block'}`, {
                id: user.id,
              })}
              method="post"
              as="button"
              preserveScroll={true}
              className={`min-w-[60px] btn-outline ${
                user.block ? 'btn-error' : 'btn-success'
              }`}
            >
              <i
                className={`text-lg fas fa-user-${
                  user.block ? 'unlock' : 'lock'
                }`}
              ></i>
            </ButtonLink>

            {/* Delete User */}
            <ButtonLink
              href={route('admin.users.destroy', { id: user.id })}
              method="delete"
              as="button"
              preserveScroll={true}
              className={`min-w-[60px] btn-outline btn-error`}
            >
              <i className="text-lg fas fa-trash"></i>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGridCard;