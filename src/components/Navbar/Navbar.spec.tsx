import { render } from '@testing-library/react'

import { Navbar } from '.'

test('Navbar should render', () => {
  const { getByTestId } = render(<Navbar />)

  expect(getByTestId('navbarContainer')).toBeTruthy()
  expect(getByTestId('navbarContainer')).toBeInTheDocument()
  expect(getByTestId('navbarContainer')).toBeInstanceOf(HTMLDivElement)
})
