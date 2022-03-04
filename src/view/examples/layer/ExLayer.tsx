import {
  Box,
  Container,
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import { useLayerFunction } from "@provider/LayerPopupContext";
import { uniqueId } from "lodash";
import React from "react";
import { useHistory } from "react-router-dom";
import ExMenu from "../common/ExMenu";
import ExLayerView from "./ExLayerView";

const ExLayer: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const { layerFunction } = useLayerFunction();
  return (
    <>
      <ExMenu
        onClose={() => {
          history.goBack();
        }}
      ></ExMenu>
      <Box>
        <MenuList>
          <MenuItem
            onClick={() => {
              // history.push(`${match.path}/chart`);
              const title = uniqueId(`제목-`);
              layerFunction.open(ExLayerView, { title });
            }}
          >
            <ListItemText>열기</ListItemText>
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
      </Box>
    </>
  );
};

export default ExLayer;
