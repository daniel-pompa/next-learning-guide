'use client';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/store';
import { TbPokeball } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const WidgetsGrid = () => {
  const cartItemCount = useAppSelector(state => state.counter.value);
  const favoritePokemons = useAppSelector(state => state.pokemons.favorites);
  const favoritePokemonCount = Object.keys(favoritePokemons).length;

  return (
    <div className='flex flex-wrap items-center justify-center mt-10'>
      <SimpleWidget
        title='Items in cart'
        subtitle='Server and client side rendering'
        count={`${cartItemCount}`}
        icon={<AiOutlineShoppingCart size={50} className='text-blue-500' />}
        href='/dashboard/counter'
      />
      <SimpleWidget
        title='Favorite Pokémon'
        subtitle='Global state'
        count={`${favoritePokemonCount}`}
        icon={<TbPokeball size={50} className='text-blue-500' />}
        href='/dashboard/pokemons'
      />
    </div>
  );
};
