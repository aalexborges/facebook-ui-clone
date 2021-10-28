import styled from 'styled-components'

export const Container = styled.button`
  width: 40px;
  height: 40px;
  position: relative;

  color: ${({ theme }) => theme.secondaryButtonText};

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 50%;

  cursor: pointer;
  outline: none;

  transition: filter 0.12s ease-in-out;
  background-color: ${({ theme }) => theme.secondaryButtonBackground};

  & + button {
    margin-left: 8px;
  }

  &:hover,
  &:focus-visible {
    -webkit-filter: brightness(94%);
    filter: brightness(94%);
  }
`
