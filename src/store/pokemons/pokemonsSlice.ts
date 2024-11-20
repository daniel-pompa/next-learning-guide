import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '@/pokemons';

interface FavoritePokemonState {
  [key: string]: Pokemon;
}

const initialState: FavoritePokemonState = {};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Pokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state[id]) {
        delete state[id];
        return;
      }
      state[id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
