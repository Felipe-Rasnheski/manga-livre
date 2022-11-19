import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0; margin: 0; border: 0;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    overflow-x: hidden;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }
`
