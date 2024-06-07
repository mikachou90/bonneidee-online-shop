import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

const LogInButton = () => {
  const { loginWithRedirect, logout, error, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return <Loading loadingText="登入中..." />;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return isAuthenticated ? (
    <NavLink id="logoutBtn" onClick={() => logout()}>
      Logout
    </NavLink>
  ) : (
    <NavLink
      id="loginBtn"
      onClick={() =>
        loginWithRedirect({
          appState: {
            returnTo: "/",
          },
        })
      }
    >
      Login
    </NavLink>
  );
};

export default LogInButton;
