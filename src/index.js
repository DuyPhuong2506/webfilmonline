import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'sweetalert2/src/sweetalert2.scss'

import { Provider } from 'react-redux';
import {  store } from './Redux';

ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>,
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/
