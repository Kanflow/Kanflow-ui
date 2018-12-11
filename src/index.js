import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "./reducers.js";

import { createStore } from "redux";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
