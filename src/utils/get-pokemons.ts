import { Pokemon, PokemonsResponse } from '@/pokemons';

export const getPokemons = async (limit = 20, offset = 0): Promise<Pokemon[]> => {
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
