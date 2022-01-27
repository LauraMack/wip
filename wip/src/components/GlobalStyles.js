import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font-heading: "Montserrat"
    --font-body: "Montserrat"
  }

  *,
  *:before,
  *:after {
      scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background: #3d348b; 
    font-family: "Montserrat";
  }


  h1, h2, h3, h4, h5, h6, button {
    font-family: "Montserrat";
    transition: 0.3s ease-in-out;
  }

  p, textarea {
    font-family: "Montserrat";
    color: #3d405b;
    transition: 0.3s ease-in-out;
  }

  input {
    font-family: "Montserrat";
  }

  ul {
      list-style: none;
      padding: 0;
      color: #3d405b;
  }

  li {
    transition: 0.3s ease-in-out;
  }


  a {
    text-decoration: none;
  }

  button {
    transition: 0.3s ease-in-out;
  }

`;

export default GlobalStyles;
