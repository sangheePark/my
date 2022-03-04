import { EEventType } from "@enum/CommonEnum";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";

interface IProps {
  onClose?: (eventType: EEventType) => void;
}
const ExMenu: React.FC<IProps> = ({
  onClose = () => {},
}): React.ReactElement => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => {
              onClose(EEventType.CANCEL);
            }}
          >
            Back
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ExMenu;
