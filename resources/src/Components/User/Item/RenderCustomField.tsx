import React from 'react';
import Input from '@@/Form/Input';
import format from 'date-fns/format';
import Checkbox from '@@/Form/Checkbox';
import DateField from '@@/Form/DateField';
import { DefProps } from '@/@types/Global';
import { CustomField } from '@/@types/Models';
import ErrorStatus from '@@/Misc/ErrorStatus';

interface Props extends DefProps {
  field: CustomField;
  data: any;
  setData: any;
  keyName: string;
  index: number;
}

const RenderCustomField = ({
  field,
  data,
  setData,
  keyName,
  index,
  className = '',
}: Props) => {
  const getDate = (): Date | undefined => {
    const fields = data[keyName];
    const value = fields.find((f: any) => f.id === field.id).value;
    if (!value) return value;
    return new Date(format(new Date(value), 'y-MM-dd'));
  };

  const updateData = (value: any) => {
    const prev = data[keyName];
    let update = prev.map((f: any) =>
      f.id !== field.id ? f : { ...f, value }
    );

    setData(keyName, update);
  };

  let component;

  if (field.type === 'checkbox') {
    component = React.createElement(Checkbox, {
      required: field.required,
      name: field.name,
      label: field.label,
      checked: field.value,
      onChange: (e) => updateData(e.target.checked),
    });
  } else if (field.type === 'datetime') {
    component = React.createElement(DateField, {
      required: field.required,
      label: field.label,
      name: field.name,
      value: getDate(),
      onChange: updateData,
    });
  } else {
    component = React.createElement(Input, {
      type: field.type,
      required: field.required,
      name: field.name,
      value: field.value,
      label: field.label,
      onChange: (e) => updateData(e.target.value),
    });
  }

  return (
    <div className={`w-full my-4 ${className}`}>
      {component}

      <ErrorStatus name={`fields.${index}.id`} />
      <ErrorStatus name={`fields.${index}.label`} />
      <ErrorStatus name={`fields.${index}.name`} />
      <ErrorStatus name={`fields.${index}.type`} />
      <ErrorStatus name={`fields.${index}.value`} />
    </div>
  );
};

export default RenderCustomField;
