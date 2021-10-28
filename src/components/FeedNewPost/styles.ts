import styled from 'styled-components'

import newPostIcons from '../../assets/newPostIcons.png'

export const Container = styled.div`
  width: 100%;
  padding: 12px 16px 10px 16px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
  background-color: ${({ theme }) => theme.surfaceBackground};
`

export const RowContainer = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;
`

export const HiddenTitle = styled.h3`
  height: 1px;
  outline: none;
  position: absolute;
  overflow: hidden;

  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
`

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;

  cursor: pointer;
  outline: none;
  overflow: hidden;
  touch-action: manipulation;

  object-fit: cover;
  border-radius: 50%;
`

export const FakeInput = styled.div`
  flex: 1;
  min-height: 40px;

  padding: 8px 12px;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;

  cursor: pointer;
  outline: none;
  transition: background-color 0.12s ease-in-out;
  touch-action: manipulation;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.commentBackground};

  &:hover,
  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const FakeInputText = styled.span`
  font: 400 1.6rem/1.35 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.secondaryText};

  word-wrap: break-word;
  word-break: break-word;
`

export const ButtonsContainer = styled.div`
  margin-top: 12px;
  padding-top: 8px;

  display: flex;
  align-items: center;
  flex-direction: row;

  overflow: hidden;
  border-top: solid 1px ${({ theme }) => theme.secondaryButtonBackground};
`

export const FakeButton = styled.div`
  flex: 1;
  padding: 8px;
  min-width: fit-content;

  font: 600 1.5rem/1.2 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.secondaryText};

  word-wrap: break-word;
  word-break: break-word;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: none;
  transition: background-color 0.12s ease-in-out;
  touch-action: manipulation;

  border-radius: 8px;
  background-color: transparent;

  &:hover,
  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const FakeButtonIcon = styled.span<{
  type: 'liveVideo' | 'photo' | 'feeling'
}>`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 8px;

  background-size: auto;
  background-repeat: no-repeat;
  background-image: url(${newPostIcons});
  background-position: 0
    ${({ type }) => {
      if (type === 'liveVideo') return 0
      else if (type === 'photo') return '-225px'
      else if (type === 'feeling') return '-25px'
    }};
`
