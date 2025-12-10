import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './Context/StoreProvider';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
