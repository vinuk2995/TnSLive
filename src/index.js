import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import './index.css'
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/reducer"
import { forbiddenWordsMiddleware } from "./middleware/middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
