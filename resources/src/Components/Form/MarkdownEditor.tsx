import React from 'react';
import { DefProps } from '@/@types/Global';
import ErrorStatus from '@@/Misc/ErrorStatus';
import MDEditor, { MDEditorProps } from '@uiw/react-md-editor';

interface Props extends DefProps, MDEditorProps {
  name: string;
  value: string;
  label?: string;
  required?: boolean;
}

const MarkdownEditor = ({
  label,
  name,
  required,
  value,
  className = '',
  ...attr
}: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-start min-w-[10ch] input-container mb-2 [&+.input-container]:mb-4 ${className}`}
    >
      <label htmlFor={name} className="label capitalize flex w-full gap-2">
        {label}
        {required && (
          <span className="text-red-500 text-xl mt-2 mr-auto">*</span>
        )}
      </label>

      <div className="block mt-1 w-full">
        <MDEditor value={value} preview="edit" {...attr} />
        <MDEditor.Markdown
          source={value}
          className="mt-2 p-4 px-8 overflow-y-scroll max-h-96"
        />
      </div>

      <ErrorStatus name={name} />
    </div>
  );
};

export default MarkdownEditor;
