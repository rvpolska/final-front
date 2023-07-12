import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MyAccount from "./MyAccount";
import Main from "./Main";
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>LOG IN</button>;
  }

  return (
    <div>
      <MyAccount />
      <Main />
    </div>
  );
}

export default Login;
