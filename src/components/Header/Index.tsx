'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

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
              'hover:bg-brightOrange/10 hover:scale-105 transition duration-300 ease-in-out'
            }
          >
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
