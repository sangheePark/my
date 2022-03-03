import React, { useState } from "react";
import { MLogin } from "@model/UserModel";

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
    // console.log('value:' + value)
    setState({
      ...state,
      [name]: value,
    });
  };
  return <>테스트 화면 1</>;
};

export default Login;
