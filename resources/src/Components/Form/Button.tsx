import { DefProps } from '@/@types/global';
import React, { ButtonHTMLAttributes } from 'react';


interface Props extends DefProps, ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonLink = ({ label, className = '', ...attr }: Props) => {
  return (
    <button
      {...attr}
      className={`btn btn-primary btn-md capitalize flex items-center ${className}`}
    >
      <span>{label}</span>
    </button >

  );
};
export default ButtonLink;
