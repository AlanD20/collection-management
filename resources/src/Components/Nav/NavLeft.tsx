import React from 'react';
import NavItem from './NavItem';
import { UsePage } from '@/@types/Response';
import { IoIosArrowDown } from 'react-icons/io';
import ChangeTheme from '@@/Misc/ChangeTheme';
import AuthChangeTheme from '@@/Misc/AuthChangeTheme';
import { Link, usePage } from '@inertiajs/inertia-react';

const NavLeft = () => {

  const { auth: { user }, appName } = usePage<UsePage>().props;
  const { url } = usePage();

  const home = url === '/';
  const collections = url === '/collections';
  const users = url === '/users';
  const items = url === '/items';

  const activeItem = (route: boolean) =>
    (route ? 'btn-ghost btn-active' : '')

  return (
    <>
      <div className="navbar-start flex-1 flex items-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            <NavItem
              href={route('main.index')}
              label={__('main.home')}
              as="button"
              className={activeItem(home)}
            />
            <NavItem
              href={route('collections.index')}
              label={__('main.collections')}
              as="button"
              className={activeItem(collections)}
            />
            <NavItem
              href={route('users.index')}
              label={__('main.users')}
              as="button"
              className={activeItem(users)}
            />
            <NavItem
              href={route('items.index')}
              label={__('main.items')}
              as="button"
              className={activeItem(items)}
            />

            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <IoIosArrowDown
                  className={`${user && user.locale === 'en'
                    ? 'rotate-90'
                    : '-rotate-90'
                    }`}
                />
              </a>
              <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                <NavItem href="#" label="Submeni 1" as="button" />
                <NavItem href="#" label="Submenu 2" as="button" />
              </ul>
            </li>
            <NavItem href="#" label="Item 3" as="button" />
          </ul>
        </div>

        <Link
          href={route('main.index')}
          as="button"
          className="btn btn-ghost normal-case text-xl"
        >
          {appName}
        </Link>
        {user ? <AuthChangeTheme /> : <ChangeTheme />}
      </div>

      {/* Large Screen */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-2">

          <NavItem
            href={route('main.index')}
            label={__('main.home')}
            as="button"
            className={activeItem(home)}
          />
          <NavItem
            href={route('collections.index')}
            label={__('main.collections')}
            as="button"
            className={activeItem(collections)}
          />
          <NavItem
            href={route('users.index')}
            label={__('main.users')}
            as="button"
            className={activeItem(users)}
          />
          <NavItem
            href={route('items.index')}
            label={__('main.items')}
            as="button"
            className={activeItem(items)}
          />

          <li tabIndex={0}>
            <a>
              Parent
              <IoIosArrowDown />
            </a>
            <ul className="menu menu-vertical p-2 shadow bg-base-100">
              <NavItem href="#" label="Submeni 1" as="button" />
              <NavItem href="#" label="Submenu 2" as="button" />
            </ul>
          </li>

          <NavItem href="#" label="Item 3" as="button" />
        </ul>
      </div>
    </>
  );
};
export default NavLeft;
