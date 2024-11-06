import Image from 'next/image';
import { RxDashboard } from 'react-icons/rx';
import { SiTypescript } from 'react-icons/si';
import { SidebarMenuItem } from '.';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <RxDashboard size={40} />,
    title: 'Dashboard',
    subtitle: 'Data overview',
  },
  {
    path: '/dashboard/counter',
    icon: <SiTypescript size={40} />,
    title: 'Counter',
    subtitle: 'Counter client side',
  },
];

export const Sidebar = () => {
  return (
    <div
      id='sidebar'
      className='bg-slate-900 w-full md:w-[400px] left-0 overflow-y-auto fixed md:relative hidden h-full z-20 text-slate-300'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
          <span>Dashboard</span>
          <span className='text-blue-500'>8</span>
        </h1>
        <p className='text-slate-400 mt-2 text-sm md:text-base'>
          Manage your actions and activities
        </p>
      </div>
      <div id='profile' className='px-6 py-8'>
        <p className='text-slate-400 mb-2'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              rel='preload'
              src='/avatar.png'
              width={50}
              height={50}
              alt='User avatar'
              className='rounded-full max-w-[50px] max-h-[50px]'
            />
          </span>
          <span className='text-sm md:text-base font-bold'>John Doe</span>
        </a>
      </div>
      <div id='nav' className='w-full px-6'>
        {menuItems.map(item => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
