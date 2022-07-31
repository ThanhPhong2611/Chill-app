import Navbar from "./Nav";
import SpaceView from "./SpaceView";
import Clock from "./Clock";
import Box from "./Box";
import Tool from "./Tool";
import Media from './Media';
import ModalNotice from '../../View/Modal/notice';
export default function App() {
  return (
    <>
    <ModalNotice />
      <Box />
      <Tool />
      <SpaceView />
      <Clock />
      <Navbar />
      <Media />
    </>
  );
}
