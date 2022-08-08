import React from "react";
import { DefProps } from "@/@types/global"
import { InputHTMLAttributes } from "react";
import { usePage } from "@inertiajs/inertia-react";


interface Props extends DefProps, InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'textarea' | 'file' | 'password' | 'email';
  name: string;
  label: string;
}

const Input = (
  { type, name, label, className = '', ...attr }: Props
) => {

  const $ = usePage().props.errors;
  const input = getInputTag(type, name, attr, className);

  let error: string = '';
  if ($[name] !== undefined) error = $[name];

  return (
    <div className="input-container mb-2 [&+.input-container]:mb-4">

      <label htmlFor={name} className="label capitalize">
        {label}
      </label>
      {input}

      {error &&
        <div className="mt-2">
          <span className="ml-4 text-red-500">* {error}</span>
        </div>
      }

    </div >

  )
}

function getInputTag(type: string, name: string, attr: any, className = '') {
  if (type === 'file') {
    return (
      <input
        {...attr}
        type={type}
        name={name}
        id={name}
        className={`w-full text-base focus:outline-none focus:border-gray-500 ${className}`}
      />
    )
  }
  else if (type === 'textarea') {
    return (
      <textarea name={name}
        className={`textarea textarea-bordered h-24 border-2 border-solid input-md w-full text-base focus:outline-none
          focus:border-gray-500 ${className}`}
      ></textarea>
    )
  } else {
    return (
      <input
        {...attr}
        type={type} name={name} id={name}
        className={`input input-bordered border-2 border-solid input-md w-full text-base focus:outline-none
    focus:border-gray-500 ${className}`}
      />
    )
  }
}

export default Input
