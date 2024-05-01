import React from 'react'

const ProjectItem = (): JSX.Element => {
  return (
    <a className={'cursor-pointer'}>
      <div className={'flex flex-col gap-2'}>
        <img
          alt="name"
          className={
            'bg-brightOrange rounded-2xl transition-transform duration-500 transform hover:translate-y-[-8px]'
          }
          src={'/image2.png'}
        />
        <div className={'flex flex-col'}>
          <span className={'text-2xl font-semibold'}>New Content</span>
          <span>Product (UI/UX) Design | Mobile App & Landing page</span>
        </div>
      </div>
    </a>
  )
}

export default ProjectItem
