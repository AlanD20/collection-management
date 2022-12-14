import React from 'react';
import NavLeft from '@@/Nav/NavLeft';
import NavSearch from '@@/Nav/NavSearch';
import NavProfile from '@@/Nav/NavProfile';

const Navigation = () => {
  return (
    <>
      <nav className="hidden sm:flex sticky top-0 navbar bg-base-100 py-4 px-8 shadow-md z-50">
        <NavLeft />
        <div className="navbar-end flex-none gap-4 w-max">
          <NavSearch />
          <NavProfile />
        </div>
      </nav>
      <nav className="flex flex-col sm:hidden sticky top-0 navbar bg-base-100 py-4 px-8 gap-10 shadow-md z-50 min-h-min">
        <div className="w-full flex justify-between">
          <NavLeft />
          <NavProfile />
        </div>
        <div className="navbar-end w-full justify-center">
          <NavSearch />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
