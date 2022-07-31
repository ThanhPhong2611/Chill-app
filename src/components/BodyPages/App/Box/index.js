import "./box.scss";
import { BsHeart } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiFillInstagram, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { HiCheckCircle } from "react-icons/hi";
import { BsShareFill } from "react-icons/bs";
import { AiFillSound } from "react-icons/ai";
import * as Icon from "../../../../Svg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLayoutSpace } from "../../../../reducers/space";
import { setLayoutTopic } from "../../../../reducers/topic";
import { Link, useNavigate } from "react-router-dom";
import { Button, Divider, Tooltip } from "antd";
import {setInfoUser} from '../../../../reducers/user';
const list1 = [
  {
    img: "/assets/images/category.png",
    name: "Art",
    src: "https://www.youtube.com/embed/DbuebKNKQsQ",
    id: 1,
    user: {
      name: "Yaroslav Shuraev",
      social: {
        instagram: "https://www.instagram.com/yaroslav_shuraev/",
        url: "https://mini-moss.tumblr.com/",
      },
    },
  },
  {
    img: "/assets/images/category-1.png",
    name: "Code",
    src: "https://www.youtube.com/embed/f02mOEt11OQ",
    id: 2,
    user: {
      name: "byaddinaf",
      social: {
        instagram: "https://www.instagram.com/byaddinaf/",
      },
    },
  },
  {
    img: "/assets/images/category-2.png",
    name: "Lofi",
    src: "https://www.youtube.com/embed/TFXK3c3SYvU",
    id: 3,
    user: {
      name: "Community member",
      social: {
        url: "https://discord.com/invite/lifeat",
      },
    },
    
  },
  {
    img: "/assets/images/category-3.png",
    name: "Pets",
    src: "https://www.youtube.com/embed/aKVBZpJgY0A",
    id: 4,
    user: {
      name: "goodboymulligan",
      social: {
        instagram: "https://www.instagram.com/goodboymulligan",
      },
    },
  },
  {
    img: "/assets/images/category-4.png",
    name: "Cafe",
    src: "https://www.youtube.com/embed/kyvnngAEIpY",
    id: 5,
    user: {
      name: "meshtimes",
      social: {
        instagram: "https://instagram.com/meshtimes",
        tiktok : 'https://tiktok.com/@productdesign'
      },
    },
  },
  {
    img: "/assets/images/category-5.png",
    name: "Beach",
    src: "https://www.youtube.com/embed/I-YXTAZJM5U",
    id: 6,
    user: {
      name: "kmeel",
      social: {
     
      },
    },
  },
  {
    img: "/assets/images/category-6.png",
    name: "Library",
    src: "https://www.youtube.com/embed/YQc4WT0yDH4",
    id: 7,
    user: {
      name: "kmeel",
      social: {

      },
    },
  },
  {
    img: "/assets/images/category-7.png",
    name: "Anime",
    src: "https://www.youtube.com/embed/5wRWniH7rt8",
    id: 8,
    user: {
      name: "jinaly",
      social: {

      },
    },
  },
];
const list2 = [
  {
    img: "/assets/images/category-9.png",
    name: "Walk",
    src: "https://www.youtube.com/embed/F8MN0o6RS9o",
    id: 9,
    user: {
      name: "The Minister of Ambiance",
      social: {

      },
    },
  },
  {
    img: "/assets/images/category-10.png",
    name: "Game",
    src: "https://www.youtube.com/embed/l3x0UCeQLe8",
    id: 10,
    user: {
      name: "anches.ronquillo13",
      social: {

      },
    },
  },
  {
    img: "/assets/images/category-11.png",
    name: "City",
    src: "https://www.youtube.com/embed/I0B21LjeSUQ",
    id: 11,
    user: {
      name: "gettymuseum",
      social: {

      },
    },
  },
  {
    img: "/assets/images/category-12.png",
    name: "Nature",
    src: "https://www.youtube.com/embed/BHACKCNDMW8",
    id: 12,
    user: {
      name: "LifeAt",
      social: {
        instagram : 'https://instagram.com/lifeat',
        tiktok : 'https://tiktok.com/@lifeat',
        url : 'https://lifeat.io/'
      },
    },
  },
  {
    img: "/assets/images/category-13.png",
    name: "Space",
    src: "https://www.youtube.com/embed/FYOH_54XEJY",
    id: 13,
    user: {
      name: "Ambient Renders",
      social: {
        instagram : 'https://www.instagram.com/ambient.renders/',
      },
    },
  },
  {
    img: "/assets/images/category-14.png",
    name: "Snow",
    src: "https://www.youtube.com/embed/nmNqz74EOPE",
    id: 14,
    user: {
      name: "Planet Calm",
      social: {
        instagram : 'https://www.instagram.com/planet_calm_/',
      },
    },
  },
  {
    img: "/assets/images/category-15.png",
    name: "Mystery",
    src: "https://www.youtube.com/embed/OhBo1A8atuA",
    id: 15,
    user: {
      name: "tsukiwastaken96",
      social: {
        
      },
    },
  },
  {
    img: "/assets/images/category-8.png",
    name: "Fantasy",
    src: "https://www.youtube.com/embed/XxEhuSJF780",
    id: 16,
    user: {
      name: "havy_",
      social: {
        
      },
    },
    
  },
];

