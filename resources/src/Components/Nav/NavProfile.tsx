import React from 'react';
import { UsePage } from '@/@types/Response';
import { Link, usePage } from '@inertiajs/inertia-react';

interface Props { }

const NavProfile = ({ }: Props) => {
  const $ = usePage<UsePage>().props;


  if (!$.auth || !$.auth.user) {
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
            {$.auth.user.username}
          </span>
        </div>
      </label>

      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link
            href={route('u.collections.index', {
              uname: $.auth.user.username,
            })}
            as="button"
            className="justify-between"
          >
            {__('nav.my_collection')}
            <span className="badge">New</span>
          </Link>
        </li>

        {$.auth.user.admin && (
          <li>
            <Link href={route('admin.index')} as="button">
              Admin Panel
            </Link>
          </li>
        )}
        <li>
          <Link href={route('logout')} as="button" method="post" replace={true}>
            {__('nav.logout')}
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavProfile;
