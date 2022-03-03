import React from "react";
import { Route, RouteProps, RouteComponentProps } from "react-router-dom";

type RoutePageComponent =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;
interface IProps {
  page: RoutePageComponent;
}

//비권한 접근시 사용
const NormalRoute: React.FC<IProps & RouteProps> = (props) => {
  const Page: RoutePageComponent = props.page;
  return <Route {...props} render={(props) => <Page {...props} />} />;
};
export default NormalRoute;
