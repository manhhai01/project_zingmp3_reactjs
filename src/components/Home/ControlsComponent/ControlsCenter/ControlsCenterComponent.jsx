import React, { useEffect } from "react";
import css from "./controlsCenterComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../../../../redux/reducers/statusReducer";
import { getSourceSongCurrentActionApi } from "../../../../redux/reducers/songsReducer";

const ControlsCenterComponent = () => {
  const { isPlaying } = useSelector((state) => state.statusReducer);

  const { songCurrent } = useSelector((state) => state.featureReducer);

  const { sourceSongCurrent } = useSelector((state) => state.songsReducer);

  const songCurrentId = songCurrent.encodeId;

  useEffect(() => {
    getSourceSongCurrentFunction();
  }, [songCurrentId]);

  const getSourceSongCurrentFunction = async () => {
    const actionAsync = getSourceSongCurrentActionApi(songCurrentId);
    dispatch(actionAsync);
  };

  const dispatch = useDispatch();

  const audioElement = new Audio(sourceSongCurrent);

  const handleTogglePlayMusic = (currentStatus) => {
    dispatch(setIsPlaying(!currentStatus));
  };

  return (
    <div className={`${css["custom-min-height"]}`}>
      <div
        className={`${css["custom-min-height-center"]} d-flex justify-content-center align-items-center`}
      >
        <i className={`${css["custom-icon-center"]} fa-solid fa-shuffle`}></i>
        <i
          className={`${css["custom-icon-center"]} fa-solid fa-backward-step`}
        ></i>
        {isPlaying ? (
          <i
            className={`${css["custom-icon-center"]} fa-sharp fa-regular fa-circle-pause fs-2`}
            onClick={() => handleTogglePlayMusic(isPlaying)}
          ></i>
        ) : (
          <i
            className={`${css["custom-icon-center"]} fa-regular fa-circle-play fs-2`}
            onClick={() => handleTogglePlayMusic(isPlaying)}
          ></i>
        )}

        <i
          className={`${css["custom-icon-center"]} fa-solid fa-forward-step`}
        ></i>
        <i className={`${css["custom-icon-center"]} fa-solid fa-repeat`}></i>
      </div>
    </div>
  );
};

export default ControlsCenterComponent;
