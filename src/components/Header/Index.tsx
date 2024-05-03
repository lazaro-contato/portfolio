'use client'

import React from 'react'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header className={'py-6'}>
      <div className={'flex items-center justify-center'}>
        <ul className={'flex flex-row text-center font-semibold'}>
          <li>
            <Link
              href={'/'}
              className={
                'inline-block w-24 hover:text-softBlue transition duration-200 ease-in-out'
              }
            >
              Home
            </Link>
          </li>
          <li className={'h-6'}>
            <Link
              href={'/blog'}
              className={
                'inline-block w-24 hover:text-softBlue transition duration-200 ease-in-out'
              }
            >
              Blog
            </Link>
          </li>
          <li className={'h-6'}>
            <Link
              href={'/about'}
              className={
                'inline-block w-24 hover:text-softBlue transition duration-200 ease-in-out'
              }
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
