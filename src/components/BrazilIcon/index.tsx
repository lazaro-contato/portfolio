'use client'

import { useState } from 'react'

interface BrazilIconProps {
  label: string
}

const BrazilIcon = ({ label }: BrazilIconProps) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className={'relative inline-block'}>
      <div
        className={`absolute top-[-17px] right-0 ${isHovering ? 'opacity-1' : 'opacity-0'} ${isHovering && 'translate-y-[-1px]'} transition duration-300 animate-shake`}
      >
        <img src={'/brazil.png'} className={'w-7'} />
      </div>
      <span
        className={'cursor-pointer'}
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {label}
      </span>
    </div>
  )
}

export default BrazilIcon
