import {createGlobalStyle} from 'styled-components'
import {Colors} from './assets/colors'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${Colors.white};
  }

  button {
    cursor: pointer;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }


  textarea {
    font-family: inherit;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: ${Colors.grayLight};

  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

`

export default GlobalStyle
