import React from 'react';
import { User } from '@/@types/Models';
import EditButtonLink from '@@/Form/Action/EditButtonLink';
import UserPageContainer from '@/Layouts/UserPageContainer';
import { Link, usePage } from '@inertiajs/inertia-react';
import { UsePage } from '@/@types/Response';

interface Props {
  user: User;
}

const Dashboard = ({ user }: Props) => {

  const { auth } = usePage<UsePage>().props;

  const condition = auth.user && (auth.user.username === user.username || user.admin)

  return (
    <div
      className="card card-bordered bg-base-100 shadow-md rounded-md p-4 px-8 max-w-max"
    >
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 py-4 px-8">
          <div className="flex flex-col">
            <span>{__('user.username')}</span>
            <span className='font-bold'>{user.username}</span>
          </div>
          <div className="flex flex-col">
            <span>{__('user.name')}</span>
            <span className='font-bold'>{user.name}</span>
          </div>
          <div className="flex flex-col">
            <span>{__('user.email')}</span>
            <span className='font-bold'>{user.email}</span>
          </div>

          <div className="flex gap-12 text-xs italic w-full flex-col md:flex-row items-center md:justify-between">
            <span>Created {user.createdAt}</span>
            <span>Updated {user.updatedAt}</span>
          </div>
        </div>
        {condition &&
          <>
            <EditButtonLink
              routeName='u.edit'
              params={{
                uname: user.username
              }}
            />
            <Link
              href={route('u.edit.password', {
                uname: user.username
              })}
              className="btn btn-neutral"
            >
              {__('form.change_password')}
            </Link>
          </>
        }
      </div>
    </div>
  );
};

export default UserPageContainer({
  tabTitle: 'User',
  body: {
    component: Dashboard,
  },
});
