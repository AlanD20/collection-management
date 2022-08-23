import React from 'react';
import { User } from '@/@types/Models';
import { DefProps } from '@/@types/Global';
import { Link } from '@inertiajs/inertia-react';

interface Props extends DefProps {
  user: User;
}

const UserCard = ({ user, className = '' }: Props) => {
  return (
    <Link
      href={route('u.show', {
        uname: user.username,
      })}
      as="a"
      className={`hover:translate-y-2 transition-transform duration-150 ease-out rounded-3xl card card-compact lg:card-normal bg-base-100 min-w-[300px] shadow-xl flex-1 ${className}`}
    >
      <div className={`card card-compact lg:card-normal bg-base-100 shadow-xl`}>
        <div className="card-body items-center">
          <h2 className="card-title capitalize font-bold">
            {`${user.username} #${user.id}`}
          </h2>
          <div className="flex flex-col justify-between text-xs italic gap-2">
            <span>{`${__('model.created_at')} ${user.createdAt}`}</span>
            <span>{`${__('model.updated_at')} ${user.updatedAt}`}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
