import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Views from "./view";
import "./App.css";
import PrivateRoute from "@view/PrivateRoute";
import { useSelector } from "react-redux";
import Loader from "@component/Loader";
import { appSelector } from "@module/reducer/AppReducer";
import LoginRoute from "@view/LoginRoute";
import { MApp } from "@model/AppModel";

const App: React.FC = () => {
  const app: MApp = useSelector(appSelector);
  return (
    <>
      <Switch>
        <LoginRoute exact path="/login" page={Views.Login} />
        <PrivateRoute exact path="/" page={Views.Home} />
        <Route component={Views.NotFound} />
      </Switch>
      <Loader show={app.isLoading}></Loader>
    </>
  );
};

export default App;
