import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { FeedNewVideoChat } from '.'

test('FeedNewVideoChat should render', () => {
  const { getByTestId } = render(<FeedNewVideoChat />)

  expect(getByTestId('feedNewVideoChatContainer')).toBeTruthy()
  expect(getByTestId('feedNewVideoChatContainer')).toBeInTheDocument()
  expect(getByTestId('feedNewVideoChatContainer')).toBeInstanceOf(
    HTMLDivElement
  )
  expect(getByTestId('feedNewVideoChatContainer').children).toHaveLength(3)

  const leftButton = getByTestId('feedNewVideoChatContainer').children[0]
  const content = getByTestId('feedNewVideoChatContainer').children[1]
  const rightButton = getByTestId('feedNewVideoChatContainer').children[2]

  expect(content).toHaveStyle('transform: translateX(0px);')
  expect(leftButton).toHaveStyle('display: none;')
  expect(rightButton).toHaveStyle('display: flex;')

  act(() => {
    fireEvent.click(rightButton)
    fireEvent.click(rightButton)
  })

  expect(content).not.toHaveStyle('transform: translateX(0px);')

  act(() => {
    fireEvent.click(leftButton)
    fireEvent.click(leftButton)
  })

  expect(content).toHaveStyle('transform: translateX(0px);')
})
