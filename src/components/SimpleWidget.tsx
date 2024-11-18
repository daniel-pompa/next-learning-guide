import { IoApps } from 'react-icons/io5';

export const SimpleWidget = () => {
  return (
    <div className='bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full rounded-lg border-1 border-slate-50 mx-2'>
      <div className='flex flex-col'>
        <div>
          <h2 className='font-bold text-slate-600 text-center'>Counter</h2>
        </div>
        <div>
          <div className='flex flex-row items-center justify-center space-x-1'>
            <div id='icon'>
              <IoApps size={50} className='text-blue-500' />
            </div>
            <div id='temp' className='text-center mt-4'>
              <h3>Title</h3>
              <p className='text-xs text-slate-500'>Subtitle</p>
            </div>
          </div>
        </div>

        <div className='w-full place-items-end text-right border-t-2 border-slate-100 mt-2'>
          <a href='#' className='text-indigo-600 text-xs font-medium'>
            More
          </a>
        </div>
      </div>
    </div>
  );
};
