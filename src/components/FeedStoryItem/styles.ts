import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 0;
  padding-bottom: 32%;

  overflow: hidden;
  position: relative;
  touch-action: manipulation;

  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  border-radius: 10px;

  & + & {
    margin-left: 8px;
  }

  &::after {
    width: 100%;
    height: 100%;
    content: '';

    top: 0;
    left: 0;
    position: absolute;

    transition: background-color 0.12s ease-in-out;
    background-color: transparent;
  }

  &:hover,
  &:focus-visible {
    &::after {
      background-color: rgba(0, 0, 0, 0.1);
    }

    & > div > img {
      transform: scale(1.025);
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    width: 100%;
    height: 100%;
    content: '';

    top: 0;
    left: 0;
    position: absolute;

    transition: background-color 0.12s ease-in-out;
    background-color: rgba(0, 0, 0, 0.08);
  }
`

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  transition: transform 0.12s ease-in-out;
`

export const UserImage = styled.img`
  top: 12px;
  left: 12px;
  position: absolute;

  width: 40px;
  height: 40px;
  object-fit: cover;

  border: 4px solid ${({ theme }) => theme.accent};
  border-radius: 50%;
`

export const TextContainer = styled.div<{ myStory?: boolean }>`
  width: 100%;
  padding: ${({ myStory }) => (myStory ? '28px 16px 12px' : '12px')};

  ${({ myStory }) =>
    myStory &&
    `display: flex;
    align-items: center;
    justify-content: center;
  `};

  left: 0;
  bottom: 0;
  position: absolute;

  background-color: ${({ theme, myStory }) =>
    myStory ? theme.cardBackground : 'transparent'};
`

export const Text = styled.span<{ myStory?: boolean }>`
  width: 100%;
  max-width: 100%;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;

  font: 600 1.3rem/1.2308 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ myStory, theme }) => (myStory ? theme.primaryText : theme.white)};
  text-align: ${({ myStory }) => (myStory ? 'center' : 'left')};

  word-wrap: break-word;
  word-break: break-word;
`

export const PlusIconContainer = styled.div`
  width: 40px;
  height: 40px;

  top: -20px;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.cardBackground};
`

export const PlusIconContent = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.accent};

  & > svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.white};
  }
`
