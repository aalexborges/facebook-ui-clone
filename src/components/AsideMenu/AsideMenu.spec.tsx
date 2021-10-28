import { render } from '@testing-library/react'
import { AsideMenu } from '.'

test('AsideMenu should render', () => {
  const { getByTestId, getByText } = render(<AsideMenu />)

  expect(getByTestId('asideMenuContainer')).toBeTruthy()
  expect(getByTestId('asideMenuContainer')).toBeInTheDocument()
  expect(getByTestId('asideMenuContainer')).toBeInstanceOf(HTMLElement)
  expect(getByTestId('asideMenuContainer').tagName).toEqual('ASIDE')

  expect(getByText('Menu do Facebook')).toBeTruthy()
  expect(getByText('Menu do Facebook')).toBeInTheDocument()
})
