import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import useLocalChange from '@/hooks/useLocalChange';

const ChangeLocale = () => {
  const { currentLocale, locale, changeLocale } = useLocalChange();

  const handleClick = () => {
    changeLocale(locale);
    window.location.reload();
  };

  const liTag = (
    <li tabIndex={0} onClick={handleClick}>
      <button className="uppercase">{locale}</button>
    </li>
  );

  return (
    <>
      <li tabIndex={0} className="lg:hidden">
        <a className="uppercase">
          {currentLocale}
          <IoIosArrowDown
            className={`${currentLocale === 'en' ? '-rotate-90' : 'rotate-90'}`}
          />
        </a>
        <ul
          tabIndex={0}
          className="menu menu-vertical menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box gap-2"
        >
          {liTag}
        </ul>
      </li>

      {/* Large screen */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-2">
          <li tabIndex={0} className="uppercase">
            <a>
              {currentLocale}
              <IoIosArrowDown />
            </a>
            <ul className="menu menu-vertical p-2 shadow bg-base-100">
              {liTag}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ChangeLocale;
