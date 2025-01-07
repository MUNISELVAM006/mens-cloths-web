import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GoogleOAuthProvider clientId="251964338123-tf6h7i2re7359tkshimb7r1g18rodla8.apps.googleusercontent.com">
   
          <BrowserRouter>

                <App/>

           </BrowserRouter>
   
     </GoogleOAuthProvider>
   
  </StrictMode>,
)
 