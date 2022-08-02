import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
function App() {
  const checkDevice = detectMob();
  return (
    <div className="App">

      {
        checkDevice ? <h1 className="text-center">
          Device not supported
        </h1> : <Router>
        <Routes>
          {routes
            ? routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    element={route.main}
                  />
                );
              })
            : null}
        </Routes>
      </Router>
      }
      
    </div>
  );
}

export default App;
