'use client'

import {useState} from "react";

const Paint = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`fixed top-12 right-3 w-16 rounded-lg bg-brightOrange transition-all ${isOpen ? 'h-64' : 'h-16'} flex justify-center align-middle`}>
            <button className={'h-16 w-16 bg-transparentGray'} onClick={()=> setIsOpen(!isOpen)}>O</button>
        </div>
    )
}

export default Paint