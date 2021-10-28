import { render } from '@testing-library/react'

import { Feed } from '.'

test('Feed should render', () => {
  const { getByTestId } = render(<Feed />)

  expect(getByTestId('feedContainer')).toBeTruthy()
  expect(getByTestId('feedContainer')).toBeInTheDocument()
  expect(getByTestId('feedContainer')).toBeInstanceOf(HTMLDivElement)
})
