import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import { INCREASE_HOUR, INCREASE_MINUTE } from "./actions";

const INITIAL_STATE = {
  hour: 12,
  minute: 34
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE_HOUR:
      return { ...state, hour: state.hour + 1 };
    case INCREASE_MINUTE:
      return { ...state, hour: state.minute + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
