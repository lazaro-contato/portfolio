import React from "react";

const Header = (): JSX.Element => {
    return (
        <header>
            <ul className={'flex justify-around max-w-2xl py-2 fixed z-20 w-full backdrop-blur-sm font-bold'}>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Blog</a>
                </li>
                <li>
                    <a>About</a>
                </li>
            </ul>
        </header>
    )
}

export default Header