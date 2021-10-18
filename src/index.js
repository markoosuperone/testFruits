import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FruitShopStore from "./store/FruitShopStore";


export const Context = createContext(null);
ReactDOM.render(
  <Context.Provider
    value={{  FruitShopStore: new FruitShopStore() }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
