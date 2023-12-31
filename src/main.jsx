import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyled.js';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/steering-wheels">
          <GlobalStyle />
          <App />
      </BrowserRouter>
  </React.StrictMode>,
);
