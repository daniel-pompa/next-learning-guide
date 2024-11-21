'use client';
import { useState, useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { getPokemons } from '@/utils/get-pokemons';
import { Pokemon, PokemonGrid } from '@/pokemons';
import { SearchBar } from '@/components';

const ITEMS_PER_PAGE = 8;

export const PokemonListClient = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetches Pokémon data from the PokeAPI
  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const data = await getPokemons(1000); // You can adjust the number of Pokémon you want to obtain
      setPokemons(data);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  // Pokémon pagination
  const paginatedPokemons = pokemons.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(pokemons.length / ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {/* Search component*/}
      <SearchBar />
      {/* If it is loading, we display a message */}
      {loading ? (
        <p className='text-center text-gray-500'>Loading Pokémon...</p>
      ) : (
        <>
          {/* Pokémon Grid */}
          <PokemonGrid pokemons={paginatedPokemons} />
          {/* Pagination */}
          <div className='flex justify-center items-center mt-10 space-x-4'>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`p-2 bg-blue-500 text-white rounded-full disabled:opacity-50 ${
                currentPage === 0 ? 'cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              <IoChevronBack size={24} />
            </button>
            <p className='text-gray-700 text-center mt-5'>
              Page {currentPage + 1} of {totalPages}
            </p>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`p-2 bg-blue-500 text-white rounded-full disabled:opacity-50 ${
                currentPage === totalPages - 1
                  ? 'cursor-not-allowed'
                  : 'hover:bg-blue-600'
              }`}
            >
              <IoChevronForward size={24} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
