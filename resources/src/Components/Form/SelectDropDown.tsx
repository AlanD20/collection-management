import React from 'react';
import Select from 'react-select';
import ErrorStatus from '@@/Misc/ErrorStatus';
import type { StateManagerProps } from 'react-select/dist/declarations/src/stateManager';

interface Props extends StateManagerProps {
  name: string;
  label?: string;
  required?: boolean;
}

const SelectDropDown = ({ name, label, required, ...attr }: Props) => {
  return (
    <div className={`w-full flex flex-col justify-center items-start gap-2 ${attr.className}`}>
      <label htmlFor={name} className="label capitalize whitespace-nowrap">
        {label}
      </label>
      <div className="flex w-full gap-2">
        <Select
          {...attr}
          className="block mt-1 w-full"
          name={name}
          closeMenuOnSelect
        />
        {required && <span className="text-red-500 text-xl mt-2">*</span>}
      </div>

      <ErrorStatus name={name} />
    </div>
  );
};
export default SelectDropDown;
