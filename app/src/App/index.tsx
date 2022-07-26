/*
 **App
 **
 ** This component is the skeleton around the all pages
 ** should only contain the code that should be seen on all pages. (e.g. NavigationBar)
 **
 */

import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ApplicationRouter } from "./router/ApplicationRouter/index";
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  client_id: "TourismB2C",
  authority: "https://ssolegacy-staging.setur.software",
  redirect_uri: "http://localhost:3000",
  silent_redirect_uri: "http://localhost:3000",
  scope: "openid profile",
  automatic_silent_renew: "true",
  response_type: "code"
};

const newConfig = {
  client_id: "kbyuFDidLLm280LIwVFiazOqjO3ty8KH",
  authority: "https://samples.auth0.com/authorize",
  redirect_uri: "https://openidconnect.net/callback",
  silent_redirect_uri: "http://localhost:3000",
  scope: "openid profile",
  automatic_silent_renew: "true",
  response_type: "code"
};

export function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <BrowserRouter>
        <Helmet
          titleTemplate='%s - Rampa'
          defaultTitle='We bring you best quality products with cheaper prices'
        >
          <meta name='description' content='export import stuff' />
        </Helmet>
        <ApplicationRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}
