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
    --shadow-color: rgba(200, 200, 200, 0.7);
    --whitetwenty-color: rgba(243, 243, 243, 0.2);
    --whitefifty-color: rgba(243, 243, 243, 0.5);
    //--whitefourty-color: rgba(243, 243, 243, 0.4);
    --transition: 300ms ease-in; 
    --container-padding: 20px;
  }

  body {
    background-color: var(--whitefifty-color);
    font-family: 'Manrope', sans-serif;
    color: var(--text-color);
    word-wrap: break-word;
    line-height: 1.2;
  }

h1, h2, p {
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
button {
  cursor: pointer;
  font-family: inherit;
}
`;

export default GlobalStyles;
