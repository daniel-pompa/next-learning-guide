'use client';
import { useState } from 'react';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';

interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const [count, setCount] = useState(value);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className='relative bg-white rounded shadow-lg p-5 w-full min-h-40'>
      <div className='absolute top-[-20px] left-[20px] bg-blue-500 rounded-md p-4 shadow-xl'>
        <FaShoppingCart className='text-slate-50' size={24} />
      </div>
      <div className='flex items-center justify-between mt-20'>
        <button
          onClick={decrement}
          className='rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold p-3'
        >
          <FaMinus />
        </button>
        <span className='text-3xl'>{count}</span>
        <button
          onClick={increment}
          className='rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold p-3'
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
