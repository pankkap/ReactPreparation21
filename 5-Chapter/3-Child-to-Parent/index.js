// index.js is the Enter point for React Application and
// it inject React UI inside index.html to make singal page application

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const element = <h1>Hello This is Our First App</h1>;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// <React.StrictMode> is sort of helper component
// It Verify that the components inside are following recommended practices
