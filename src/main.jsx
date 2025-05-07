import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import GlobalContextProvider from "./context/GlobalContext";
import GlobalStyles from './GlobalStyled.js';
import App from './App.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/steering-wheels">
        <Global styles={GlobalStyles}/>
          <GlobalContextProvider >
            <App />
          </GlobalContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
);