import React from 'react';
import { User } from '@/@types/Models';
import { Link } from '@inertiajs/inertia-react';

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Link
        href={route('u.show', {
          uname: user.username,
        })}
        className="flex flex-col gap-2 bg-base-200 p-4 rounded-lg shadow-md"
      >
        <h3 className="text-2xl capitalize">
          {`${user.username} #${user.id}`}
        </h3>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </Link>
    </div>
  );
};

export default UserCard;
