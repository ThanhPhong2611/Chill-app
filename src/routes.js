import Home from "./pages/Home";
import App from "./pages/App";
const routes = [
  { path: "/", exact: true, main: <Home /> },
  { path: "/app", exact: false, main: <App /> },
];

export default routes;
