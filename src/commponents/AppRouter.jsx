import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { publicRouter } from "../router";
import { SHOP_ROUTE } from "../utils/const";

function AppRouter() {
  
  return (
    <Switch>
      {publicRouter.map(({ path, Component }, i) => (
        <Route key={i} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
}

export default AppRouter;
