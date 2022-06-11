import { useEffect, useState } from 'react'

import { AsideMenu } from '../../components/AsideMenu'
import { AsideRight } from '../../components/AsideRight'
import { Feed } from '../../components/Feed'
import { Navbar } from '../../components/Navbar'
import { Popover } from '../../components/Popover'
import { Lock } from '../Lock'

import { Container, Main } from './styles'

export function Home() {
  const [showLock, setShowLock] = useState(false)

  useEffect(() => {
    function onResize() {
      if (window.innerWidth < 1272) setShowLock(true)
      else setShowLock(false)
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  if (showLock) return <Lock />

  return (
    <Container>
      <Navbar />

      <Main>
        <AsideMenu />
        <Feed />
        <AsideRight />
      </Main>

      <Popover />
    </Container>
  )
}
