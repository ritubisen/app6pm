import { useContext } from "react";
import { MyLoginContext } from "./LoginContext";

const AuthApp = () => {
  const { user, logout } = useContext(MyLoginContext);

  return (
    <div>
      <h1>Welcome, {user.name} </h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthApp;