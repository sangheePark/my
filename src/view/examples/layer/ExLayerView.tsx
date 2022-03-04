import { EEventType } from "@enum/CommonEnum";
import {
  Box,
  Button,
  Container,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { ILayerProps, useLayerFunction } from "@provider/LayerPopupContext";
import { get, uniqueId } from "lodash";
import React from "react";
import ExMenu from "../common/ExMenu";

const ExLayerView: React.FC<ILayerProps<{ title: string }, undefined>> = ({
  layerId,
  onClose = () => {},
  params,
}): React.ReactElement => {
  const title = get(params, "title", "");
  const { layerFunction } = useLayerFunction();
  return (
    <>
      <ExMenu onClose={onClose}></ExMenu>
      <MenuList>
        <MenuItem>
          <ListItemText>{title}</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            layerFunction.open(ExLayerView, { title: uniqueId(`${title}-`) });
          }}
        >
          <ListItemText>또열기</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => {
            layerFunction.allClose();
          }}
        >
          <ListItemText>전체 닫기</ListItemText>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default ExLayerView;
