import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from './redux/ReduxStore';
import StoreContext from './StoreContext';


let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

store.subscribe(() => {
  /* let state = store.getState(); */
  rerenderEntireTree();
});