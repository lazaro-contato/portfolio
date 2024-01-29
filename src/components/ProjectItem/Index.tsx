import React from "react";
import Image from "next/image";

const ProjectItem = (): JSX.Element => {
    return (
        <div className={'flex flex-col gap-1 justify-center'}>
            <Image alt='name' className={'h-52 w-80'} src={''}/>
        </div>
    )
}

export default ProjectItem