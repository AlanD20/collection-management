import React, { useEffect, useState } from "react"
import { UsePage } from "@/@types/Global";
import { usePage } from "@inertiajs/inertia-react";


const Status = () => {

  const $ = usePage<UsePage>().props;

  const [status, setStatus] = useState<string>('');

  // const [status, setStatus] = useState<string>('hello therhello therhello therhello ther hello therhello therhello therhello therhello therhello therhello therhello thertherhello therhello ther hello therhtherhello therhello ther hello therhtherhello therhello ther hello therhtherhello therhello ther hello therh');

  useEffect(() => {

    let timer: NodeJS.Timeout;

    if ($?.status) {
      setStatus($.status)
      timer = setTimeout(() => setStatus(''), 2000);
    }
    return () => void clearTimeout(timer);

  }, [$?.status]);

  return (
    <>
      {status &&
        <div className="sticky bottom-8 w-full z-20">
          <div className="alert alert-success flex items-start w-[60ch] min-w-[20ch] mx-auto justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="capitalize">{status}</span>
          </div>
        </div>
      }
    </>
  )
}
export default Status
