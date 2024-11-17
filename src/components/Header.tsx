'use client';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { RiNextjsFill } from 'react-icons/ri';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => {
      const newState = !prevState;
      const sidebarElement = document.getElementById('sidebar');
      if (sidebarElement) {
        sidebarElement.classList.toggle('hidden', !newState);
      }
      return newState;
    });
  };

  return (
    <header className='bg-slate-900 text-white p-4 flex items-center fixed top-0 left-0 w-full z-50'>
      <RiNextjsFill className='w-14 h-14' />
      <span className='text-lg md:text-2xl font-bold ml-2'>Next.js Learning Guide</span>
      <div className='flex-1'></div>
      <button
        onClick={toggleSidebar}
        className='p-2 rounded-full hover:bg-slate-800 transition-colors duration-200'
        aria-label={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      >
        {isSidebarOpen ? (
          <FiX size={24} className='text-white' />
        ) : (
          <FiMenu size={24} className='text-white' />
        )}
      </button>
    </header>
  );
};
