import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PokemonResponse, PokemonsResponse } from '@/pokemons';
import { convertHeight, convertWeight } from '@/utils';
import { BackButton, ImageWithFallback } from '@/components';

interface PokemonPageProps {
  params: Promise<{ name: string }>;
}

// Build time
export async function generateStaticParams() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=500';
  const response = await fetch(url);
  const data: PokemonsResponse = await response.json();

  const pokemons = data.results.map(pokemon => ({
    name: pokemon.name,
  }));
  return pokemons.map(pokemon => ({ name: pokemon.name }));
}

// Fetches a single Pokémon's data from the PokeAPI by its ID
const getPokemon = async (name: string): Promise<PokemonResponse | null> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url, { next: { revalidate: 60 * 60 * 30 * 6 } });
    if (!response.ok) {
      return null;
    }
    const data: PokemonResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return null;
  }
};

export async function generateMetadata({ params }: PokemonPageProps): Promise<Metadata> {
  const { name } = await params;
  const pokemon = await getPokemon(name);
  if (!pokemon) {
    return {
      title: 'Pokemon Not Found',
      description: 'The specified Pokémon could not be found.',
    };
  }
  return {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)}`,
    description: `Detailed information about ${name}`,
  };
}

export default async function Pokemon({ params }: PokemonPageProps) {
  const { name } = await params;
  const pokemon = await getPokemon(name);

  if (!pokemon) {
    notFound();
  }

  return (
    <div className='max-w-6xl mx-auto px-4 py-10'>
      <div className='bg-white rounded-lg shadow-lg p-8'>
        {/* Header */}
        <div className='flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-6'>
          <h1 className='capitalize text-center md:text-left font-semibold'>
            #{pokemon.id} {pokemon.name}
          </h1>
          <ImageWithFallback
            src={pokemon.sprites.other?.dream_world.front_default || ''}
            width={224}
            height={224}
            alt={`Image of ${pokemon.name}`}
            className='bg-slate-50 rounded-md border border-s-slate-200 p-4 w-56 h-56'
          />
        </div>
        {/* Button to navigate back */}
        <BackButton />
        <div className='mb-8'>
          <h2 className='font-semibold mb-4 border-b pb-2'>Attributes</h2>
          {/* Weight, Height, Types and Abilities */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            {/* Weight */}
            <div className='bg-white rounded-md p-4 shadow-xl text-center border border-slate-200 h-28'>
              <h3>Weight</h3>
              <p className='md:text-lg mt-2'>{convertWeight(pokemon.weight)}</p>
            </div>
            {/* Height */}
            <div className='bg-white rounded-md p-4 shadow-xl text-center border border-slate-200 h-28'>
              <h3>Height</h3>
              <p className='md:text-lg mt-2'>{convertHeight(pokemon.height)}</p>
            </div>
            {/* Types */}
            <div className='bg-white rounded-md p-4 shadow-xl text-center border border-slate-200 h-28'>
              <h3>Types</h3>
              <div className='flex justify-center space-x-2 mt-2'>
                {pokemon.types.map(type => (
                  <span
                    key={type.type.name}
                    className='bg-blue-100 text-blue-800 px-3 py-1 rounded capitalize'
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
            {/* Abilities */}
            <div className='bg-white rounded-md p-4 shadow-xl text-center border border-slate-200 h-28'>
              <h3 className='text-slate-600'>Abilities</h3>
              <div className='flex justify-center space-x-2 mt-2'>
                {pokemon.abilities.map(ability => (
                  <span
                    key={ability.ability.name}
                    className='bg-green-100 text-green-800 px-3 py-1 rounded capitalize'
                  >
                    {ability.ability.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Stats Table */}
        <div className='mb-8'>
          <h2 className='font-semibold mb-4 border-b pb-2'>Stats</h2>
          <div className='stats-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {pokemon.stats.map(stat => (
              <div
                key={stat.stat.name}
                className='bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-4 rounded-md shadow-lg hover:scale-105 transform transition text-center'
              >
                <h3 className='mb-2 capitalize tracking-wide'>{stat.stat.name}</h3>
                <p className='text-xl font-bold'>{stat.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Moves */}
        <div>
          <h2 className='font-semibold mb-4 border-b pb-2'>Moves</h2>
          <div className='container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3'>
            {pokemon.moves.map(move => (
              <span
                key={move.move.name}
                className='bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-blue-900 px-4 py-2 rounded text-center text-sm font-medium capitalize shadow-sm hover:scale-105 transform transition'
              >
                {move.move.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
