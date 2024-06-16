'use client'
import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
const AboutSlider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      defaultAnimation: {
        duration: 2000,
      },
    },
    [
      (slider) => {
        let timeout: string | number | NodeJS.Timeout | undefined
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <div ref={sliderRef} className="keen-slider flex flex-row overflow-hidden">
      <div className="keen-slider__slide max-w-full">
        <img alt="name" className={'bg-brightOrange'} src={'/image2.png'} />
      </div>
      <div className="keen-slider__slide">
        <img alt="name" className={'bg-brightOrange'} src={'/image2.png'} />
      </div>
      <div className="keen-slider__slide">
        <img alt="name" className={'bg-brightOrange'} src={'/image2.png'} />
      </div>
    </div>
  )
}

export default AboutSlider
