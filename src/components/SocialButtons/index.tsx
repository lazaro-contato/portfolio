import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'

const SocialButtons = () => {
  return (
    <div className={'flex flex-row gap-2 text-[20px]'}>
      <span>
        <a
          className={
            'cursor-pointer hover:text-softBlue transition duration-300'
          }
        >
          <FaDev />
        </a>
      </span>
      <span>
        <a
          className={
            'cursor-pointer hover:text-softBlue transition duration-300'
          }
        >
          <FaLinkedin />
        </a>
      </span>
      <span>
        <a
          className={
            'cursor-pointer hover:text-softBlue transition duration-300'
          }
        >
          <FaGithub />
        </a>
      </span>
    </div>
  )
}

export default SocialButtons
