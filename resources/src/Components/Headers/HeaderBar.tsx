import React from 'react';
import { Children, DefProps } from '@/@types/Global';

interface Props extends DefProps, Children {}

const HeaderBar = ({ children, hideWhen = false, className = '' }: Props) => {
  if (hideWhen) return null;

  return (
    <div
      className={`navbar bg-base-100 my-4 flex-col items-stretch gap-4 rounded-lg shadow-md py-4 px-8 justify-between lg:flex-row lg:items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default HeaderBar;
