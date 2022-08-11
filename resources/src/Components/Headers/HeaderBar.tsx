import React from 'react';
import { Children, DefProps } from '@/@types/Global';

interface Props extends DefProps, Children {}

const HeaderBar = ({ children, className = '' }: Props) => {
  return (
    <div
      className={`navbar bg-base-100 my-4 flex-col items-stretch gap-4 md:flex-row rounded-lg shadow-md py-4 px-8 justify-between md:items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default HeaderBar;
