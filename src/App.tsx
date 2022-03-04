import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Views from "@view/index";
import "@assets/css/App.css";
import PrivateRoute from "@view/route/PrivateRoute";
import { useSelector } from "react-redux";
import Loader from "@component/Loader";
import { appSelector } from "@module/reducer/AppReducer";
import { MApp } from "@model/AppModel";
import NormalRoute from "@view/route/NormalRoute";
import { LayerPopupProvider } from "@provider/LayerPopupContext";

const App: React.FC = () => {
  const app: MApp = useSelector(appSelector);
  return (
    <>
      <LayerPopupProvider>
        <Switch>
          {/* 테스트 화면 */}
          <NormalRoute path={["/ex"]} page={Views.Example} />
          {/* 정리 필요 */}
          <NormalRoute exact path="/login" page={Views.Login} />
          <PrivateRoute exact path="/" page={Views.Home} />
          <Route component={Views.NotFound} />
        </Switch>
        <Loader show={app.isLoading}></Loader>
      </LayerPopupProvider>
    </>
  );
};

export default App;
