import { memo, useEffect, useRef, useState } from 'react'

import { Container, Text } from './styles'

export const Popover = memo(function Popover() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [label, setLabel] = useState('')
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const [isFixed, setIsFixed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let hideTime: ReturnType<typeof setTimeout>

    function mouseEnter(event: Event) {
      if (!containerRef.current) return
      clearTimeout(hideTime)

      const element = event.target as HTMLElement
      setLabel(oldValue => element.getAttribute('aria-label') || oldValue)
      setIsFixed(element.hasAttribute('data-label-fixed'))

      const cords = element.getBoundingClientRect()

      if (element.hasAttribute('data-label-left')) {
        setPosition({
          x: cords.x - containerRef.current.clientWidth + cords.width,
          y: cords.bottom + 2,
        })
      } else {
        setPosition({
          x:
            cords.x +
            (element.clientWidth - containerRef.current.clientWidth) / 2,
          y: cords.bottom + 2,
        })
      }

      setIsVisible(true)
    }

    function mouseOut() {
      clearTimeout(hideTime)

      hideTime = setTimeout(() => {
        setIsVisible(false)
      }, 120)
    }

    const elements = document.querySelectorAll('[aria-label]')

    elements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnter)
      element.addEventListener('mouseleave', mouseOut)
    })

    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnter)
        element.removeEventListener('mouseleave', mouseOut)
      })

      clearTimeout(hideTime)
    }
  }, [isVisible])

  return (
    <Container
      ref={containerRef}
      role={'group'}
      position={position}
      isFixed={isFixed}
      isVisible={isVisible}
    >
      <Text>{label}</Text>
    </Container>
  )
})
