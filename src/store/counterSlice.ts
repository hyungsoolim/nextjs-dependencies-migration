import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {value: 0},
  reducers: {
    UP: (state, action) => {
      state.value = state.value + action.payload;
    }
  }
});

export const {UP} = counterSlice.actions;