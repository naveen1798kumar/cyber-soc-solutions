import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AppProvider>
    </BrowserRouter>
  </StrictMode>
)
