import {
  Container,
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import NormalRoute from "@view/route/NormalRoute";
import React from "react";
import { RouteComponentProps, Switch, useHistory } from "react-router-dom";
import ExChart from "@view/examples/chart/ExChart";
import ExLayer from "./layer/ExLayer";

const ExampleRoute: React.FC<RouteComponentProps> = ({ match }) => {
  const history = useHistory();
  return (
    <>
      <Container>
        <Switch>
          <NormalRoute
            exact
            path={`${match.path}/chart`}
            page={ExChart}
          ></NormalRoute>
          <NormalRoute
            exact
            path={`${match.path}/layer`}
            page={ExLayer}
          ></NormalRoute>
          <>
            <MenuList>
              <MenuItem
                onClick={() => {
                  history.push(`${match.path}/chart`);
                }}
              >
                <ListItemText>차트</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push(`${match.path}/layer`);
                }}
              >
                <ListItemText>레이어</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemText>Web Clipboard</ListItemText>
              </MenuItem>
            </MenuList>
          </>
        </Switch>
      </Container>
    </>
  );
};

export default ExampleRoute;
