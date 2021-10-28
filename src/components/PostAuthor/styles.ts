import styled from 'styled-components'

import type { PostAuthorProps } from '.'

import postIcons from '../../assets/postIcons.png'

export const Container = styled.div`
  padding: 12px 16px 0;
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  flex-direction: row;
`

export const UserButton = styled.div<{ isOnline?: boolean }>`
  width: 40px;
  height: 40px;

  cursor: pointer;
  position: relative;

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

  ${({ isOnline, theme }) =>
    isOnline &&
    `&::after {
    content: '';
    width: 9px;
    height: 9px;

    right: -2.5px;
    bottom: 0;
    position: absolute;

    border: 2px solid ${theme.surfaceBackground};
    border-radius: 50%;
    background-color: ${theme.positive};
  }`};
`

export const UserInfoContainer = styled.div`
  flex: 1;
  margin: 0 8px;

  display: flex;
  flex-direction: column;
`

export const UserName = styled.h4`
  font: 600 1.5rem/1.3 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.primaryText};

  cursor: pointer;
  word-wrap: break-word;
  word-break: break-word;

  & > strong {
    font: inherit;
    color: inherit;
  }

  & > span {
    font: 400 1.5rem/1.3 Helvetica, 'Inter', Arial, sans-serif;
    color: ${({ theme }) => theme.secondaryText};
  }

  &::after {
    height: 0;
    content: '';
    display: block;
    margin-bottom: 2px;
  }

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`

export const DateInfo = styled.span`
  font: 600 1.3rem/1.2 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.secondaryText};

  cursor: pointer;
  position: relative;

  word-wrap: break-word;
  word-break: break-word;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`

export const VisibleTo = styled.span<{
  type: PostAuthorProps['visibleTo']
}>`
  width: 12px;
  height: 12px;
  display: inline-block;

  top: ${({ type }) => (type === 'friends' ? 2 : 0.5)}px;
  position: relative;

  filter: ${({ theme }) => theme.filterSecondaryIcon};
  -webkit-filter: ${({ theme }) => theme.filterSecondaryIcon};

  background-size: auto;
  background-image: url(${postIcons});
  background-repeat: no-repeat;
  background-position: 0px -${({ type }) => (type === 'public' ? 896 : type === 'friends' ? 884 : 908)}px;
`

export const MoreButton = styled.div`
  width: 36px;
  height: 36px;
  padding: 8px;

  cursor: pointer;
  position: relative;
  transition: background-color 0.12s ease-in-out;

  border-radius: 50%;
  background-color: transparent;

  & > svg {
    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
