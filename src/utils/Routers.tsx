import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Register from "../pages/Register/Register";
import Notes from "../pages/Notes/Notes";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/notes" component={Notes} />
        <Redirect from="*" to="/register" />
      </Switch>
    </Router>
  );
};

export default Routers;
