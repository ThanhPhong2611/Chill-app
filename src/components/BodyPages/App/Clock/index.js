import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineRemove } from "react-icons/md";
import { IoSettingsSharp, IoReloadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setLayoutTime } from "../../../../reducers/time";
import * as Icon from "../../../../Svg";
import "./clock.scss";
import {
  onTimerStartStop,
  onTimerReset,
  setTotalTime,
  hideAlertTimer
} from "../../../../reducers/time";
import { onTick } from "../../../../reducers/time";
import { gsap } from "gsap";
import React, { useRef, useEffect, useState } from "react";
const listButton = [
  {
    id: 1,
    name: "Pomodoro",
  },
  {
    id: 2,
    name: "Short Break",
  },
  {
    id: 3,
    name: "Long Break",
  },
];
export default function Clock() {
  const [indexActive, setIndexActive] = useState(1);
  const [onStart, setOnStart] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const dispatch = useDispatch();
  const boxRef = useRef();
  const status = useSelector((state) => state.reducerLayoutTime);
  const ticking = useSelector((state) => state.actionTimer?.ticking);
  const settings = useSelector((state) => state.settingsTimer);
  const minutes = useSelector((state) => state.actionTimer?.display?.minutes);
  const seconds = useSelector((state) => state.actionTimer?.display?.seconds);
  const timer = useSelector((state) => state.actionTimer?.timer);
  const alertNotice = useSelector((state) => state.actionTimer?.alertNotice);
  const [timeoutTimer, setTimeoutTimer] = useState(null);

  React.useEffect(() => {
    if (ticking) {
      setTimeoutTimer(
        setInterval(() => {
          dispatch(onTick(settings));
        }, 1000)
      );
    } else {
      clearInterval(timeoutTimer);
    }
  }, [ticking]);
  const onMove = (e) => {
    if (onStart) {
      let clock = document.getElementById("block-clock");
      if (clock) {
        // move element clock
        clock.style.right = -(e.pageX - startX) + "px";
        clock.style.top = e.pageY - startY + "px";
      }
    }
  };
  const onStartClick = (e) => {
    console.log("start");
    setOnStart(true);
    let clock = document.getElementById("block-clock");
    if (clock) {
      setStartX(e.pageX - clock.offsetWidth / 2);
      setStartY(e.pageY - clock.offsetHeight / 2);
    }
  };
  const onExit = (e) => {
    setOnStart(false);
    console.log("exit");
  };
  const setStatus = () => {
    dispatch(setLayoutTime(!status));
  };
  const action = (type) => {
    if (type === "start") {
      dispatch(onTimerStartStop());
    } else if (type === "stop") {
      dispatch(onTimerStartStop());
    } else if (type === "reset") {
      setIndexActive(1);
      dispatch(setTotalTime(20));
      dispatch(onTimerReset());
    }
  };
  const setMinuteTime = (item) => {
    setIndexActive(item.id);
    if (item.id === 1) {
      dispatch(setTotalTime(20));
    } else if (item.id === 2) {
      //5
      dispatch(setTotalTime(5));
    } else if (item.id === 3) {
      //15
      dispatch(setTotalTime(15));
    }
  };
  const closeModal = () => {
    dispatch(hideAlertTimer());
  };
  return (
    <>
      <div style={{ display: alertNotice ? "block" : "none" }}>
        <div className="modal-bg">
          <div className="modal modal-sm" ref={boxRef}>
            <div className="modal-header">
              <h6>🔔 The timeout of the task has ended!</h6>
              <div className="icon close" onClick={closeModal}>
                <Icon.CloseX />
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-box-button">
                <button className="btn-center" onClick={closeModal}>
                  OK
                </button>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
      <div
        className="clock"
        style={{ display: status ? "block" : "none" }}
        onMouseUp={onExit}
        onDragStart={onStartClick}
        onMouseMove={onMove}
        id="block-clock"
      >
        <div className="header">
          <div className="flex">
            <p>Timer</p>
            <div className="flex-icon">
              <div className="icon">
                <MdOutlineTimer />
              </div>
              <div className="icon">
                <MdOutlineTimer />
              </div>
              <div className="icon">
                <MdOutlineTimer />
              </div>
              <div className="icon">
                <MdOutlineTimer />
              </div>
            </div>
          </div>
          <div onClick={setStatus}>
            <MdOutlineRemove />
          </div>
        </div>
        <div className="body">
          <h6 className="time">
            {minutes}:{seconds}
          </h6>
          <div className="flex-button">
            {!ticking ? (
              <button
                className="start btn-center"
                onClick={() => action("start")}
              >
                Start
              </button>
            ) : (
              <button
                className="start btn-center"
                onClick={() => action("stop")}
              >
                {" "}
                Pause{" "}
              </button>
            )}

            <button
              className="return btn-center"
              onClick={() => action("reset")}
            >
              <IoReloadOutline />
            </button>
          </div>
        </div>
        <div className="footer">
          {listButton.map((item, index) => {
            return (
              <div
                className={indexActive === item.id ? "active" : "item"}
                key={item.id}
                onClick={() => {
                  setMinuteTime(item);
                }}
              >
                {item.name}
              </div>
            );
          })}
          <div className="icon">
            <IoSettingsSharp />
          </div>
        </div>
      </div>
    </>
  );
}
