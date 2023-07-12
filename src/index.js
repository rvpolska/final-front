import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-oju2a4i403j3nlnf.us.auth0.com"
    clientId="uTXCnH7iBNxocJWmJFWj29lQExBQiWm5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);
