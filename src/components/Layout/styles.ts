import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;

  .contant {
    position: relative;
    display: block;
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100vw;

    &[data-width='shink'] {
      max-width: calc(100vw - 15rem);
    }

    &::-webkit-scrollbar {
      width: 0.65rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #1a1c21ff;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #212121ff;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      box-shadow: inset 0 0 2px #0c090f;
    }
  }
`
