import { memo, useState } from 'react'

import { ReactComponent as SearchIcon } from '../../assets/navbar/searchIcon.svg'

import { Container, Input, Label } from './styles'

export const NavbarSearch = memo(function NavbarSearch() {
  const [value, setValue] = useState('')

  return (
    <Container>
      <Input
        value={value}
        placeholder="Pesquisar no Facebook"
        onChange={({ target }) => setValue(target.value)}
      />

      <Label>
        <SearchIcon />
      </Label>
    </Container>
  )
})
