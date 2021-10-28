import { render } from '@testing-library/react'
import { NavItem } from '.'

test('NavItem should render', () => {
  const { getByRole, getByText, rerender } = render(
    <NavItem badge={1}>
      <span>Test</span>
    </NavItem>
  )

  expect(getByRole('button')).toBeTruthy()
  expect(getByRole('button')).toBeInTheDocument()
  expect(getByRole('button')).toBeInstanceOf(HTMLButtonElement)
  expect(getByRole('button')).not.toHaveStyle(
    'border-top: 3px solid transparent;'
  )

  expect(getByText('Test')).toBeTruthy()
  expect(getByText('Test')).toBeInstanceOf(HTMLSpanElement)

  expect(getByText(1)).toBeTruthy()
  expect(getByText(1)).toBeInTheDocument()
  expect(getByText(1)).toBeInstanceOf(HTMLSpanElement)

  rerender(
    <NavItem badge={1} active>
      <span>Test</span>
    </NavItem>
  )

  expect(getByRole('button')).toBeTruthy()
  expect(getByRole('button')).toHaveStyle('border-top: 3px solid transparent;')
})
