import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./layouts/App";
import { CustomBrowserRouter, customHistory } from "./CustomBrowserRouter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CustomBrowserRouter>
      <App />
    </CustomBrowserRouter>
  </StrictMode>,
  rootElement
);

setTimeout(() => {
  customHistory.push("/contact");
}, 1000);
