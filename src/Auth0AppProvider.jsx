import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import config from "./config.js";

const appConfig = {
  domain: config.domain,
  clientId: config.clientId,
  redirectUri: window.location.origin,
  audience: "https://bonneidee.com", // to get the audience from API
};

const Auth0AppProvider = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Auth0Provider
      domain={appConfig.domain}
      clientId={appConfig.clientId}
      onRedirectCallback={(appState) => {
        const url = appState?.returnTo || window.location.origin;
        navigate(url);
      }}
      authorizationParams={{
        scope: "profile email read:users",
        redirect_uri: appConfig.redirectUri,
        ...(appConfig.audience ? { audience: appConfig.audience } : null),
      }}
      audience={appConfig.audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0AppProvider;
