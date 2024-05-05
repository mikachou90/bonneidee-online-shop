import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import auth0Config from "./auth0Config.json";

const config = {
  domain: auth0Config.domain,
  clientId: auth0Config.clientId,
  redirectUri: window.location.origin,
  // audience: process.env.REACT_APP_AUTH0_AUDIENCE,
};

const Auth0AppProvider = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      onRedirectCallback={(appState) => {
        const url = appState?.returnTo || window.location.origin;
        navigate(url);
      }}
      authorizationParams={{
        scope: "profile email read:users",
        redirect_uri: config.redirectUri,
        ...(config.audience ? { audience: config.audience } : null),
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0AppProvider;
