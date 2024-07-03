import { createSlice} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value <= 9) {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
