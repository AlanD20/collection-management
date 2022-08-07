import React from 'react';
import NavCenter from '@/Components/Nav/NavCenter';
import NavProfile from '@/Components/Nav/NavProfile';
import NavSearch from '@/Components/Nav/NavSearch';

interface Props {}

const Navigation = (props: Props) => {
  return (
    <nav className="sticky top-0 navbar bg-base-100 py-4 px-8 shadow-md z-50">
      <NavCenter />

      <div className="navbar-end flex-none gap-4">
        <NavSearch />
        @auth
        <NavProfile />
        @endauth @guest
        <a href="{{route('login')}}" className="btn">
          Login
        </a>
        @endguest
      </div>
    </nav>
  );
};
export default Navigation;
