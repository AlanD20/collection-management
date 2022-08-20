import React from 'react';
import { User } from '@/@types/Models';
import { UsePage } from '@/@types/Response';
import { Link, usePage } from '@inertiajs/inertia-react';
import EditButtonLink from '@@/Form/Action/EditButtonLink';

interface Props {
  user: User;
}

const UserProfileActions = ({ user }: Props) => {
  const { auth } = usePage<UsePage>().props;

  const condition =
    auth.user && (auth.user.username === user.username || auth.user.admin);

  return (
    <div className="flex flex-col gap-4">
      {condition && (
        <div className="flex gap-4 justify-between">
          <EditButtonLink
            routeName="u.edit"
            params={{
              uname: user.username,
            }}
          />
          <Link
            href={route('u.edit.password', {
              uname: user.username,
            })}
            className="btn btn-neutral"
          >
            {__('form.change_password')}
          </Link>
        </div>
      )}
      <Link
        href={route('u.collections.index', {
          uname: user.username,
        })}
        className="btn btn-neutral"
      >
        {__('main.collections')}
      </Link>
    </div>
  );
};

export default UserProfileActions;
