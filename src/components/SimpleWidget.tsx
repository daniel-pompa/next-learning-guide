import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface WidgetProps {
  title: string;
  subtitle?: string;
  count: string | number;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({ title, subtitle, count, icon, href }: WidgetProps) => {
  return (
    <div className='bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-xl py-6 px-4 sm:min-w-80 min-w-full rounded-lg border border-slate-200 mx-3 mb-5 md:mb-0'>
      <div className='flex flex-col items-center space-y-4'>
        {/* Icon */}
        <div className='bg-blue-100 p-3 rounded-full shadow-md'>{icon}</div>
        {/* Title, subtitle and count */}
        <div className='text-center'>
          <h2 className='text-blue-600'>{title}</h2>
          {subtitle && <p className='text-slate-500'>{subtitle}</p>}
          <p className='text-2xl md:text-3xl'>{count}</p>
        </div>
      </div>
      {/* Link */}
      {href && (
        <div className='text-right'>
          <Link
            href={href}
            className='text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors hover:underline inline-flex items-center'
          >
            More <FaArrowRight size={10} className='ml-1' />
          </Link>
        </div>
      )}
    </div>
  );
};
