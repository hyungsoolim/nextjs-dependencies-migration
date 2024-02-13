import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@store/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

export default store;