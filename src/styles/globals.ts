import { createGlobalStyle } from 'styled-components'

import { Lato } from '@next/font/google'

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

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
    background-color: ${(props) => props.theme['--gray-800']};
    color: ${(props) => props.theme['--gray-300']};
    font-size: 1rem;
    overflow-x: hidden;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  html, body, input, textarea, button {
    font-family: ${lato.style.fontFamily}, sans-serif;
    font-weight: 400;
  }
`
