import styled from 'styled-components'

export const Container = styled.button`
  padding: 8px;

  display: flex;
  align-items: center;
  flex-direction: row;

  position: relative;

  border: 0;
  border-radius: 8px;

  cursor: pointer;
  outline: none;

  transition: background-color 0.12s ease-in-out;
  background-color: transparent;

  &:hover,
  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const Text = styled.span`
  flex: 1;
  margin-left: 12px;

  font: 400 1.5rem/1.3 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.primaryText};
  text-align: left;

  word-wrap: break-word;
  word-break: break-word;
`

export const LeftContainer = styled.div`
  width: 36px;
  height: 36px;

  color: ${({ theme }) => theme.primaryText};

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`

export const ViewMoreContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondaryButtonBackground};
`

export const Image = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
`