export default function Box() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const statusSpace = useSelector((state) => state.reducerLayoutSpace);
  const [valueRange, setValueRange] = React.useState("100");
  const [arrow, setArrow] = React.useState(true);
  const [randomSpace, setRandomSpace] = React.useState(0);
  const [idActive, setIdActive] = React.useState(-1);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const infoUserOfTheme = useSelector((state) => state.reducerInfoUserOfTheme);
  React.useEffect(() => {
    setInterval(() => {
      clock();
    }, 1000);
  });
  function clock() {
    var w = new Date();
    var hours = w.getHours();
    var minutes = w.getMinutes();
    if (10 > hours) {
      hours = "0" + hours;
    }
    setHours(hours);
    if (10 > minutes) {
      minutes = "0" + minutes;
    }
    setMinutes(minutes);
  }
  const ChangeValue = (e) => {
    // setValueRange(e.target.value);
  };
  const next = () => {
    let scrollElm = document.getElementById("scroll-list-category");
    if (scrollElm) scrollElm.scrollLeft += 150;
  };
  const prev = () => {
    let scrollElm = document.getElementById("scroll-list-category");
    if (scrollElm) scrollElm.scrollLeft -= 150;
  };
  const hideBox = () => {
    dispatch(setLayoutSpace(!statusSpace));
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
  };
  const showBox = () => {
    dispatch(setLayoutSpace(!statusSpace));
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
  };
  const setTopic = (item) => {
    setIdActive(item.id);
    dispatch(setLayoutTopic(item.src));
    dispatch(setInfoUser(item.user));
    const randomNumberSpace = Math.floor(Math.random() * 1000);
    setRandomSpace(`/app?space=${randomNumberSpace}`);
    history(`/app?space=${randomNumberSpace}`);
  };

  return (
    <>
      <div className="box-ui" id="box-ui">
        {statusSpace ? (
          <div className="hide" onClick={hideBox}>
            <Icon.BackBgColor />
          </div>
        ) : (
          <div className="hide" onClick={showBox}>
            <Icon.PrevBgColor />
          </div>
        )}
        <div className="p-lr">
          <div className="flex-space space">
            <div className="explore">Explore 🔎</div>
            <div className="time">
              {hours}:{minutes} PM
            </div>
          </div>
          <div className="flex-space">
            <div className="title">Shuffle Spaces</div>
            <div className="icon flex">
              <div onClick={prev}>
                <IoChevronBack />
              </div>
              <div onClick={next}>
                <IoChevronForward />
              </div>
            </div>
          </div>
          <div className="guide">
            Click an emoji multiple times for more content
          </div>
          <div className="ovl-hidden" id="scroll-list-category">
            <div className="all-list">
              <div className="list">
                {list1.map((item, index) => {
                  return (
                    <Tooltip title={item.name} color="#e39685" key={index}>
                      <div
                        onClick={() => setTopic(item)}
                        className={
                          idActive === item.id ? "item active" : "item"
                        }
                      >
                        <img src={item.img} alt="" />
                      </div>
                    </Tooltip>
                  );
                })}
              </div>
              <div className="list">
                {list2.map((item, index) => {
                  return (
                    <Tooltip title={item.name} color="#e39685" key={index}>
                      <div
                        onClick={() => setTopic(item)}
                        className={
                          idActive === item.id ? "item active" : "item"
                        }
                      >
                        <img src={item.img} alt="" />
                      </div>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="box-music">
          <div className="bg">
            <div className="flex-space">
              <div className="left">
                <h6>Modern Lofi Vibes</h6>
                <p>Share Space</p>
              </div>
              <div className="right">
                <div className="icon heart">
                  <Icon.Love />
                </div>
                <div className="icon">
                  <Icon.ListLike />
                </div>
              </div>
            </div>
            <div className="flex sound">
              <div className="icon flex-center">
                {valueRange === "0" ? <Icon.SoundOff /> : <Icon.Sound />}
              </div>
              <div className="value">
                <input
                  id=""
                  onChange={ChangeValue}
                  type="range"
                  name=""
                  value={valueRange}
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>
          <div className="list-music">
            <div className="item">
              <div className="bg-color">
                <Icon.CircleLinear />
              </div>
              <div className="info">
                <div className="tag">
                  <div className="icon">
                    <HiCheckCircle />
                  </div>
                  @{infoUserOfTheme ? infoUserOfTheme.name : ""}
                </div>
                <div className="list-social">
                  {infoUserOfTheme && infoUserOfTheme?.social?.instagram ? (
                    <a
                      href={infoUserOfTheme?.social?.instagram}
                      target="_blank"
                    >
                      <div className="item">
                        <Icon.Instagram />
                      </div>
                    </a>
                  ) : null}
                  {infoUserOfTheme && infoUserOfTheme?.social?.tiktok ? (
                    <a
                      href={infoUserOfTheme?.social?.tiktok}
                      target="_blank"
                    >
                      <div className="item">
                        <Icon.TikTok />
                      </div>
                    </a>
                  ) : null}
                  {infoUserOfTheme && infoUserOfTheme?.social?.url ? (
                    <a
                      href={infoUserOfTheme?.social?.url}
                      target="_blank"
                    >
                      <div className="item">
                        <Icon.Url />
                      </div>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer flex-a-center">
          <div className="flex">
            <div className="item flex-center">🎥 Showcase</div>
            <div className="item flex-center">
              <BsShareFill />
            </div>
            <div className="item flex-center">
              <AiOutlineQuestionCircle />
            </div>
            <div className="item flex-center">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
