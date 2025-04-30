import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import GlobalStyles from './GlobalStyled.js';
import App from './App';
import { defineConfig } from 'vite'

import { analyzer } from 'vite-bundle-analyzer'

export default defineConfig({
  plugins: [
    analyzer()
  ]
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/steering-wheels">
          <Global styles={GlobalStyles}/>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
);