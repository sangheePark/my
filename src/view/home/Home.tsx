import { MUser } from "@model/UserModel";
import React from "react";

interface IProps {
  user: MUser;
  onLogOut: () => void;
}
const Home: React.FC<IProps> = ({ user, onLogOut }): React.ReactElement => {
  return (
    <div>
      home: user: {user.id}
      <button onClick={onLogOut}> 로그아웃</button>
    </div>
  );
};

export default Home;
