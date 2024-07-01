import React from 'react'

interface ProjectItemProps {
  image: string
  name: string
  description: string
  url: string
}

const ProjectItem = ({
  description,
  image,
  name,
  url,
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
        <div className={'flex flex-col'}>
          <span className={'text-2xl font-semibold'}>{name}</span>
          <span>{description}</span>
        </div>
      </div>
    </a>
  )
}

export default ProjectItem
