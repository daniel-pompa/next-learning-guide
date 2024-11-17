import Link from 'next/link';
import Image from 'next/image';
import { RxDashboard } from 'react-icons/rx';
import { Bs1SquareFill, Bs2SquareFill } from 'react-icons/bs';
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
    icon: <Bs1SquareFill size={40} />,
    title: 'Counter',
    subtitle: 'Counter client side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <Bs2SquareFill size={40} />,
    title: 'Pokemons',
    subtitle: 'Static generation',
  },
];

export const Sidebar = () => {
  return (
    <aside
      id='sidebar'
      className='bg-slate-900 text-slate-300 w-full md:w-[400px] h-full fixed left-0 md:relative hidden z-20'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
          <span>Dashboard</span>
          <span className='text-blue-500'>8</span>
        </h1>
        <p className='text-slate-400 mt-2'>Manage your actions and activities</p>
      </div>
      <div id='profile' className='px-6 py-4'>
        <p className='text-slate-400 mb-2'>Welcome back,</p>
        <Link href='#' className='inline-flex space-x-2 items-center'>
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
          <span className='font-bold'>John Doe</span>
        </Link>
      </div>
      <nav id='nav' className='w-full px-6'>
        {menuItems.map(item => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </nav>
    </aside>
  );
};
