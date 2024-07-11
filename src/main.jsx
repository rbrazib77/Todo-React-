import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../feartures/store.jsx";
import "react-toastify/dist/ReactToastify.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </HelmetProvider>
);
