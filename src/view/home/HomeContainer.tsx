import { UserAction } from "@module/action";
import { userSelector } from "@module/reducer/UserReducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";

const HomeContainer: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const onLogOut = () => {
    dispatch(UserAction.LOGOUT.action());
  };

  return <Home user={user} onLogOut={onLogOut}></Home>;
};

export default HomeContainer;
