'use client';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '.';
import { setFavoritePokemon } from './pokemons/pokemonsSlice';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  useEffect(() => {
    const favorites = localStorage.getItem('favorite-pokemon') || '{}';
    store.dispatch(setFavoritePokemon(JSON.parse(favorites)));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
