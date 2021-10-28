import styled from 'styled-components'

export const Container = styled.div<{
  size?: number
  move?: { left: boolean; index: number }
}>`
  width: ${({ size }) => size || 22}px;
  height: ${({ size }) => size || 22}px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 4px solid ${({ theme }) => theme.surfaceBackground};
  border-radius: 50%;

  z-index: ${({ move }) => (move?.left ? 6 - move.index : 6)};

  left: ${({ move }) => (move?.left ? `${-4 * move.index}px` : 'unset')};
  position: relative;

  & > img {
    width: calc(${({ size }) => size || 22}px - 4px);
    height: calc(${({ size }) => size || 22}px - 4px);
  }
`
