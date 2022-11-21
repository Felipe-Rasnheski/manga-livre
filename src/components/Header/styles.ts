import * as Avatar from '@radix-ui/react-avatar'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  background: #222221;

  .container {
    display: flex;
    flex: 1;
    justify-content: space-between;

    .container-form {
      display: flex;
      align-items: center;

      button {
        background: transparent;
        border: 1px solid transparent;
        padding: 0.25rem;
        border-radius: 6px;
        color: ${(props) => props.theme['--khaki-web']};

        svg {
          line-height: 0;
        }

        &:hover {
          cursor: pointer;
          border-color: ${(props) => props.theme['--gray-900']};
          color: ${(props) => props.theme['--grullo']};
        }
      }
    }

    .toggleClose {
      display: none;
    }
  }

  .toggleOpen {
    nav {
      flex: 0;
    }

    .navbar {
      width: 0;
      transform: scaleY(0);
      transform: scaleX(0);
    }

    .container-form {
      display: flex;
      flex: 1;
      align-items: center;

      form {
        display: flex;
        flex: 1;
        align-items: center;
        gap: 0.5rem;
      }

      .toggleClose {
        display: flex;
        flex: 1;
        gap: 0.25rem;
        max-width: 550px;
        margin: 0 auto;

        button {
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 0.15rem;
        }

        input {
          height: 1.5rem;
          flex: 1;
          border-radius: 6px;
          padding: 0.25rem 0.5rem;
          box-shadow: 0px -3px 1px ${(props) => props.theme['--khaki-web']},
            0px 3px 1px ${(props) => props.theme['--grullo']};
        }
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    height: fit-content;
    margin-top: auto;
    flex: 1;

    a {
      font-size: 1.2rem;
      padding: 0.75rem;
      text-decoration: none;
      color: ${(props) => props.theme['--khaki-web']};
      border: 1px solid transparent;

      &:hover {
        transition: all 0.2s linear;
        color: ${(props) => props.theme['--grullo']};
        border-bottom-color: ${(props) => props.theme['--khaki-web']};
      }
    }

    .logo {
      padding: 0.65rem 0.5rem;
      border-bottom: 1px solid transparent;

      a {
        border-right: 1px solid ${(props) => props.theme['--gray-900']};
        padding: 1rem 4rem 0.8rem 0;
        display: block;
        width: 3.5rem;
        height: 100%;
        overflow: hidden;
        background-position: top;

        &:hover {
          border-bottom-color: transparent;
          border-right-color: ${(props) => props.theme['--grullo']};
        }
      }
    }

    .navbar {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-around;
      line-height: 160%;
    }
  }

  img {
    background: transparent;
  }
`

export const AvatarContainer = styled(Avatar.Root)`
  min-width: 3.5rem;
  height: 3rem;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  margin: auto 0.5rem 0 1rem;
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
    width: 3rem;
    height: 3rem;
  }
`
