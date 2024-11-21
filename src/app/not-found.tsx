import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='bg-slate-100 w-full px-2 md:px-16 h-screen flex items-center justify-center'>
      <div className='bg-white border border-slate-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl'>
        <p className='text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-slate-300'>
          404
        </p>
        <p className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-slate-500 mt-4'>
          Page Not Found
        </p>
        <p className='text-slate-500 mt-8 py-2 border-y-2 text-center'>
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          href='/dashboard/main'
          className='mt-8 bg-blue-700 hover:bg-blue-800 text-slate-50 font-bold py-2 px-4 rounded'
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
}
