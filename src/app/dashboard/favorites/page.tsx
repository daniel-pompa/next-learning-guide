import { Metadata } from 'next';
import { FavoritePokemon } from '@/pokemons';

export const metadata: Metadata = {
  title: 'Favorite Pokémons',
  description:
    'Browse a collection of favorite Pokémon fetched from the PokeAPI, featuring essential information about each Pokémon.',
};

export default async function Pokemons() {
  return (
    <div className='container-page'>
      <h1>Favorite Pokémon</h1>
      <FavoritePokemon />
    </div>
  );
}
