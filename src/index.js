import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./app/store";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
