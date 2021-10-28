import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
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

export const TextContainer = styled.div`
  padding: 4px 16px 16px;
`

export const Text = styled.span`
  font: 400 1.5rem/1.3 Helvetica, 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.primaryText};
  text-align: left;

  word-wrap: break-word;
  word-break: break-word;
  white-space: pre;
`

export const ImageContainer = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  max-width: 100%;
  min-height: 0;
  max-height: 750px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};

  & > img {
    ${({ backgroundColor }) => (!backgroundColor ? 'width: 100%' : '')};
    max-width: 100%;
    object-fit: cover;
  }
`
