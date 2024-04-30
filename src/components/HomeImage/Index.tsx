'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const HomeImage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [distanceFromTop, setDistanceFromTop] = useState(0)
  const [isScrollDirection, setScrollDirection] = useState<'up' | 'down'>(
    'down',
  )
  const divRef = useRef<HTMLDivElement>(null)
  const [shouldShake, setShouldShake] = useState(false)

  useEffect(() => {
    let lastScrollPosition = 0

    const checkScrollDirection = () => {
      const currentScrollPosition = window.scrollY
      if (currentScrollPosition > lastScrollPosition) {
        setScrollDirection('down')
      } else if (currentScrollPosition < lastScrollPosition) {
        setScrollDirection('up')
      }
      lastScrollPosition = currentScrollPosition
    }

    const onScroll = () => {
      const { scrollY } = window
      setScrollY(scrollY)

      if (divRef.current) {
        const { top } = divRef.current.getBoundingClientRect()
        setDistanceFromTop(top + window.scrollY)
      }
      checkScrollDirection()
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [divRef])

  useEffect(() => {
    setShouldShake(
      scrollY > distanceFromTop + 50 &&
        scrollY < distanceFromTop + 273 &&
        isScrollDirection === 'down',
    )
  }, [scrollY, distanceFromTop, isScrollDirection])

  return (
    <div ref={divRef}>
      <Image
        className={`md:w-96 drop-shadow-xl ${
          shouldShake
            ? 'motion-safe:animate-shake'
            : 'motion-safe:animate-float'
        }`}
        src={'/homeImage.png'}
        alt={'IMAGE'}
        width={273}
        height={273}
      />
    </div>
  )
}

export default HomeImage
