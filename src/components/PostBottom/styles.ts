import styled from 'styled-components'

import postIcons from '../../assets/postIcons.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const TopContainer = styled.div`
  margin: 0 16px;
  padding: 10px 0;

  display: flex;
  align-items: center;
  flex-direction: row;

  border-bottom: 1px solid ${({ theme }) => theme.divider};
`

export const NumbersText = styled.span`
  font: 400 1.5rem/1.3333 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.secondaryText};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const NumberOfReactionsContainer = styled.div`
  flex: 1;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;

  & > ${NumbersText} {
    margin-left: 2px;
  }
`

export const NumbersOfRightContainer = styled.div`
  margin-left: auto;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-end;

  & > ${NumbersText} + ${NumbersText} {
    margin-left: 7px;
  }
`

export const BottomContainer = styled.div`
  margin: 0 12px;
  padding: 4px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`

export const BottomButton = styled.div<{ liked?: boolean }>`
  flex: 1;
  padding: 6px 2px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color 0.12s ease-in-out;
  border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 1.25px;

  ${({ liked, theme }) =>
    liked &&
    `
    & > span {
      color: ${theme.accent};
    }
  `};

  &:hover,
  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const BottomButtonText = styled.span`
  font: 600 1.5rem/1.3333 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.secondaryText};
  user-select: none;
`

export const BottomButtonIcon = styled.span<{
  type: 'comment' | 'like' | 'liked' | 'share'
}>`
  width: 18px;
  height: 18px;
  margin-right: 8px;

  touch-action: manipulation;

  background-size: auto;
  background-image: url(${postIcons});
  background-repeat: no-repeat;
  background-position: 0px
    ${({ type }) => {
      if (type === 'comment') return -268
      else if (type === 'like') return -306
      else if (type === 'liked') return -287
      else if (type === 'share') return -325
    }}px;

  filter: ${({ theme, type }) =>
    type === 'liked' ? theme.filterAccent : theme.filterSecondaryIcon};
  -webkit-filter: ${({ theme, type }) =>
    type === 'liked' ? theme.filterAccent : theme.filterSecondaryIcon};
`
