import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBannersActionApi, getPlayListsActionApi } from "../../redux/reducers/homeReducer";
import SliderComponent from "../../components/Home/SliderComponent/SliderComponent";
import PlayListComponent from "../../components/Home/PlayListComponent/PlayListComponent";

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getBannersApiFuntion();
    getPlaylistsApiFunction();
  }, []);

  const getBannersApiFuntion = async () => {
    const actionAsync = getBannersActionApi();
    dispatch(actionAsync);
  };

  const getPlaylistsApiFunction = async () => {
    const actionAsync = getPlayListsActionApi();
    dispatch(actionAsync);
  }

  return <div>
    <SliderComponent />
    <PlayListComponent />
  </div>;
};

export default HomePage;
