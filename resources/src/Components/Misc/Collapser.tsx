import React from 'react';
import { Children, DefProps } from '@/@types/Global';

interface Props extends DefProps, Children {
  title: string;
}

const Collapser = ({ title, children, className = '' }: Props) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <input type="checkbox" className="peer" />
      <div className="collapse-title w-full bg-base-100">
        <h1 className="font-bold capitalize">{title}</h1>
      </div>
      <div className={`collapse-content mt-4 ${className}`}>{children}</div>
    </div>
  );
};
export default Collapser;
