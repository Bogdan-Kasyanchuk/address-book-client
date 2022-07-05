import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import {
  firstColor,
  secondColor,
  accentColor,
  bgColor,
} from 'styles/variables';

const GlobalStyles = createGlobalStyle`
${normalize}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  padding: 0;
  border: 0;
  outline: none;
}

*, h1,
h2,
h3 {
  margin: 0;
}

html,
body {
  height: 100%;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: ${firstColor};
  line-height: 1;
  background-color: ${bgColor};
  background-image: url('https://www.transparenttextures.com/patterns/inspiration-geometry.png');
}

h1,
h2,
h3,
button,
input,
textarea {
  font-weight: inherit;
  font-size: inherit;
}

ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

button,
input,
textarea {
  font-family: inherit;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

button,
label,
input[type="checkbox"] {
  cursor: pointer;
}

button
 {
  padding: 6px;
  font-size: 20px;
  line-height: 1;
  border: 1px solid ${firstColor};
  background-color: ${firstColor};

  :hover,
  :focus-visible {
    color: ${firstColor};
    border-color: ${accentColor};
    background-color: ${accentColor};
  }
}

input,
textarea{
  margin-top: 8px;
  width: 100%;
  padding: 4px 8px;
  font-size: 20px;
  color: ${secondColor};
  line-height: 1.1;
  border: 2px solid ${firstColor};

  :focus {
    border-color: ${accentColor};
  }  
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
