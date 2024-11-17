'use client';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='bg-slate-100 w-full px-2 md:px-16 h-screen flex items-center justify-center'>
      <div className='bg-white border border-slate-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl'>
        <p className='text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-slate-300'>
          500
        </p>
        <p className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-slate-500 mt-4'>
          Server Error
        </p>
        <p className='text-slate-500 mt-8 py-2 border-y-2 text-center'>
          Whoops, something went wrong on our servers.
        </p>
      </div>
    </div>
  );
}
