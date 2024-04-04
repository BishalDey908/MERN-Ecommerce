
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
  domain="dev-ygyefair4rcizx5d.us.auth0.com"
  clientId="ACI8tfh9uMyloV4JAjDtIr80KPMDM9A2"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
<BrowserRouter>
  <App />
  </BrowserRouter>
</Auth0Provider>,
 
 
 
)
