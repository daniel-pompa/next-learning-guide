'use client';
import { FaShoppingCart } from 'react-icons/fa';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
  const isCart = useAppSelector(state => state.counter.value);

  return (
    <div className='flex flex-wrap items-center justify-center mt-10'>
      <SimpleWidget
        title={`${isCart}`}
        subtitle='Interactive counter'
        label='Items in cart'
        icon={<FaShoppingCart size={50} className='text-blue-500' />}
        href='/dashboard/counter'
      />
    </div>
  );
};
