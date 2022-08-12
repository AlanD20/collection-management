import Input from '@@/Form/Input';
import Checkbox from '@@/Form/Checkbox';
import { DefProps } from '@/@types/Global';
import React, { useCallback } from 'react';
import { CustomField } from '@/@types/Models';
import { DayPicker } from 'react-day-picker';

interface Props extends DefProps {
  field: CustomField;
  data: any;
  setData: any;
  keyName: string;
}

const RenderCustomField = ({
  field,
  data,
  setData,
  keyName,
  className = '',
}: Props) => {
  const getData = useCallback(() => {
    const fields = data[keyName];
    const date = fields.find((f: any) => f.id === field.id);
    console.log(date);

    return date.value !== 'undefined' ? date.value : new Date();
  }, [data]);

  const updateData = useCallback(
    (value: any) => {
      const prev = data[keyName];
      const update = prev.map((f: any) =>
        f.id !== field.id ? f : { ...f, value }
      );
      setData(keyName, update);
    },
    [data]
  );

  return (
    <div className={`w-full my-4 ${className}`}>
      {/* <DatePicker /> */}

      {field.type !== 'checkbox' &&
        React.createElement(Input, {
          type: field.type,
          required: field.required,
          name: field.name,
          label: field.label,
          onChange: (e) => updateData(e.target.value),
        })}
      {field.type === 'datetime' &&
        React.createElement(DayPicker, {
          mode: 'single',
          fromYear: 1000,
          toYear: 3000,
          captionLayout: 'dropdown',
          selected: getData(),
          onSelect: updateData,
        })}
      {field.type === 'checkbox' &&
        React.createElement(Checkbox, {
          required: field.required,
          name: field.name,
          label: field.label,
          onChange: (e) => updateData(e.target.checked),
        })}

      {/* <ErrorStatus name={`fields.${index}.id`} /> */}
    </div>
  );
};

export default RenderCustomField;
