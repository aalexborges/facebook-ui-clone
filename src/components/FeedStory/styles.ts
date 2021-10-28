import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-top: 8px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-direction: row;

  position: relative;
  overscroll-behavior-x: contain;
`

export const MoreButton = styled.div`
  width: 40px;
  height: 40px;

  right: -20px;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  touch-action: manipulation;
  transition: filter 0.12s ease-in-out;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.popoverColor};

  & > svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.secondaryIcon};
  }

  &:hover,
  &:focus-visible {
    filter: brightness(94%);
    -webkit-filter: brightness(94%);
  }
`
