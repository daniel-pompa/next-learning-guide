import { Metadata } from 'next';
import { PokemonListClient } from '@/pokemons';

export const metadata: Metadata = {
  title: 'List of Pokémon',
  description:
    'Browse a collection of Pokémon fetched from the PokeAPI, featuring essential information about each Pokémon.',
};

export default function Pokemons() {
  return (
    <div className='container-page'>
      <h1>Pokémon List</h1>
      <PokemonListClient />
    </div>
  );
}
