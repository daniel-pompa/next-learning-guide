'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import { IoHeartDislikeCircle } from 'react-icons/io5';
import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';

export const FavoritePokemon = () => {
  const favorites = useAppSelector(state => state.pokemons.favorites);
  const favoritePokemon = useMemo(() => Object.values(favorites || {}), [favorites]);

  return favoritePokemon.length > 0 ? (
    <PokemonGrid pokemons={favoritePokemon} />
  ) : (
    <NoFavorites />
  );
};

export const NoFavorites = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full px-4'>
      <IoHeartDislikeCircle size={100} className='text-red-500' />
      <h2 className='mt-5'>No favorites yet</h2>
      <p className='text-gray-600 mt-2 text-center'>
        You haven&#39;t added any Pokémon to your favorites yet. Start exploring and add
        your favorites to keep them handy!
      </p>
      <Link
        className='mt-6 px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md'
        href='/dashboard/pokemons'
      >
        Explore Pokémon
      </Link>
    </div>
  );
};
