import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
  
  html{
    @media (max-width: 1700px){
      font-size: 90%;
    }
    @media (max-width: 1600px){
      font-size: 85%;
    }
    @media (max-width: 1500px){
      font-size: 80%;
    }
    @media (max-width: 1400px){
      font-size: 75%;
    }
    @media (max-width: 1300px){
      font-size: 70%;
    }
  }

  body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;

    &:hover {
      background-color: #23d997;
      color: white;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }

  h2 {
    color: white;
    font-weight: lighter;
    font-size: 4rem;
  }

  h3 {
    color: white;
  }

  h4 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }

  a {
    font-size: 1.1rem;
  }

  span {
    font-weight: bold;
    color: #23d997
  }

  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%
  }

  ul {
    list-style-type: circle;
    list-style-position: inside;
    padding: 3rem 0;
  }

  li {
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%
  }
`;

export default GlobalStyle;
