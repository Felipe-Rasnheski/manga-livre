import styled from 'styled-components'

export const AsideContainer = styled.aside`
  display: none;
  width: 15rem;
  padding: 0.5rem 1rem;
  position: absolute;
  background: ${(props) => props.theme['--gray-700']};

  header {
    display: flex;
    justify-content: space-between;
  }

  &[data-menu='menuShow'] {
    display: block;
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

    button {
      background: transparent;
      color: ${(props) => props.theme['--gray-100']};
      font-weight: bold;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      width: 100%;

      a {
        padding: 0.25rem 0;
        margin: 0;
        width: 100%;
      }
    }

    h3 {
      margin-top: 0.75rem;
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

    a.active {
      background: ${(props) => props.theme['--khaki-web']};
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
