import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncUpFetch = createAsyncThunk(
  "counterSlice/asyncUpFetch",
  async () => {
    const res = await fetch("https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits");
    return await res.json();
  });

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0, status: "Welcome" },
  reducers: {
    UP: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  }
});

export const { UP } = counterSlice.actions;