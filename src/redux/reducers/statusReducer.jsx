import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isAlbumNext: false,
  isAlbumPrev: false,
  isSuffle: false,
  isRepeat: false,
};

const statusReducer = createSlice({
  name: "statusReducer",
  initialState,
  reducers: {
    setIsPlayingAction: (state, action) => {
      state.isPlaying = action.payload;
    },
    setIsAlbumNextAction: (state, action) => {
      state.isAlbumNext = action.payload;
    },

    setIsAlbumPrevAction: (state, action) => {
      state.isAlbumPrev = action.payload;
    },

    setIsSuffleAction: (state, action) => {
      state.isSuffle = action.payload;
    },

    setIsRepeatAction: (state, action) => {
      state.isRepeat = action.payload;
    },
  },
});

export const {
  setIsPlayingAction,
  setIsAlbumNextAction,
  setIsAlbumPrevAction,
  setIsSuffleAction,
  setIsRepeatAction,
} = statusReducer.actions;

export default statusReducer.reducer;
