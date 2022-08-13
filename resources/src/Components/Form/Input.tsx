import React from 'react';
import { DefProps } from '@/@types/Global';
import { InputHTMLAttributes } from 'react';
import ErrorStatus from '@@/Misc/ErrorStatus';

type InputTypes =
  | 'text'
  | 'textarea'
  | 'file'
  | 'password'
  | 'email'
  | 'number'
  | 'datetime';

interface Props extends DefProps, InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes;
  name: string;
  progress?: any;
  label?: string;
}

const Input = ({
  type,
  name,
  label,
  progress,
  className = '',
  ...attr
}: Props) => {
  const input = getInputTag(type, name, attr, progress, className);

  return (
    <div
      className={`flex flex-col justify-center items-start min-w-[10ch] input-container mb-2 [&+.input-container]:mb-4 ${className}`}
    >
      <label htmlFor={name} className="label capitalize flex w-full gap-2">
        {label}
        {attr.required && (
          <span className="text-red-500 text-xl mt-2 mr-auto">*</span>
        )}
      </label>

      {input}

      <ErrorStatus name={name} />
    </div>
  );
};

function getInputTag(
  type: InputTypes,
  name: string,
  attr: any,
  progress?: any,
  className = ''
) {
  if (type === 'file') {
    return (
      <>
        <input
          {...attr}
          type="file"
          name={name}
          id={name}
          className={`w-full text-base focus:outline-none focus:border-gray-500 ${className}`}
        />
        {progress && (
          <progress value={progress.percentage} max="100">
            {progress.percentage}%
          </progress>
        )}
      </>
    );
  } else if (type === 'textarea') {
    return (
      <textarea
        name={name}
        className={`textarea textarea-bordered h-24 border-2 border-solid input-md w-full text-base focus:outline-none
          focus:border-gray-500 ${className}`}
        {...attr}
      ></textarea>
    );
  }

  return (
    <input
      {...attr}
      type={type}
      name={name}
      id={name}
      className={`input input-bordered border-2 border-solid input-md w-full text-base focus:outline-none
    focus:border-gray-500 ${className}`}
    />
  );
}

export default Input;
