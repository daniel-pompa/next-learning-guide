import { Metadata } from 'next';
import { PokemonGrid } from '@/pokemons';

export const metadata: Metadata = {
  title: 'Favorites',
  description:
    'Browse a collection of favorite Pokémon fetched from the PokeAPI, featuring essential information about each Pokémon.',
};

export default async function Pokemons() {
  return (
    <div className='container-page'>
      <h1>
        Pokémon Favorites
      </h1>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
