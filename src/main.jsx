import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.scss";

import { registerSW } from "virtual:pwa-register";
if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
