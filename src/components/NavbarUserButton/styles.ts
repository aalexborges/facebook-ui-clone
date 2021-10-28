import styled from 'styled-components'

export const Container = styled.button`
  height: 36px;
  max-width: 145px;

  padding: 12px;
  padding-left: 5px;
  margin-right: 8px;

  display: flex;
  align-items: center;
  flex-direction: row;

  border: 0;
  border-radius: 18px;

  cursor: pointer;
  outline: none;
  background-color: transparent;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.secondaryButtonPressed};
  }
`

export const UserImage = styled.img`
  width: 28px;
  height: 28px;

  object-fit: cover;
  border-radius: 50%;
`

export const Text = styled.span`
  font: 600 1.5rem/1.5 Helvetica, 'Inter', Arial, sans-serif;
  margin-left: 8px;
`
