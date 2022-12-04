import styled from 'styled-components'

export const AsideContainer = styled.aside`
  display: none;
  width: 15rem;
  min-width: 15rem;
  padding: 0.5rem 1rem;
  position: absolute;
  z-index: 1;
  background: ${(props) => props.theme['--gray-700']};

  header {
    display: flex;
    justify-content: space-between;
  }

  &[data-menu='menuShow'] {
    display: block;
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${(props) => props.theme['--gray-600']};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['--gray-600']};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 2px ${(props) => props.theme['--gray-800']};
  }

  .logo {
    display: inline-block;
    width: 170px;
    height: 38px;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  .close {
    background: transparent;
    height: 2rem;
    width: 2rem;
    color: ${(props) => props.theme['--gray-300']};

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme['--gray-600']};
      border-radius: 9999px;
    }
  }

  nav {
    margin: 0.75rem 0;

    .home {
      color: ${(props) => props.theme['--gray-100']};
      font-weight: bold;
      font-size: 1.1rem;
      gap: 0.5rem;
      padding: 0.25rem 0;
      margin: 0;
    }

    h3 {
      margin: 0.5rem 0;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(props) => props.theme['--gray-100']};
      cursor: default;

      span {
        margin-left: auto;
        line-height: 0;
        border-radius: 9999px;

        &:hover {
          background-color: ${(props) => props.theme['--gray-600']};
          cursor: pointer;
        }
      }
    }

    a {
      text-decoration: none;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      padding: 0.25rem;
      margin-left: 0.25rem;
      border-radius: 4px;
      color: ${(props) => props.theme['--gray-200']};

      span {
        margin-left: auto;
        line-height: 0;
        border-radius: 9999px;

        &:hover {
          background-color: ${(props) => props.theme['--gray-600']};
        }
      }

      &:hover {
        background-color: ${(props) => props.theme['--gray-600']};
      }
    }

    a.active,
    button.active {
      padding-left: 0.5rem;
      background: ${(props) => props.theme['--khaki-web']};
      box-shadow: none;
      font-weight: bold;
    }
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 668px) {
    position: relative;
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`
