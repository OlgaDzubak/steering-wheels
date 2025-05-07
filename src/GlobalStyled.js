import { css } from '@emotion/react';

const GlobalStyles = css`
*,
*::before,
*::after {
  box-sizing: border-box;
}

  @font-face {
    src: url('../src/assets/fonts/Manrope-Regular.ttf') format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    src: url(../src/assets/fonts/Manrope-SemiBold.ttf) format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
   src: url(../src/assets/fonts/Manrope-SemiBold.ttf) format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }

  :root {    
    --text-color: rgba(30, 30, 30);
    --back-color: rgba(30, 30, 30, 0.1);

    --header-text-color:rgb(30, 30, 30);
    --header-back-color: rgb(240, 240, 240);

    --footer-text-color: var(--header-back-color);
    --footer-back-color: var(--header-text-color);
    
    --scroll-up-btn: rgba(100, 100, 100, 1);
    --lightbox-alt: rgba(100, 100, 100, 0.8);
    --shadow-color: rgba(1, 1, 1, 0.7);
    --whitetwenty-color: rgba(243, 243, 243, 0.2);
    --whitefifty-color: rgba(243, 243, 243, 0.5);
    --red :  rgb(194, 33, 33);
    --transition: 300ms ease-in; 
    --container-padding: 40px;
  }

  body {
    min-width: 320px;
    background-color: var(--whitefifty-color);
    font-family: 'Manrope', sans-serif;
    color: var(--text-color);
    word-wrap: break-word;
    line-height: 1.2;
    margin: 0;
    
  }

  #root{
    min-height: calc(100vh - 16px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
    
  img {
    display: block;
    max-width: 100%;
  }
`;



export default GlobalStyles;
