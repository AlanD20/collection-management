import React from 'react';
import { DefProps } from '@/@types/Global';
import { CustomField } from '@/@types/Models';

interface Props extends DefProps {
  field: CustomField;
}

const RenderCustomFieldValue = ({ field, className = '' }: Props) => {
  let value;

  if (field.type === 'checkbox') {
    return (
      <div className={`flex gap-4 items-center w-full my-4 ${className}`}>
        <span className='capitalize'>{field.label}</span>
        <span>
          <i
            className={`text-lg fas fa-${field.value ? 'check' : 'times'}`}
          ></i>
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-2 w-full my-4 ${className}`}>
      <span className='capitalize'>{field.label}</span>
      <p>{field.value}</p>
    </div>
  );
};

export default RenderCustomFieldValue;
