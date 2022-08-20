import React from 'react';
import { UsePage } from '@/@types/Response';
import { Link, usePage } from '@inertiajs/inertia-react';

interface Props {}

const NavProfile = ({}: Props) => {
  const {
    auth: { user },
  } = usePage<UsePage>().props;

  if (!user) {
    return (
      <Link href={route('login')} as="button" className="btn">
        Login
      </Link>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <div className="rounded-full flex items-center gap-4">
          <i className="fas fa-user text-3xl"></i>
          <span className="font-semibold text-sm capitalize">
            {user.username}
          </span>
        </div>
      </label>

      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={route('u.show', { uname: user.username })} as="button">
            {__('main.profile')}
          </Link>
        </li>
        <li>
          <Link
            href={route('u.collections.index', {
              uname: user.username,
            })}
            as="button"
            className="justify-between"
          >
            {__('main.my_collection')}
          </Link>
        </li>

        {user.admin && (
          <li>
            <Link href={route('admin.index')} as="button">
              Admin Panel
              <span className="badge badge-error badge-sm text-white">
                {__('main.badge_admin')}
              </span>
            </Link>
          </li>
        )}
        <li>
          <Link href={route('u.edit', { uname: user.username })} as="button">
            {__('main.settings')}
          </Link>
        </li>
        <li>
          <Link href={route('logout')} as="button" method="post" replace={true}>
            {__('main.logout')}
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavProfile;
