import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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
  line-height: 1;
  font-family: 'Roboto', sans-serif;
  background-color: #444444;
  color: #ffffff;
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
}

button,
label,
input[type="checkbox"] {
  cursor: pointer;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
