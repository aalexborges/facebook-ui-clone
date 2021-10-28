import styled from 'styled-components'

export const Container = styled.div<{
  position: { x: number; y: number }
  isFixed?: boolean
  isVisible?: boolean
}>`
  z-index: 20;
  padding: 8px 14px;

  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;

  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  transition: opacity 0.25s ease-in-out;

  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
    0 12px 28px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
    0 12px 28px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0 12px 28px rgba(0, 0, 0, 0.2);

  word-wrap: break-word;
  word-break: break-word;

  border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
  background-color: rgba(0, 0, 0, 0.8);

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  ${({ isVisible }) =>
    !isVisible && 'transform: translateX(-200px), translateY(200px);'};
`

export const Text = styled.span`
  font: 400 1.3rem/1 Helvetica, 'Inter', sans-serif;
  color: ${({ theme }) => theme.white};

  word-wrap: break-word;
  word-break: break-word;
`
