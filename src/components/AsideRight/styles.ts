import styled from 'styled-components'

import utilIcons from '../../assets/utilIcons.png'

export const Container = styled.aside`
  width: 100%;
  height: calc(100vh - 56px);
  max-width: 360px;

  top: 56px;
  right: 0;
  position: fixed;

  @media (max-width: 1480px) {
    max-width: 305.5px;
  }
`

export const Content = styled.div`
  width: inherit;
  padding: 16px 8px 8px;
`

export const Scroll = styled.div`
  width: 8px !important;
  right: 2.5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.scrollThumb};
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`

export const NewMessage = styled.div`
  width: 48px;
  height: 48px;

  right: 16px;
  bottom: 16px;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: filter 0.12s ease-in-out;

  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
    0 12px 28px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
    0 12px 28px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0 12px 28px rgba(0, 0, 0, 0.2);

  border-radius: 50%;
  background-color: ${({ theme }) => theme.surfaceBackground};

  &:hover,
  &:focus-visible {
    filter: brightness(94%);
    -webkit-filter: brightness(94%);
  }

  &::after {
    content: '';

    width: 20px;
    height: 20px;
    display: inline-block;

    filter: ${({ theme }) => theme.filterPrimaryIcon};
    -webkit-filter: ${({ theme }) => theme.filterPrimaryIcon};

    background-size: auto;
    background-image: url(${utilIcons});
    background-repeat: no-repeat;
    background-position: -105px -107px;
  }
`
