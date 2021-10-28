import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 8px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  flex-direction: row;
`

export const Title = styled.span`
  font: 600 1.7rem/1.2 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.secondaryText};
`

export const ButtonsContainer = styled.div`
  margin-left: auto;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`

export const Button = styled.button`
  margin-left: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font: 600 1.7rem/1.2 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.secondaryText};

  border: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  &::before {
    content: '';
    width: 32px;
    height: 32px;

    position: absolute;
    transition: background-color 0.12s ease-in-out;

    border-radius: 50%;
    background-color: transparent;
  }

  &:hover,
  &:focus-visible {
    &::before {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`
