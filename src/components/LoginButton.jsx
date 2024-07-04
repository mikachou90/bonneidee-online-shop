import "../styles/header.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { LoadingOverlay } from "./Loading";

const LogInButton = () => {
  const { loginWithRedirect, logout, error, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return <LoadingOverlay loadingText="登入中..." />;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return isAuthenticated ? (
    <NavLink
      id="logoutBtn"
      onClick={() =>
        logout({
          logoutParams: { returnTo: window.location.origin },
        })
      }
    >
      登出
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
      登入/註冊
    </NavLink>
  );
};

export default LogInButton;
