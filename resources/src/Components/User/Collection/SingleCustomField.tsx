import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import Checkbox from '@@/Form/Checkbox';
import { TiTimes } from 'react-icons/ti';
import { DefProps } from '@/@types/Global';
import SelectDropDown from '@@/Form/Select';
import { CustomField } from '@/@types/Models';
import ErrorStatus from '@@/Misc/ErrorStatus';
import React, { ChangeEvent, useCallback } from 'react';

interface Props extends DefProps {
  field: CustomField;
  keyName: string;
  index: number;
  data: any;
  setData: any;
}

const TypeList = [
  { value: 'text', label: 'Single-line' },
  { value: 'textarea', label: 'Multi-line' },
  { value: 'number', label: 'Integer' },
  { value: 'checkbox', label: 'Boolean' },
  { value: 'datetime', label: 'Date & Time' },
];

const SingleCustomField = ({
  field,
  keyName,
  data,
  setData,
  index,
  className = '',
}: Props) => {
  const updateData = useCallback(
    (key: string, value: any) => {
      const prev = data[keyName] as CustomField[];
      const update = prev.map((f) =>
        f.id !== field.id ? f : { ...f, [key]: value }
      );
      setData(keyName, update);
    },
    [data]
  );

  const handleTitleInput = (
    e: ChangeEvent<HTMLInputElement>,
    field: CustomField
  ) => updateData('label', e.target.value);

  const handleNameInput = (
    e: ChangeEvent<HTMLInputElement>,
    field: CustomField
  ) => updateData('name', e.target.value);

  const handleTypeInput = (e: any, field: CustomField) =>
    updateData('type', e.value.trim());

  const handleStateInput = (
    e: ChangeEvent<HTMLInputElement>,
    field: CustomField
  ) => updateData('required', e.target.checked);

  const handleRemoveField = (
    e: React.MouseEvent<HTMLButtonElement>, field: CustomField
  ) => {
    const prev = data[keyName] as CustomField[];
    const update = prev.filter((f) => f.id !== field.id);
    setData(keyName, update);
  }

  return (
    <div className={`w-full my-4 ${className}`}>
      <div className="flex w-full justify-between items-center">
        <span className='font-semibold'>
          {`Field #${index + 1}`}
        </span>
        <Button
          type='button'
          onClick={(e) => handleRemoveField(e, field)}
          className='btn-xs btn-outline btn-error'
        >
          <TiTimes />
        </Button>
      </div>
      <Input
        type="text"
        placeholder="Title"
        value={field.label}
        name={`${field.id}.field.label`}
        onChange={(e) => handleTitleInput(e, field)}
      />
      <Input
        type="text"
        placeholder="Field name"
        value={field.name}
        name={`${field.id}.field.name`}
        onChange={(e) => handleNameInput(e, field)}
      />
      <SelectDropDown
        name={`${field.id}.field.select`}
        options={TypeList}
        onChange={(e) => handleTypeInput(e, field)}
      />
      <Checkbox
        label="Required?"
        checked={field.required}
        name={`${field.id}.field.checkbox`}
        onChange={(e) => handleStateInput(e, field)}
      />

      <ErrorStatus name={`fields.${index}.id`} />
      <ErrorStatus name={`fields.${index}.name`} />
      <ErrorStatus name={`fields.${index}.type`} />
    </div>
  );
};

export default SingleCustomField;
