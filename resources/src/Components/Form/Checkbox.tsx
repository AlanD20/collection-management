import { DefProps } from '@/@types/Global';
import ErrorStatus from '@@/Misc/ErrorStatus';
import React, { InputHTMLAttributes } from 'react';

interface Props extends DefProps, InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  parentClass?: string;
  labelClass?: string;
}

const Checkbox = ({
  name,
  label,
  children,
  parentClass = '',
  labelClass = '',
  className = '',
  ...attr
}: Props) => {
  return (
    <>
      <label
        className={`label cursor-pointer flex w-max gap-4 items-center capitalize ${parentClass}`}
      >
        <input
          {...attr}
          type="checkbox"
          name={name}
          className={`checkbox checkbox-primary ${className}`}
        />

        <span
          className={`label-text capitalize flex w-full gap-2 items-center ${labelClass}`}
        >
          {label ? label : children}
          {attr.required && (
            <span className="text-red-500 text-xl mt-2">*</span>
          )}
        </span>
      </label>

      <ErrorStatus name={name} />
    </>
  );
};
export default Checkbox;
