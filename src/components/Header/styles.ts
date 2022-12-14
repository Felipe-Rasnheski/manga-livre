import * as Avatar from '@radix-ui/react-avatar'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  position: fixed;
  z-index: 2;
  display: flex;
  padding: 0.5rem 1.3rem;
  transition: background-color 0.2s, border-color 0.2s;

  &[data-width='shink'] {
    max-width: calc(100vw - 15rem);
  }

  &[data-scrollY='scrollDown'] {
    background-color: ${(props) => props.theme['--gray-900']};
    border-bottom: 1px solid ${(props) => props.theme['--khaki-web']};
  }

  &[data-scrollY='scrollDownDown'] {
    background-color: ${(props) => props.theme['--gray-800']};
    border-bottom: 1px solid ${(props) => props.theme['--grullo']};
  }

  nav {
    height: 3rem;
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    &[data-nav='navHidden'] {
      .menuAndLogo {
        display: none;
      }
    }

    .menuAndLogo {
      display: flex;
      align-items: center;

      .menu {
        background-color: transparent;
        margin: 0.5rem 0;
        color: ${(props) => props.theme['--gray-200']};

        &:hover {
          cursor: pointer;
        }
      }

      .logo {
        display: inline-block;
        width: 54px;
        height: 34px;
        margin: 0.5rem;
        background-position: top;
        background-repeat: no-repeat;
      }
    }

    .formAndAvatar {
      height: 3rem;
      display: flex;
      flex: 1;
      gap: 1rem;
      flex-direction: row-reverse;
      align-items: center;

      a {
        &:focus {
          border-radius: 9999px;
        }
      }
    }

    form {
      display: flex;
      align-items: center;
      height: 3rem;

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;

        input {
          display: none;

          &::placeholder {
            color: ${(props) => props.theme['--gray-400']};
          }
        }

        &:hover {
          cursor: pointer;
        }
      }
    }

    a {
      height: 2.5rem;
    }
  }

  @media (min-width: 576px) {
    nav {
      .menuAndLogo {
        .logo {
          width: 170px;
          height: 38px;
          margin: 0.5rem;
          background-position: bottom;
        }
      }
    }
  }

  @media (min-width: 668px) {
    nav {
      form {
        div {
          background: ${(props) => props.theme['--gray-600']};

          input {
            display: inline-block;
            padding: 0.25rem;
            font-size: 1.1rem;
            background-color: transparent;
            box-shadow: none;
            color: ${(props) => props.theme['--gray-200']};
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`

export const AvatarContainer = styled(Avatar.Root)`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['--gray-700']};
  color: ${(props) => props.theme['--gray-200']};
  border-radius: 8px 8px 0 0;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`
