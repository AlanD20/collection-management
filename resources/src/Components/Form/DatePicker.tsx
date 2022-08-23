import React, { memo } from 'react';
import { Children, DefProps } from '@/@types/Global';
import { DayPicker, DayPickerSingleProps } from 'react-day-picker';

interface Props extends DefProps, Children, Omit<DayPickerSingleProps, 'mode'> {
  label?: string;
}

const DatePicker = ({ label, children, className = '', ...attr }: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-start capitalize ${className}`}
    >
      <label className="flex w-full gap-2 items-center">
        {label ? label : children}
        {attr.required && <span className="text-red-500 text-xl mt-2">*</span>}
      </label>

      <DayPicker
        fromYear={1000}
        toYear={3000}
        defaultMonth={attr.selected}
        captionLayout="dropdown"
        {...attr}
        mode="single"
      />
    </div>
  );
};

export default memo(DatePicker);
