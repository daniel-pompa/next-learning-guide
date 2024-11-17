import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '../interfaces/pokemon';
import { IoHeartOutline } from 'react-icons/io5';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;

  return (
    <div className='mx-auto mt-2 w-60 h-80'>
      <div className='bg-white rounded overflow-hidden shadow-lg'>
        <div className='flex flex-col items-center justify-centertext-center p-6 bg-slate-800 border-b'>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
            priority={false}
            className='w-24 h-24'
          />
          <p className='pt-2 text-lg font-semibold text-slate-50 capitalize'>{name}</p>
          <div className='mt-5'>
            <Link
              href={`/dashboard/pokemon/${id}`}
              className='border rounded-full py-2 px-4 text-xs font-semibold text-slate-100'
            >
              View details
            </Link>
          </div>
        </div>
        <div className='border-b'>
          <Link
            href='/dashboard/main'
            className='px-4 py-2 hover:bg-slate-100 flex items-center'
          >
            <div className='text-red-600'>
              <IoHeartOutline size={24} />
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-slate-800 leading-none'>
                Not a favorite
              </p>
              <p className='text-xs text-slate-500'>Add to favorites</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
