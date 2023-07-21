import { createSlice } from "@reduxjs/toolkit";
import http from "../../utils/configInterceptor";

const initialState = {
  songCurrentDetail: {},
  sourceSongCurrent: "",
};

const songsReducer = createSlice({
  name: "songsReducer",
  initialState,
  reducers: {
    setSongCurrentDetail: (state, action) => {
      state.songCurrentDetail = action.payload;
    },
    setSourceSongCurrent: (state, action) => {
      state.sourceSongCurrent = action.payload;
    },
  },
});

export const { setSongCurrentDetail, setSourceSongCurrent } =
  songsReducer.actions;

export default songsReducer.reducer;

// async action

export const getSongCurrentDetailActionApi = (sid) => {
  return async (dispatch) => {
    const res = await http.get(`/infosong?id=${sid}`);

    if (res) {
      const actionDispatch = setSongCurrentDetail(res?.data?.data);
      dispatch(actionDispatch);
    }
  };
};

export const getSourceSongCurrentActionApi = (sid) => {
  return async (dispatch) => {
    const res = await http.get(`/song?id=${sid}`);

    if (res) {
      const actionDispatch = setSourceSongCurrent(res?.data?.data["128"]);
      dispatch(actionDispatch);
    }
  };
};
