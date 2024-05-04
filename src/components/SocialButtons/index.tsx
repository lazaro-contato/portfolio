import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'

const SocialButtons = () => {
  return (
    <div className={'flex flex-row gap-2 text-[20px]'}>
      <span>
        <a
          href={'https://dev.to/lazarocontato'}
          target={'_blank'}
          className={
            'cursor-pointer hover:text-softBlue transition duration-300'
          }
        >
          <FaDev />
        </a>
      </span>
      <span>
        <a
          href={'https://github.com/lazaro-contato'}
          target={'_blank'}
          className={
            'cursor-pointer hover:text-softBlue transition duration-300'
          }
        >
          <FaGithub />
        </a>
      </span>
      <span>
        <a
          href={'https://www.linkedin.com/in/lazaro-contato/'}
          target={'_blank'}
          className={
            'cursor-pointer hover:text-softBlue transition duration-300'
          }
        >
          <FaLinkedin />
        </a>
      </span>
    </div>
  )
}

export default SocialButtons
