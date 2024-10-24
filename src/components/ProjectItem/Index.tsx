import React from 'react'

interface ProjectItemProps {
  image: string
  name: string
  description: string
  url: string
  techs: string
}

const ProjectItem = ({
  description,
  image,
  name,
  url,
  techs,
}: ProjectItemProps): JSX.Element => {
  return (
    <a className={'cursor-pointer'} href={url} target={'_blank'}>
      <div className={'flex flex-col gap-2'}>
        <img
          alt="name"
          className={
            'bg-brightOrange rounded-2xl transition-transform duration-500 transform hover:translate-y-[-8px]'
          }
          src={image}
        />
        <div className={'flex flex-col gap-2'}>
          <span className={'text-2xl font-semibold'}>{name}</span>
          <div className={'flex flex-col'}>
            <span>{description}</span>
            <span>
              <span className={'font-bold'}>Techs: </span>
              {techs}
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectItem
