import React, { useState } from "react";
import { MLogin } from "@model/UserModel";
import { Box, Container, CssBaseline } from "@mui/material";

export interface ILoginProps {
  value: MLogin;
  onClick: (login: MLogin) => void;
}
const Login: React.FC<ILoginProps> = ({
  value,
  onClick,
}): React.ReactElement => {
  const [state, setState] = useState<MLogin>({
    ...value,
  });

  const onFinish = (values: any) => {
    // console.log('value:' + JSON.stringify(state))
    onClick(state);
  };

  const handelChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = e;

    // console.log('name:' + name)
    console.log("value:" + value);
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </div>
  );
};

export default Login;
