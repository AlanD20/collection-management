import { DefProps } from '@/@types/Global';
import { usePage } from '@inertiajs/inertia-react';
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
  const $ = usePage().props.errors;
  let error: string = '';
  if ($[name] !== undefined) error = $[name];

  return (
    <>
      <label
        className={`label cursor-pointer flex w-max gap-4 items-center ${parentClass}`}
      >
        <input
          {...attr}
          type="checkbox"
          name={name}
          className={`checkbox checkbox-primary ${className}`}
        />

        <span className={`label-text ${labelClass}`}>
          {label ? label : children}
        </span>
      </label>
      {error && (
        <div className="mt-2">
          <span className="ml-4 text-red-500">* {error}</span>
        </div>
      )}
    </>
  );
};
export default Checkbox;
