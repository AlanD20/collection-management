import React, { ReactNode } from 'react';
import { DefProps } from '@/@types/Global';

interface Props extends DefProps {
  label: string;
  provider: string;
  icon?: ReactNode | JSX.Element;
}

const LoginWith = ({ label, icon, provider, className = '' }: Props) => {
  return (
    <a
      href={route('auth.login_with', { provider })}
      className={`btn w-full ${className}`}
    >
      <div className="flex gap-4 items-center justify-center">
        {icon}
        {label}
      </div>
    </a>
  );
};

export default LoginWith;
