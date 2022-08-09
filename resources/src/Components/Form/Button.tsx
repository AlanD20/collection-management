import { DefProps } from '@/@types/Global';
import React, { ButtonHTMLAttributes } from 'react';

interface Props extends DefProps, ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button = ({ label, className = '', ...attr }: Props) => {
  return (
    <button
      {...attr}
      className={`btn capitalize flex items-center ${className}`}
    >
      {label ? <span>{label}</span> : attr.children}
    </button>
  );
};
export default Button;
