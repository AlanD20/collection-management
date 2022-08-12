import React from 'react';
import { User } from '@/@types/Models';
import BlockUser from './Action/BlockUser';
import DeleteUser from './Action/DeleteUser';
import GrantPermission from './Action/GrantPermission';

interface Props {
  user: User;
}

const UserTableRow = ({ user }: Props) => {


  return (
    <tr>
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td
        className={`w-24 capitalize text-center font-semibold text-${user.block ? 'red' : 'green'
          }-500`}
      >
        {user.block ? 'blocked' : 'active'}
      </td>

      <td className="w-8 text-center">
        <i className={`text-lg fas fa-${user.admin ? 'check' : 'times'}`}></i>
      </td>

      <td className="flex gap-6 px-12">
        <GrantPermission userId={user.id} isAdmin={user.admin} />
        <BlockUser userId={user.id} isBlocked={user.block} />
        <DeleteUser userId={user.id} />
      </td>
    </tr>
  );
};

export default UserTableRow;
