import moment from "moment";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { setSongCurrentAction } from "../../redux/reducers/featureReducer";

const SongItem = (songData) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSongCurrentAction(songData?.songData));
  }

  return (
    <tr style={{cursor: "pointer"}} onClick={handleClick}>
      <td>
        <div style={{ float: "left", paddingLeft: 10 }}>
          <div className="d-flex align-items-center">
            <i
              style={{ marginRight: 10, color: "#cccc" }}
              className="fa-brands fa-itunes-note"
            ></i>
            <img
              style={{ height: 40, width: 40, borderRadius: 4 }}
              src={songData?.songData?.thumbnail}
              alt=""
            />
            <div style={{ marginLeft: 16 }}>
              <span style={{ float: "left", color: "#ffff" }}>
                {songData?.songData?.title?.length > 50
                  ? `${songData?.songData?.title?.slice(0, 50)}...`
                  : songData?.songData?.title}
              </span>
              <br />
              <span style={{ float: "left", color: "#cccc", fontSize: 12 }}>
                {songData?.songData?.artistsNames}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div
          style={{
            float: "left",
            paddingLeft: 10,
            fontSize: 12,
            color: "#cccc",
          }}
        >
          <span>{songData?.songData?.album?.title}</span>
        </div>
      </td>
      <td>
        <span style={{ paddingLeft: 10, color: "#cccc", fontSize: 12 }}>
          {moment.utc(songData?.songData?.duration * 1000).format("mm:ss")}
        </span>
      </td>
    </tr>
  );
};

export default memo(SongItem);
