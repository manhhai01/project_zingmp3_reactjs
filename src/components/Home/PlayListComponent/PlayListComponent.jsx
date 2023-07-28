import React, { memo } from "react";
import css from "./playListComponent.module.css";
import { useSelector } from "react-redux";
import { customNavigate } from "../../../App";

const PlayListComponent = () => {
  const { playLists } = useSelector((state) => state.homeReducer);

  const handleClickItemPlaylist = (item) => {
    const albumPath = item?.link?.split(".")[0];
    customNavigate.push(albumPath);
  };

  const renderItemPlayList = () => {
    const firstFiveItems = playLists?.items?.slice(0, 5);
    if (!firstFiveItems) {
      return null;
    }

    return firstFiveItems.map((item, index) => {
      return (
        <div key={index} className={`${css["custom-playlist-card"]}`}>
          <img
            className={`${css["custom-playlist-card-img"]}`}
            src={item.thumbnailM}
            alt=""
            onClick={() => handleClickItemPlaylist(item)}
          />
          <span className={`${css["custom-playlist-card-song"]}`}>
            {item.title}
          </span>
          <span className={`${css["custom-playlist-card-desc"]}`}>
            {item.sortDescription}
          </span>
        </div>
      );
    });
  };

  return (
    <div className={`${css["custom-playlist-container"]}`}>
      <div className="d-flex justify-content-between align-items-center">
        <span className={`${css["custom-playlist-title"]}`}>
          {playLists?.title}
        </span>
        <div className={`${css["custom-playlist-seeall"]}`}>
          <span className={`${css["custom-playlist-text"]}`}>TẤT CẢ</span>
          <i
            className={`${css["custom-playlist-icon"]} fa-solid fa-angle-right`}
          ></i>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        {renderItemPlayList()}
      </div>
    </div>
  );
};

export default memo(PlayListComponent);
