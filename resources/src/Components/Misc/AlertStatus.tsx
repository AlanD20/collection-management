import React, { useEffect, useState } from 'react';
import { UsePage } from '@/@types/Global';
import { usePage } from '@inertiajs/inertia-react';
import { alertStore } from '@/common/store';

const AlertStatus = () => {
  const { status: $, ts } = usePage<UsePage>().props;

  const status = alertStore((state) => state);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if ($.error || $.success) {
      status.setStatus($);
      timer = setTimeout(() => status.clearStatus(), 2000);
    }
    return () => void clearTimeout(timer);
  }, [ts]);

  if (!status.error && !status.success) return null;

  if (status.error) {
    return (
      <div className="toast toast-center z-20">
        <div className="alert alert-error flex items-start w-[60ch] min-w-[20ch] mx-auto justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="capitalize">{status.error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="toast toast-center z-20">
      <div className="alert alert-success flex items-start w-[60ch] min-w-[20ch] mx-auto justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="capitalize">{status.success}</span>
      </div>
    </div>
  );
};
export default AlertStatus;
