import { Middleware } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action);
  // Synchronize favorites with localStorage after each action
  const state = store.getState();
  const favorites = state.pokemons.favorites;
  localStorage.setItem('favorite-pokemon', JSON.stringify(favorites));
  return result;
};
