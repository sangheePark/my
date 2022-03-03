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
import ExChart from "./chart/ExChart";

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
          <MenuList>
            <MenuItem
              onClick={() => {
                history.push(`${match.path}/chart`);
              }}
            >
              <ListItemText>차트</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>서버 통신</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
          </MenuList>
        </Switch>
      </Container>
    </>
  );
};

export default ExampleRoute;
