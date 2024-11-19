import React from 'react';
import Link from 'next/link';

interface SimpleWidgetProps {
  title: string;
  subtitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  title,
  subtitle,
  label,
  icon,
  href,
}: SimpleWidgetProps) => {
  return (
    <div className='bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full rounded-lg border-1 border-slate-50 mx-2'>
      <div className='flex flex-col'>
        {label && (
          <div>
            <h2 className='text-slate-600 text-center'>{label}</h2>
          </div>
        )}
        <div>
          <div className='flex flex-row items-center justify-center space-x-1'>
            {icon}
            <div id='temp' className='text-center mt-4'>
              <h2>{title}</h2>
              {subtitle && <p className='text-slate-500'>{subtitle}</p>}
            </div>
          </div>
        </div>
        {href && (
          <div className='w-full place-items-end text-right border-t-2 border-slate-100 mt-2'>
            <Link href={href} className='text-blue-500 text-xs font-medium'>
              More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
