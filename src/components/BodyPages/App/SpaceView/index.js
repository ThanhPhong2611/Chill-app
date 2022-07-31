import { useDispatch, useSelector } from "react-redux";
import "./spaceView.scss";
export default function SpaceView() {
  const src = useSelector((state)=>state.reducerLayoutTopic);
  const autoPlaySrc = '?autoplay=1&amp;mute=1&amp;controls=0&amp;start=40&amp;origin=https%3A%2F%2Flifeat.io&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1'
  return (
    <>
      <div className="space-view">
        <div style={{ height: "100%", width: "100%" }}>
          <iframe
            allowfullscreen
            allow="autoplay"
            title="morning walks. 🌻 anime lofi mix"
            width="100%"
            height="100%"
            src={src + autoPlaySrc}
          ></iframe>
        </div>
      </div>
    </>
  );
}
