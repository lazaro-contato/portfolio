'use client'

import React, { useState } from 'react'

const PersonalImage = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className={'flex relative w-20'}>
      <div
        className={`flex absolute bg-white border border-graySoft w-10 rounded-3xl top-[-10px] right-[-10px] items-center justify-center ${isHovering ? 'opacity-1' : 'opacity-0'} transition duration-700 z-50 shadow`}
      >
        <span>Hi!</span>
      </div>
      <img
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        src={'/faceImage.png'}
        className={
          'w-20 cursor-pointer hover:scale-105 transition duration-700 rounded-full hover:shadow-2xl'
        }
      />
    </div>
  )
}

export default PersonalImage
