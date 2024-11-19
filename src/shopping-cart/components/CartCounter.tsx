'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { decrement, increment, initCounterState } from '@/store/counter/counterSlice';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';

interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [value, dispatch]);

  return (
    <div className='relative bg-slate-50 rounded-xl shadow-xl p-6 max-w-md mx-auto min-h-48 border border-slate-200'>
      {/* Shopping cart */}
      <div className='absolute -top-5 right-5 bg-blue-500 rounded-md p-4 shadow-lg shadow-blue-500 flex items-center justify-center'>
        <FaShoppingCart className='text-slate-50' size={24} />
        {count > 0 && (
          <span className='absolute top-0 right-0 bg-red-500 text-slate-50 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-2 -translate-y-2'>
            {count}
          </span>
        )}
      </div>
      {/* Counter */}
      <div className='flex items-center justify-center space-x-8 mt-6'>
        <button
          onClick={() => dispatch(decrement())}
          className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-slate-50'
        >
          <FaMinus />
        </button>
        <span className='text-xl md:text-4xl text-slate-800'>{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-slate-50'
        >
          <FaPlus />
        </button>
      </div>
      {/* Checkout button */}
      <div className='mt-6 text-center'>
        <button className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-slate-50 rounded-md w-full font-semibold'>
          Checkout
        </button>
      </div>
    </div>
  );
};
