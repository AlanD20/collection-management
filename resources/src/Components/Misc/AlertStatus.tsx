import React, { useEffect, useState } from 'react';
import { UsePage } from '@/@types/Global';
import { usePage } from '@inertiajs/inertia-react';

const AlertStatus = () => {
  const $ = usePage<UsePage>().props.status;

  const [status, setStatus] = useState<string>('');

  // const [status, setStatus] = useState<string>('hello therhello therhello therhello ther hello therhello therhello therhello therhello therhello therhello therhello thertherhello therhello ther hello therhtherhello therhello ther hello therhtherhello therhello ther hello therhtherhello therhello ther hello therh');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if ($) {
      if ($.success) setStatus($.success);
      else if ($.error) setStatus($.error);
      timer = setTimeout(() => setStatus(''), 2000);
    }
    return () => void clearTimeout(timer);
  }, [$.success, $.error]);

  if (!$.error && !$.success) return null;

  if ($.error) {
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
          <span className="capitalize">{status}</span>
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
        <span className="capitalize">{status}</span>
      </div>
    </div>
  );
};
export default AlertStatus;
