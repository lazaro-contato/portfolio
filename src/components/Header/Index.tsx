'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <header className={'py-6'}>
      <div className={'flex items-center justify-center'}>
        <ul className={'flex flex-row text-center font-semibold'}>
          <li>
            <Link
              href={'/'}
              className={`inline-block w-24 hover:text-softBlue transition duration-200 ease-in-out ${pathname === '/' && 'text-softBlue'}`}
            >
              Home
            </Link>
          </li>
          <li className={'h-6'}>
            <Link
              href={'/posts'}
              className={`inline-block w-24 hover:text-softBlue transition duration-200 ease-in-out ${pathname === '/posts' && 'text-softBlue'}`}
            >
              Posts
            </Link>
          </li>
          <li className={'h-6'}>
            <Link
              href={'/work'}
              className={`inline-block w-24 hover:text-softBlue transition duration-200 ease-in-out ${pathname === '/work' && 'text-softBlue'}`}
            >
              Projects
            </Link>
          </li>
          <li className={'h-6'}>
            <Link
              href={'/about'}
              className={`inline-block w-24 hover:text-softBlue transition duration-200 ease-in-out ${pathname === '/about' && 'text-softBlue'}`}
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
