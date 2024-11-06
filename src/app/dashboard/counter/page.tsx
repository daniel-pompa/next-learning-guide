import { CartCounter } from '@/app/shopping-cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Interactive counter displaying the number of items in the shopping cart'
};

export default function CounterPage() {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <h1 className='text-2xl md:text-4xl text-slate-800 mb-20'>
        Products in the shopping cart
      </h1>
      <CartCounter value={0} />
    </div>
  );
}
