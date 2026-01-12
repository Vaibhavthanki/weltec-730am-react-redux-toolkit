import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByAmount(state, action) {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counter.actions;

export default counter.reducer;
