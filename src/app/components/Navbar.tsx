'use client';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { RiNextjsFill } from 'react-icons/ri';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  useEffect(() => {
    const sidebarElement = document.getElementById('sidebar');
    if (sidebarElement) {
      // Add or remove the class 'hidden' based on isSidebarOpen
      sidebarElement.classList.toggle('hidden', !isSidebarOpen);
    }
  }, [isSidebarOpen]); // Runs every time isSidebarOpen changes

  return (
    <div className='bg-slate-900 text-white p-4 flex items-center'>
      <RiNextjsFill className='w-12 h-12' />
      <h1 className='text-xl font-bold ml-2'>Next.js Learning Guide</h1>
      <div className='flex-1'></div>
      {/* Sidebar toggle button */}
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
    </div>
  );
};
