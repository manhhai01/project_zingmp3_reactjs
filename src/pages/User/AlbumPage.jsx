import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlayListActionApi } from "../../redux/reducers/playListReducer";
import moment from "moment";
import { convertToHourMinute, formatNumber } from "../../utils/formatNumber";
import ListSongItem from "../../components/Album/ListSongItem";

const AlbumPage = () => {
  const { title, pid } = useParams();

  const { playList } = useSelector((state) => state.playListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    getPlayListActionFunction();
  }, []);

  const getPlayListActionFunction = async () => {
    const actionAsync = getPlayListActionApi(pid);
    dispatch(actionAsync);
  };

  return (
    <div className="row text-white">
      <div className="col-3 d-flex flex-column align-items-center">
        <div className="" style={{ width: 300, height: 300 }}>
          <img
            style={{ borderRadius: 8, boxShadow: "0 0 20px rgba(0, 0, 0, 1)" }}
            className="w-100 h-100"
            src={playList?.thumbnailM}
            alt=""
          />
        </div>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 500,
            marginTop: 24,
            color: "#ffff",
          }}
        >
          {playList?.title}
        </h3>
        <p style={{ color: "#cccc", fontSize: 12 }}>
          Cập nhật{" "}
          {moment.unix(playList?.contentLastUpdate).format("DD/MM/YYYY")}
        </p>
        <p style={{ color: "#cccc", fontSize: 12 }}>{playList?.artistsNames}</p>
        <p style={{ color: "#cccc", fontSize: 12 }}>
          {formatNumber(playList?.like)} người yêu thích
        </p>
      </div>
      <div className="col-9">
        <p style={{ float: "left", color: "#ccc" }}>
          Lời tựa:{" "}
          <span style={{ color: "#ffff" }}>{playList?.sortDescription}</span>
        </p>

        <ListSongItem
          songs={playList?.song?.items}
          totalDuration={playList?.song?.totalDuration}
        />

        <div className="d-flex justify-content-left align-items-center" style={{float: "left", marginTop: 20, fontSize: 14, color: "#cccc"}}>
          <span>{playList?.song?.items?.length} bài hát</span>
          <i style={{fontSize: 5, margin: "0px 10px"}} className="fa-solid fa-circle"></i>
          <span>{convertToHourMinute(moment.utc(playList?.song?.totalDuration * 1000).format("HH:mm:ss"))}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
