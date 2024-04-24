import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Details } from './pages/Details.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Details />
  </React.StrictMode>
);
