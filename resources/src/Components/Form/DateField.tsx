import React from 'react';
import ErrorStatus from '@@/Misc/ErrorStatus';
import { Children, DefProps } from '@/@types/Global';
import DatePicker, { DatePickerProps } from 'react-date-picker';

interface Props extends DefProps, Children, Omit<DatePickerProps, 'className'> {
  label?: string;
  name: string;
}

const DateField = ({
  label,
  name,
  children,
  className = '',
  ...attr
}: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-start capitalize ${className}`}
    >
      <label className="flex w-full gap-2 items-center">
        {label ? label : children}
        {attr.required && <span className="text-red-500 text-xl mt-2">*</span>}
      </label>

      <DatePicker
        {...attr}
        {...(attr.required && { required: true })}
        name={name}
        value={attr.value}
        onChange={attr.onChange}
      />

      <ErrorStatus name={name} />
    </div>
  );
};

export default DateField;
