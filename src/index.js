import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';

import {BrowserRouter } from 'react-router-dom';
// Bootstrap Bundle icon
import "bootstrap-icons/font/bootstrap-icons.css";
// Bootstrap Bundle css
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ScrollToTop from "./modules/ScrollToTop";
import { Provider, useSelector } from "react-redux";
import {store} from './redux/store'
import { ToastContainer } from "react-toastify";
import { SocketProvider } from './socket/SocketProvider';
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <Provider store={store}>

    <BrowserRouter>
<ScrollToTop/>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();