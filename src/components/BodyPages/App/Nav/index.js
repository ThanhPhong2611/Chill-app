import "./nav.scss";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import * as Icon from "../../../../Svg";

export default function Navbar() {
  const [modalLogin, setModalLogin] = React.useState(false);
  const boxRef = useRef();

  const closeModal = () => {
    setModalLogin(false);
  };
  const openModal = () => {
    setModalLogin(true);
  };
  return (
    <>
      <div style={{ display: modalLogin ? "block" : "none" }}>
        <div className="modal-bg">
          <div className="modal modal-md modal-login" ref={boxRef}>
            <div className="modal-header">
              <h6>Sign in or create account</h6>
              <div className="icon close" onClick={closeModal}>
                <Icon.CloseX />
              </div>
            </div>
            <div className="modal-body">
              <div className="list-btn">
              <div className="modal-box-button">
                <button className="btn-center sign email">
                  <img src="/assets/images/email.png" alt="email" />
                  Sign in with email
                </button>
              </div>
              <div className="modal-box-button">
                <button className="btn-center sign gg">
                  <img src="/assets/images/gg.jpg" alt="google" />
                  Sign in with Google
                </button>
              </div>
              </div>
              <div className="flex-center">
              <div className="notice">
                  By continuing, you are indicating that you accept our{" "}
                  <a
                    href="javascript:void(0)"
                    class="firebaseui-link firebaseui-tos-link"
                    target="_blank"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="javascript:void(0)"
                    class="firebaseui-link firebaseui-pp-link"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                  .
               
              </div>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
      <div className="nav-top" id="nav-top">
        <div className="col col-1">
          <span>
            <a href="javascript:void(0)">
              <img src="/assets/images/logo.png" alt="logo" />
            </a>
          </span>
          <span>
            <div className="font">My Room</div>
            <button className="invite">Invite</button>
          </span>
        </div>
        <div className="col col-2">
          <span>
            <div className="font" onClick={openModal}>
              🚀 Sign Up
            </div>
          </span>
          <span>
            <div className="font">1 🔥</div>
          </span>
          <span>
            <div className="icon">
              <BsArrowsAngleExpand />
            </div>
          </span>
          <span>
            <div className="icon">
              <FaUser />
              <BiDotsVerticalRounded />
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
