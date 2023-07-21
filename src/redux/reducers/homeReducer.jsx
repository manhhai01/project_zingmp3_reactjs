import { createSlice } from "@reduxjs/toolkit";
import http from "../../utils/configInterceptor";

const initialState = {
  banners: [],
};

const homeReducer = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {
    setBannersAction: (state, action) => {
      state.banners = action.payload;
    },
  },
});

export const { setBannersAction } = homeReducer.actions;

export default homeReducer.reducer;

// async action

export const getBannersActionApi = () => {
  return async (dispatch) => {
    const res = await http.get("/home");
    const action = setBannersAction(res?.data?.data?.items[0].items);
    dispatch(action);
  };
};
