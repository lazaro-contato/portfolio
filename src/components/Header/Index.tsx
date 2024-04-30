'use client'

import React from 'react'
import Link from 'next/link'
import Paint from '@/components/Paint/Index'

const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul
          className={
            'flex justify-around max-w-2xl py-2 fixed z-20 w-full backdrop-blur-sm font-bold'
          }
        >
          <li
            className={
              'hover:text-brightOrange hover:scale-105 transition duration-100 ease-in-out'
            }
          >
            <Link href={'/'}>Home</Link>
          </li>
          <li
            className={
              'hover:text-brightOrange hover:scale-105 transition duration-100 ease-in-out'
            }
          >
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li
            className={
              'hover:text-brightOrange hover:scale-105 transition duration-100 ease-in-out'
            }
          >
            <Link href={'/about'}>About</Link>
          </li>
          <Paint />
        </ul>
      </nav>
    </header>
  )
}

export default Header
