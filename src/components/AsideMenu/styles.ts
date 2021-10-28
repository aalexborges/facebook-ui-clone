import styled from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  height: calc(100vh - 56px);
  max-width: 360px;

  padding: 0 8px;

  top: 56px;
  position: fixed;

  overflow-y: hidden;

  @media (max-width: 1480px) {
    max-width: 305.5px;
  }
`

export const HiddenTitle = styled.h2`
  height: 1px;
  outline: none;
  position: absolute;
  overflow: hidden;

  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
`

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;

  display: grid;
  grid-template-rows: 1fr auto;
`

export const Scroll = styled.div`
  width: 8px !important;
  right: 2.5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.scrollThumb};
`
