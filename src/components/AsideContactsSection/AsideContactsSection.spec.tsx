import { render } from '@testing-library/react'

import { AsideContactsSection } from '.'

test('AsideContactsSection', () => {
  const { asFragment } = render(<AsideContactsSection />)

  expect(asFragment()).toBeTruthy()
  expect(asFragment()).toBeInstanceOf(DocumentFragment)
})
