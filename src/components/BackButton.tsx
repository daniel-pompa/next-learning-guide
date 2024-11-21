'use client';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <div className='flex justify-end'>
      <button
        onClick={() => router.push('/dashboard/pokemons')}
        className='bg-blue-500 text-white py-2 px-4 mb-4 md:mb-0 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto'
      >
        Back to Pokémon List
      </button>
    </div>
  );
};
