import { Metadata } from 'next';
import { Pokemon, PokemonGrid, PokemonsResponse } from '@/pokemons';

export const metadata: Metadata = {
  title: 'List of Pokémon',
  description:
    'Browse a collection of Pokémon fetched from the PokeAPI, featuring essential information about each Pokémon.',
};

// Function to obtain the Pokémon list from the API
const getPokemons = async (limit = 20, offset = 0): Promise<Pokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  const data: PokemonsResponse = await response.json();

  // Map API results to extract Pokémon ID and name
  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function Pokemons() {
  const pokemons = await getPokemons(100);

  return (
    <div className='container-page'>
      <h1>Pokémon List</h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
