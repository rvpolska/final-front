import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-cuwmyzs3xvs26r7l.us.auth0.com"
    clientId="sfWJkc15IiehIO3FZ9JL3PanRz00AS05"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);
