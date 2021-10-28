import { render } from '@testing-library/react'
import { NavbarBadge } from '.'

test('NavbarBadge should render', () => {
  const { getByText } = render(<NavbarBadge value={1} />)

  expect(getByText(1)).toBeTruthy()
  expect(getByText(1)).toBeInTheDocument()
})
