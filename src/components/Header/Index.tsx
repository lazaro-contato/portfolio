import React from "react";
import Link from "next/link";

const Header = (): JSX.Element => {
    return (
        <header>
            <ul className={'flex justify-around max-w-2xl py-2 fixed z-20 w-full backdrop-blur-sm font-bold'}>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header