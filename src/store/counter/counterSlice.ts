import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  isReady: boolean;
}

const initialState: CounterState = {
  value: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.value = action.payload;
      state.isReady = true;
    },
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      if (state.value === 0) return;
      state.value -= 1;
    },
    reset(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.value = action.payload;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { initCounterState, increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
