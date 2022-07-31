import * as Icon from "../../../../Svg";
import "./tool.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLayoutTime } from "../../../../reducers/time";
import { setLayoutMedia } from "../../../../reducers/media";
import { setLayoutSpace } from "../../../../reducers/space";
import {setModalNotice} from "../../../../reducers/Modal/notice";
export default function Tool() {
  const dispatch = useDispatch();
  const statusTime = useSelector((state) => state.reducerLayoutTime);
  const statusMedia = useSelector((state) => state.reducerLayoutMedia);
  const statusSpace = useSelector((state) => state.reducerLayoutSpace);
  const openModalNotice =()=>{
    dispatch(setModalNotice(true));
  }
  const setStatus = (key) => {
    if (key === "time") {
      dispatch(setLayoutTime(!statusTime));
    }
    if (key === "media") {
      dispatch(setLayoutMedia(!statusMedia));
    }
    if (key === "space") {
      if (statusSpace) {
        let box = document.getElementById("box-ui");
        let nav = document.getElementById("nav-top");
        let tool = document.getElementById("tool");

        if (box && nav) {
          nav.style.animation = "fadeOut-nav 0.5s ease-in-out";
          box.style.animation = "fadeOut-box-ui 0.5s ease-in-out";
          tool.style.animation = "fadeOut-tool 0.5s ease-in-out";
          setTimeout(() => {
            box.style.left = "-19.6%";
            nav.style.left = "8px";
            tool.style.left = "8px";
          }, 500);
        }
        dispatch(setLayoutSpace(false));
      } else {
        let nav = document.getElementById("nav-top");
        let box = document.getElementById("box-ui");
        let tool = document.getElementById("tool");

        if (box && nav) {
          nav.style.animation = "fadeIn-nav 0.5s ease-in-out";
          box.style.animation = "fadeIn-box-ui 0.5s ease-in-out";
          tool.style.animation = "fadeIn-tool 0.5s ease-in-out";

          setTimeout(() => {
            box.style.left = "0.5%";
            nav.style.left = "316px";
            tool.style.left = "315px";
          }, 500);
        }
        dispatch(setLayoutSpace(true));
      }
    }
  };
  return (
    <>
      <div className="tool" id="tool">
        <div className="container-box">
          <div className="title">TOOLS</div>
          <div className="list">
            <div
              className={statusSpace ? "item active" : "item"}
              onClick={() => setStatus("space")}
            >
              <div className="icon">
                {" "}
                <Icon.Image />
              </div>
              <div className="name">Spaces</div>
            </div>
            <div
              className={statusTime ? "item active" : "item"}
              onClick={() => setStatus("time")}
            >
              <div className="icon">
                {" "}
                <Icon.ClockTimer />
              </div>
              <div className="name">Timers</div>
            </div>
            <div
              className={statusMedia ? "item active" : "item"}
              onClick={() => setStatus("media")}
            >
              <div className="icon">
                {" "}
                <Icon.Media />
              </div>
              <div className="name">Media</div>
            </div>
            <div className="item" onClick={openModalNotice}>
              <div className="icon">
                {" "}
                <Icon.SoundTrack />
              </div>
              <div className="name">Sounds</div>
            </div>
            <div className="item" onClick={openModalNotice}>
              <div className="icon">
                {" "}
                <Icon.Todo />
              </div>
              <div className="name">To-do</div>
            </div>
            <div className="item" onClick={openModalNotice}>
              <div className="icon">
                {" "}
                <Icon.Fortune />
              </div>
              <div className="name">Fortune</div>
            </div>
          </div>
          <div className="add">
            <Icon.Add />
          </div>
          <div className="setting">
            <Icon.Setting />
          </div>
        </div>
      </div>
    </>
  );
}
