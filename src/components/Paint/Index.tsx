'use client'

import {useState} from "react";
import Image from "next/image";

const Paint = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`fixed top-12 right-3 w-10 rounded-full transition-all ${isOpen ? 'h-64' : 'h-10'} bg-softBlue flex align-middle justify-center`}>
            <button className={'w-10 h-10 rounded-full border-0 shadow-md flex items-center justify-center' } onClick={()=> setIsOpen(!isOpen)} ><Image src={'/traced.svg'} alt={'brush'} width={20} height={20}/></button>
        </div>
    )
}

export default Paint