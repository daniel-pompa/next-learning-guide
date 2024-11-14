import { Metadata } from 'next';
import { CartCounter } from '@/shopping-cart';

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Interactive counter displaying the number of items in the shopping cart',
};

export default function Counter() {
  return (
    <div className='container-page'>
      <h1>Shopping cart</h1>
      <CartCounter value={0} />
    </div>
  );
}
