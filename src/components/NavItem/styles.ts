import styled from 'styled-components'

export const Container = styled.button<{ active?: boolean }>`
  flex: 1;
  height: 100%;
  min-width: 50px;
  max-width: 129.6px;

  position: relative;

  color: ${({ active, theme }) =>
    active ? theme.baseBlue : theme.secondaryIcon};

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  ${({ active, theme }) =>
    active &&
    `
    border-top: 3px solid transparent;
    border-bottom: 3px solid ${theme.baseBlue};
    `}

  cursor: pointer;
  outline: none;
  background-color: transparent;

  & + button {
    margin-left: 8px;
  }

  &:hover,
  &:focus-visible {
    ${({ active }) =>
      !active &&
      `&:after { background-color: rgba(0, 0, 0, 0.05); }
    `}
  }

  &::after {
    content: '';
    position: absolute;

    width: 100%;
    height: 48px;

    inset: 4px 0px;
    border-radius: 8px;

    transition: background-color 0.1s ease-in-out;
    background-color: transparent;
  }
`
