import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '@/pokemons';

interface FavoritePokemonState {
  favorites: { [key: string]: Pokemon };
}

const initialState: FavoritePokemonState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemon(state, action: PayloadAction<{ [key: string]: Pokemon }>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<Pokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }
    },
  },
});

export const { setFavoritePokemon, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
