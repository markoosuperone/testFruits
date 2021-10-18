import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./commponents/AppRouter";
import NavBar from "./commponents/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
