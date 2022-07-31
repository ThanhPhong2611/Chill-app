import * as Icon from "../../../Svg";
import { setModalNotice } from "../../../reducers/Modal/notice";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap";
import React, {useRef, useEffect} from "react";
export default function ModalNotice() {
  const boxRef = useRef();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.reducerModalNotice);
  const closeModal = () => {
    dispatch(setModalNotice(false));
  };
  useEffect(() => {
    gsap.from(boxRef.current, { top : 0, duration : 0.5, ease: "bounce" });
  });
  return (
    <>
      <div style={{ display: status ? "block" : "none" }}>
        <div className="modal-bg">
          <div className="modal modal-sm" ref={boxRef}>
            <div className="modal-header">
              <h6>The function is updating, please come back later!</h6>
              <div className="icon close" onClick={closeModal}>
                <Icon.CloseX />
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-box-button">
                <button className="btn-center" onClick={closeModal}>OK</button>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
