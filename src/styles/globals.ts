import { Lato, Poppins } from '@next/font/google'
import { createGlobalStyle } from 'styled-components'

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

export const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
})

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0; margin: 0; border: 0;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['--grullo']};
  }

  body {
    background-color: ${(props) => props.theme['--gray-800']};
    color: ${(props) => props.theme['--gray-300']};
    font-size: 1rem;
    overflow: hidden;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.65rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme['--gray-700']};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['--gray-600']};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      box-shadow: inset 0 0 2px ${(props) => props.theme['--gray-800']};
    }
  }

  html, body, input, textarea, button {
    font-family: ${lato.style.fontFamily}, sans-serif;
    font-weight: 400;
  }

  .main {
    width: calc(100vw - 15rem);
  }
`
