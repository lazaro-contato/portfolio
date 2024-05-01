import React from 'react'

const PostItem = (): JSX.Element => {
  return (
    <li>
      <a className={'cursor-pointer'}>
        <div
          className={
            'h-16 flex flex-row justify-between items-center bg-brightBlue'
          }
        >
          <span>Creating Farm</span>
          <div>
            <span>14/04/2022</span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default PostItem
