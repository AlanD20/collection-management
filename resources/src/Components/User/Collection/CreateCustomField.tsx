import { nanoid } from 'nanoid';
import Button from '@@/Form/Button';
import { IoMdAdd } from 'react-icons/io';
import { CustomField } from '@/@types/Models';
import React, { ChangeEvent, useEffect } from 'react';
import SingleCustomField from './SingleCustomField';

interface Props {
  data: any;
  setData: any;
  keyName: string;
}

const CreateCustomField = ({ keyName, data, setData }: Props) => {
  const handleAddField = () => {
    const prev = data[keyName];
    setData(keyName, [
      ...prev,
      {
        id: nanoid(14),
        label: '',
        name: '',
        type: '',
        required: false,
      },
    ]);
  };

  return (
    <div className="w-full mb-8">
      <Button type="button" onClick={handleAddField} className="w-full">
        <IoMdAdd />
      </Button>

      <div className="form-control w-full items-center justify-center">
        {data[keyName] !== undefined &&
          (data[keyName] as CustomField[]).map((field, i) => (
            <SingleCustomField
              key={field.id}
              keyName={keyName}
              data={data}
              setData={setData}
              field={field}
              index={i}
            />
          ))}
      </div>
    </div>
  );
};

export default CreateCustomField;
