import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const LogInButton = () => {
  const { loginWithRedirect, logout, error, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return <div>...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return isAuthenticated ? (
    <button style={{ padding: "5px" }} onClick={() => logout()}>
      Logout
    </button>
  ) : (
    <button
      style={{ padding: "5px" }}
      onClick={() =>
        loginWithRedirect({
          appState: {
            returnTo: "/",
          },
        })
      }
    >
      Login
    </button>
  );
};

export default LogInButton;
