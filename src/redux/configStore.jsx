import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    numberReducer: (state = 1) => state,
  },
});
    