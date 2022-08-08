import { usePage } from '@inertiajs/inertia-react';
import React from 'react';

interface Props {}

const AlertStatus = ({}: Props) => {
  const $ = usePage().props.errors;

  return (
    <div className="alert-status alert alert-success w-max mb-8">
      <span>STATUSSSS</span>
    </div>
  );
};
export default AlertStatus;
