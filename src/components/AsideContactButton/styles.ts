import styled from 'styled-components'

export const Container = styled.button`
  height: 52px;
  padding: 0 8px;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;

  border: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  &::after {
    content: '';

    width: 100%;
    height: 100%;

    right: 0;
    position: absolute;

    transition: background-color 0.12s ease-in-out;

    border-radius: 8px;
    background-color: transparent;
  }

  &:hover,
  &:focus-visible {
    &::after {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`

export const UserImageContainer = styled.div<{ isOnline?: boolean }>`
  width: 36px;
  height: 36px;
  position: relative;
  margin-right: 12px;

  color: ${({ theme }) => theme.primaryText};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondaryButtonBackground};

  ${({ isOnline, theme }) =>
    isOnline &&
    `&::after {
    content: '';
    width: 9px;
    height: 9px;

    right: -2.5px;
    bottom: 0;
    position: absolute;

    border: 2px solid ${theme.bodyBackground};
    border-radius: 50%;
    background-color: ${theme.positive};
  }`}
`

export const UserImage = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
`

export const Title = styled.span`
  flex: 1;
  max-width: calc(100% - 44px);

  font: 400 1.5rem/1.3 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.primaryText};
  text-align: left;

  word-wrap: break-word;
  word-break: break-word;
`
