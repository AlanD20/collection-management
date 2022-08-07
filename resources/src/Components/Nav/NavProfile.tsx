import React from 'react';

interface Props {
  __?: any;
}

const NavProfile = ({ __ }: Props) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <div className="w-10 rounded-full flex items-center gap-4">
          <i className="fas fa-user text-3xl"></i>
        </div>
        <span className="font-semibold text-xl capitalize">{'USER LOGIN'}</span>
      </label>

      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a
            href="{{route('u.collections.index',['uname'=>$uname])}}"
            className="justify-between"
          >
            __.nav.my_collection
            <span className="badge">New</span>
          </a>
        </li>
        @if ($admin)
        <li>
          <a href="{{route('admin.index')}}">Admin Panel</a>
        </li>
        @endif
        <form method="post" action="{{route('logout')}}">
          <li>
            @csrf
            <button type="submit">__.nav.logout</button>
          </li>
        </form>
      </ul>
    </div>
  );
};
export default NavProfile;
