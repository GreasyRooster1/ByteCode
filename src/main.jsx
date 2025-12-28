import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css";
import "./radixTheme.css"
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {Theme} from "@radix-ui/themes";
import {AuthProvider} from "react-oidc-context";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_nQhVA9vHC",
    client_id: "3jssdi6ka6iq8s2aeil20f9jg5",
    redirect_uri: import.meta.env.DEV?"http://localhost:5173/__authRedirect":(window.location.host??"https://bytecodeonline.com/__authRedirect"),
    response_type: "code",
    scope: "phone openid email",
};


createRoot(document.getElementById('root')).render(

  <StrictMode>
      <AuthProvider {...cognitoAuthConfig}>
          <BrowserRouter>
            <Theme radius="large" accentColor="purple" grayColor="gray" panelBackground="solid" scaling="100%" hasBackground={false} appearance={"dark"}>
                <App />
            </Theme>
          </BrowserRouter>
      </AuthProvider>
  </StrictMode>,
)
