import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './Context/StoreContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
