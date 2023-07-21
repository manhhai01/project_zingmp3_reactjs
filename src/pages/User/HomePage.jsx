import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBannersActionApi } from "../../redux/reducers/homeReducer";
import SliderComponent from "../../components/Home/SliderComponent/SliderComponent";

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getBannersApiFuntion();
  }, []);

  const getBannersApiFuntion = async () => {
    const actionAsync = getBannersActionApi();
    dispatch(actionAsync);
  };

  return <div>
    <SliderComponent />
  </div>;
};

export default HomePage;
