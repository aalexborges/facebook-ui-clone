import styled from 'styled-components'

import videoChatIcon from '../../assets/videoChatIcon.png'

export const Container = styled.div`
  width: 100%;
  padding: 4px 0;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-direction: row;

  position: relative;
  overflow: hidden;

  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
  background-color: ${({ theme }) => theme.surfaceBackground};
`

export const LeftButton = styled.div`
  width: 48px;
  height: 48px;
  z-index: 1;

  color: ${({ theme }) => theme.secondaryText};

  left: 16px;
  position: absolute;

  display: none;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  transition: filter 0.12s ease-in-out;

  -webkit-box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);

  border-radius: 50%;
  background-color: ${({ theme }) => theme.popoverColor};

  & > svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.secondaryText};
  }

  &:hover,
  &:focus-visible {
    filter: brightness(94%);
    -webkit-filter: brightness(94%);
  }
`

export const RightButton = styled(LeftButton)`
  left: unset;
  right: 16px;
  display: flex;
`

export const Content = styled.div<{ x?: number }>`
  height: 56px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  flex-direction: row;

  transition: transform 0.15s ease-in-out;
  overscroll-behavior-x: contain;

  transform: translateX(${({ x }) => x || 0}px);
`

export const VideoButton = styled.div`
  height: 40px;
  padding: 0 12px;
  min-width: fit-content;
  margin-right: 16px;

  font: 600 1.5rem/1.35 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.blueLink};

  display: flex;
  align-items: center;
  flex-direction: row;

  cursor: pointer;
  transition: background-color 0.12s ease-in-out, filter 0.12s ease-in-out;
  touch-action: manipulation;

  border: 2px solid ${({ theme }) => theme.primaryDeemphasizedButtonBackground};
  border-radius: 20px;
  background-color: transparent;

  word-wrap: break-word;
  word-break: break-word;

  &:hover,
  &:focus-visible {
    filter: brightness(94%);
    -webkit-filter: brightness(94%);
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const VideoButtonIcon = styled.span`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 8px;

  background-image: url(${videoChatIcon});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 0 -219px;
`

export const FakeUserButton = styled.div`
  width: 40px;
  height: 40px;

  cursor: pointer;
  position: relative;
  transition: filter 0.12s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-left: 16px;
  }

  & > img {
    width: 40px;
    height: 40px;

    object-fit: cover;
    border-radius: 50%;
  }

  &::after {
    content: '';
    width: 9px;
    height: 9px;

    right: -2.5px;
    bottom: 0;
    position: absolute;

    border: 2px solid ${({ theme }) => theme.surfaceBackground};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.positive};
  }

  &:hover,
  &:focus-visible {
    filter: brightness(94%);
    -webkit-filter: brightness(94%);
  }
`
