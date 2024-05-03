import React from 'react'

const PostItem = (): JSX.Element => {
  return (
    <li
      className={
        'px-4 pt-1 rounded hover:bg-slate-50 transition ease-in duration-300 border-b '
      }
    >
      <a className={'cursor-pointer'}>
        <div className={'h-16 flex flex-row justify-between items-center'}>
          <div className={'flex flex-col gap-2 text-sm md:text-base'}>
            <span>Creating Farm with arduino</span>
            <span className={'text-[12px] md:text-sm text-grayLight'}>
              14/04/2022
            </span>
          </div>

          <div>
            <span className={'text-sm md:text-base text-grayLight'}>
              1,4215 views
            </span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default PostItem
