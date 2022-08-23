import React from 'react';
import { User } from '@/@types/Models';
import BlockUser from './Action/BlockUser';
import DeleteUser from './Action/DeleteUser';
import GrantPermission from './Action/GrantPermission';
import { Link } from '@inertiajs/inertia-react';

interface Props {
  user: User;
}

const UserTableRow = ({ user }: Props) => {
  return (
    <tr className="text-center">
      <td className="w-[10ch] font-bold">{user.id}</td>
      <td>{user.name}</td>
      <td>
        <Link
          href={route('u.show', { uname: user.username })}
          className="font-bold link link-secondary hover:link-accent"
        >
          {user.username}
        </Link>
      </td>
      <td>{user.email}</td>
      <td
        className={`w-24 capitalize text-center font-semibold ${
          user.block ? 'text-red-500' : 'text-green-500'
        }`}
      >
        {user.block ? __('user.blocked') : __('user.active')}
      </td>

      <td className="w-8 text-center">
        <i className={`text-lg fas fa-${user.admin ? 'check' : 'times'}`}></i>
      </td>

      <td className="flex gap-6 px-12">
        <GrantPermission
          params={{ user: user.username }}
          isAdmin={user.admin}
        />
        <BlockUser params={{ user: user.username }} isBlocked={user.block} />
        <DeleteUser params={{ user: user.username }} />
      </td>
    </tr>
  );
};

export default UserTableRow;
