import styled from 'styled-components'

export const Container = styled.div`
  margin: 8px;
  max-width: 100%;

  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
  background-color: ${({ theme }) => theme.surfaceBackground};
`

export const TitleContainer = styled.div`
  padding: 16px;

  display: flex;
  align-items: center;
  flex-direction: row;
`

export const Title = styled.span`
  margin-left: 8px;

  font: 400 1.5rem/1.3 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.primaryText};

  word-wrap: break-word;
  word-break: break-word;
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`

export const CloseButton = styled.button`
  margin-left: auto;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;
  outline: none;
  background-color: transparent;

  &::before {
    content: '';
    position: absolute;

    width: 32px;
    height: 32px;

    transition: background-color 0.12s ease-in-out;

    border-radius: 50%;
    background-color: transparent;
  }

  &:hover,
  &:focus-visible {
    &::before {
      background-color: rgba(0, 0, 0, 0.06);
    }
  }
`

export const Content = styled.div`
  padding: 0 16px;
  margin-bottom: 14px;
  position: relative;
`

export const Text = styled.span`
  font: 400 1.5rem/1.3 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.primaryText};

  & > strong {
    font-weight: 600;
  }

  &::before {
    content: '';

    width: calc(100% - 16px);
    height: calc(100% + 8px);

    top: -4px;
    left: 8px;
    position: absolute;

    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
    background-color: transparent;
  }

  &:hover,
  &:focus-visible {
    &::before {
      background-color: rgba(0, 0, 0, 0.06);
    }
  }
`
