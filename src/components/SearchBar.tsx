'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa'; // Importa el ícono de React Icons

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/dashboard/pokemons/${searchTerm.toLowerCase()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className='flex justify-center items-center mb-6'>
      <div className='flex w-full mx-7 lg:max-w-[500px] rounded-md border-slate-400 border-opacity-65 border bg-slate-100 px-2'>
        <input
          type='text'
          placeholder='Search Pokémon by name'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className='flex w-full bg-transparent px-3 text-slate-700 rtl:text-right outline-0'
        />
        <div className='border-slate-400 border-opacity-70 my-1 border-l'></div>
        <button
          type='submit'
          className='relative rounded-full bg-transparent px-2 py-3'
          disabled={searchTerm.length === 0}
        >
          <FaSearch className='text-slate-600' size={20} />
        </button>
      </div>
    </form>
  );
};
