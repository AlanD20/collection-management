import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

interface Props {
  name: string;
}

const ErrorStatus = ({ name }: Props) => {
  const $ = usePage().props.errors;

  let error: string = '';
  if ($[name] !== undefined) error = $[name];

  return (
    <>
      {error && (
        <div className="mt-2">
          <span className="ml-4 text-red-500">* {error}</span>
        </div>
      )}
    </>
  );
};

export default ErrorStatus;
