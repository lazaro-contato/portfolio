import React from "react";
import Image from "next/image";

const ProjectItem = (): JSX.Element => {
    return (
        <div className={'w-full h-auto'}>
            <Image alt='name' className={'h-full w-full bg-brightOrange'} src={'/image2.png'} width={160} height={203}/>
        </div>

    )
}

export default ProjectItem