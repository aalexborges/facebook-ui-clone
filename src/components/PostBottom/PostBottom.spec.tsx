import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { PostBottom } from '.'

import { posts } from '../../utils/posts'

test('PostButton should render', () => {
  const { getByTestId } = render(<PostBottom {...posts[0]} />)

  expect(getByTestId('postBottomContainer')).toBeTruthy()
  expect(getByTestId('postBottomContainer')).toBeInTheDocument()
  expect(getByTestId('postBottomContainer')).toBeInstanceOf(HTMLDivElement)

  expect(getByTestId('PBLikeButton')).toBeTruthy()
  expect(getByTestId('PBLikeButton')).toBeInTheDocument()
  expect(getByTestId('PBLikeButton')).toBeInstanceOf(HTMLDivElement)

  // Like Button
  expect(getByTestId('PBLikeButton').children).toHaveLength(2)
  expect(getByTestId('PBLikeButton').children[0]).toBeInstanceOf(
    HTMLSpanElement
  )
  expect(getByTestId('PBLikeButton').children[0].getAttribute('type')).toEqual(
    'like'
  )

  act(() => {
    fireEvent.click(getByTestId('PBLikeButton'))
  })

  expect(getByTestId('PBLikeButton').children[0].getAttribute('type')).toEqual(
    'liked'
  )
})
