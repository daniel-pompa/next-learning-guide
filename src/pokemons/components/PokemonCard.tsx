'use client';
import Link from 'next/link';
import { Pokemon } from '../interfaces/pokemon';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemons/pokemonsSlice';
import { ImageWithFallback } from '@/components';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className='mx-auto mt-6 w-60 h-80'>
      <div className='bg-white rounded overflow-hidden shadow-lg'>
        <div className='flex flex-col items-center justify-centertext-center p-6 bg-slate-800 border-b'>
          <ImageWithFallback
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
            className='w-24 h-24'
          />
          <p className='pt-2 text-lg font-semibold text-slate-50 capitalize'>{name}</p>
          <div className='mt-5'>
            <Link
              href={`/dashboard/pokemons/${name}`}
              className='border rounded-full py-2 px-4 text-xs font-semibold text-slate-100'
            >
              View details
            </Link>
          </div>
        </div>
        <div className='border-b'>
          <div
            className='px-4 py-2 hover:bg-slate-100 flex items-center cursor-pointer'
            onClick={handleToggleFavorite}
          >
            <div className='text-red-600'>
              {isFavorite ? <IoHeart size={24} /> : <IoHeartOutline size={24} />}
            </div>
            <div className='pl-3'>
              <p className='text-slate-800 leading-none mt-2'>
                {isFavorite ? 'Is a favorite' : 'Not a favorite'}
              </p>
              {isFavorite ? (
                <p className='text-sm text-slate-500'>Remove from favorites</p>
              ) : (
                <p className='text-sm text-slate-500'>Add to favorites</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
