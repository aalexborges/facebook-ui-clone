import styled from 'styled-components'

export const Container = styled.div`
  width: 240px;
  height: 40px;
  margin-left: 8px;

  display: flex;
  align-items: center;
  flex-direction: row;

  position: relative;
  overflow: hidden;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.commentBackground};
`

export const Label = styled.label`
  font: 400 1.45rem/1.5 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.placeholderText};

  display: flex;
  align-items: center;
  justify-content: center;

  left: 12px;
  position: absolute;

  overflow: hidden;
  transition: left 0.12s ease-in-out, opacity 0.15s ease-in-out;

  & > svg {
    fill: ${({ theme }) => theme.secondaryIcon};
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;

  padding: 7px 16px 9px;
  padding-left: calc(11px + 17px + 8px);

  font: 400 1.5rem Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.primaryText};

  border: 0;
  outline: none;

  transition: padding-left 0.12s ease-in-out;
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.placeholderText};
  }

  &:focus {
    padding-left: 16px;

    & + ${Label} {
      left: 0;
      opacity: 0;
    }
  }
`
