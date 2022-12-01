'use client'

import styled from 'styled-components'

export const MangaContainer = styled.div`
  .bannerBackground {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 17.5rem;
    filter: blur(4px);

    div {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center 25%;
      background-size: cover;
      object-fit: cover;

      .gradient {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`
