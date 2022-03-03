import {
  Box,
  Container,
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import React from "react";

const ExLayer: React.FC = (): React.ReactElement => {
  return (
    <Box>
      <MenuList>
        <MenuItem
          onClick={() => {
            // history.push(`${match.path}/chart`);
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
  );
};

export default ExLayer;
