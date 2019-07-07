import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Pedidos from "../pages/pedidos";
import { authenticatedPage } from "./authenticatedPage.js";
//<PrivateRoute exact path="/pedidos" component={Pedidos} />
const AllRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/pedidos" component={authenticatedPage(Pedidos)} />
  </Switch>
);

export default AllRoutes;
