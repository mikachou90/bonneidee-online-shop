import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import appConfig from "./appConfig.json";

const config = {
  domain: appConfig.domain,
  clientId: appConfig.clientId,
  redirectUri: window.location.origin,
  audience: "https://bonneidee.com", // to get the audience from API
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
      audience={config.audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0AppProvider;
