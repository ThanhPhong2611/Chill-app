import "./media.scss";
import * as Icon from "../../../../Svg";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setLayoutMedia } from "../../../../reducers/media";

export default function Media() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.reducerLayoutMedia);
  const setStatus = () => {
    dispatch(setLayoutMedia(!status));
  }
  return (
    <>
      <div className="media" style={{ display: status ? "block" : "none" }}>
        <div className="box">
          <div className="title-box">
            <h6>Media</h6>
            <div className="icon flex-center close" onClick={setStatus}>
              <Icon.Remove />
            </div>
          </div>
          {/* <div className="bg">
            <div className="playing">
              <div className="box-img">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLScHaCG16dhtLJ_NzOvIs9OxW6ebhaMfCHyarmKkg=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
                <div className="icon-play flex-center">
                  <Icon.PlaySong />
                </div>
              </div>

              <div className="content">
                <div className="title-space">
                  <h6>Life At Lofi</h6>
                  <div className="icon flex-center">
                    <Icon.Sotify />
                  </div>
                </div>
                <p>Life At</p>
                <div className="flex-gap">
                  <div className="value">
                    <div className="icon flex-center">
                      <Icon.PrevSong />
                    </div>
                    <div className="range"></div>
                    <div className="icon flex-center">
                      <Icon.NextSong />
                    </div>
                  </div>
                  <div className="icon flex-center">
                    <Icon.Share />
                  </div>
                </div>
              </div>
            </div>
            <div className="list scroll">
              <table>
                <tbody>
                  {number.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="col-1">{index+1}</td>
                        <td className="col-2">
                          <h6>Sweetests Thing</h6>
                          <p>Funky Notes</p>
                        </td>
                        <td className="col-3">2:46</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              
            </div>
          </div> */}
          <div className="content">
            <div className="box-iframe">
              <iframe
              id="list-song-iframe"
                src="https://open.spotify.com/embed/playlist/4aFB9we2DxFCIfJN4aClnE"
                frameborder="0"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
