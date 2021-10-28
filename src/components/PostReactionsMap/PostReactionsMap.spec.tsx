import { render } from '@testing-library/react'

import { PostReactionsMap } from '.'

test('PostReactionsMap should render', () => {
  const { asFragment, getByAltText } = render(
    <PostReactionsMap
      reactions={['haHa', 'heart', 'like', 'sad', 'uau', 'grr']}
    />
  )

  expect(asFragment()).toBeTruthy()
  expect(asFragment()).toBeInstanceOf(DocumentFragment)

  expect(getByAltText('HaHa')).toBeTruthy()
  expect(getByAltText('HaHa')).toBeInTheDocument()
  expect(getByAltText('HaHa')).toBeInstanceOf(HTMLImageElement)

  expect(getByAltText('Heart')).toBeTruthy()
  expect(getByAltText('Heart')).toBeInTheDocument()
  expect(getByAltText('Heart')).toBeInstanceOf(HTMLImageElement)

  expect(getByAltText('Like')).toBeTruthy()
  expect(getByAltText('Like')).toBeInTheDocument()
  expect(getByAltText('Like')).toBeInstanceOf(HTMLImageElement)

  expect(getByAltText('Sad')).toBeTruthy()
  expect(getByAltText('Sad')).toBeInTheDocument()
  expect(getByAltText('Sad')).toBeInstanceOf(HTMLImageElement)

  expect(getByAltText('Uau')).toBeTruthy()
  expect(getByAltText('Uau')).toBeInTheDocument()
  expect(getByAltText('Uau')).toBeInstanceOf(HTMLImageElement)
})
