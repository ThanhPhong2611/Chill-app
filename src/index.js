import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/all.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import myReducer from './reducers/reducers';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import 'swiper/swiper-bundle.css';
import thunk from 'redux-thunk'

const store = createStore(
  myReducer, applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


