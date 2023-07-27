import React, { useEffect, useRef, useState } from "react";
import css from "./controlsCenterComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlayingAction } from "../../../../redux/reducers/statusReducer";
import { getSourceSongCurrentActionApi } from "../../../../redux/reducers/songsReducer";
import moment from "moment";
import { Slider } from "antd";

const ControlsCenterComponent = () => {
  const audioElement = useRef(new Audio());

  const { isPlaying } = useSelector((state) => state.statusReducer);

  const { songCurrent } = useSelector((state) => state.featureReducer);

  const { sourceSongCurrent } = useSelector((state) => state.songsReducer);

  const { songCurrentDetail } = useSelector((state) => state.songsReducer);

  const [currentSeconds, setCurrentSeconds] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    getSourceSongCurrentFunction();
  }, [songCurrent]);

  useEffect(() => {
    if (sourceSongCurrent) {
      dispatch(setIsPlayingAction(true));
      audioElement.current.pause();
      audioElement.current.src = sourceSongCurrent;
      audioElement.current.load();
      if (isPlaying) audioElement.current.play();
    }
  }, [songCurrent, sourceSongCurrent]);

  useEffect(() => {
    audioElement.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioElement.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const getSourceSongCurrentFunction = async () => {
    const actionAsync = getSourceSongCurrentActionApi(songCurrent.encodeId);
    dispatch(actionAsync);
  };

  const handleTogglePlayMusic = () => {
    if (isPlaying) {
      audioElement.current.pause();
      dispatch(setIsPlayingAction(false));
    } else {
      audioElement.current.play();
      dispatch(setIsPlayingAction(true));
    }
  };

  const handleTimeUpdate = () => {
    setCurrentSeconds(audioElement.current.currentTime);
  };

  const onChange = (value) => {
    const duration = songCurrentDetail?.duration || 0;
    const newPosition = duration * (value / 100);
    audioElement.current.currentTime = newPosition;
    setCurrentSeconds(newPosition);
  };

  const onAfterChange = (value) => {};

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
            onClick={handleTogglePlayMusic}
          ></i>
        ) : (
          <i
            className={`${css["custom-icon-center"]} fa-regular fa-circle-play fs-2`}
            onClick={handleTogglePlayMusic}
          ></i>
        )}

        <i
          className={`${css["custom-icon-center"]} fa-solid fa-forward-step`}
        ></i>
        <i className={`${css["custom-icon-center"]} fa-solid fa-repeat`}></i>
      </div>
      <div
        className={`${css["custom-min-height-center"]} d-flex align-items-center justify-content-center`}
      >
        <span style={{ color: "#cccc", marginRight: 20 }}>
          {moment.utc(currentSeconds * 1000).format("mm:ss")}
        </span>
        <Slider
          style={{ width: "60%" }}
          onChange={onChange}
          onAfterChange={onAfterChange}
          value={(currentSeconds / songCurrentDetail?.duration) * 100}
        />
        <span style={{ color: "#cccc", marginLeft: 20 }}>
          {moment.utc(songCurrentDetail?.duration * 1000).format("mm:ss")}
        </span>
      </div>
    </div>
  );
};

export default ControlsCenterComponent;
