import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
};

const statusReducer = createSlice({
  name: "statusReducer",
  initialState,
  reducers: {
    setIsPlayingAction: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setIsPlayingAction } = statusReducer.actions;

export default statusReducer.reducer;
