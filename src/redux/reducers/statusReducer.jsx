import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
};

const statusReducer = createSlice({
  name: "statusReducer",
  initialState,
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setIsPlaying } = statusReducer.actions;

export default statusReducer.reducer;
