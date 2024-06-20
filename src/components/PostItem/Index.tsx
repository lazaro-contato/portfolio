import React from 'react'
import { Article } from '@/services/http/repositories/articles/models'
import { formatDate } from '@/utils/string'

interface PostItemProps {
  article?: Article
}

const PostItem = ({ article }: PostItemProps): JSX.Element => {
  return (
    <li
      className={
        'px-4 pt-1 rounded hover:bg-slate-50 transition ease-in duration-300 border-b '
      }
    >
      <a className={'cursor-pointer'} href={article?.url} target={'_blank'}>
        <div className={'h-16 flex flex-row justify-between items-center'}>
          <div className={'flex flex-col gap-2 text-sm md:text-base'}>
            <span>{article?.title}</span>
            <span className={'text-[12px] md:text-sm text-grayLight'}>
              {article?.published_at && formatDate(article.published_at)}
            </span>
          </div>
          <div>
            <span className={'text-sm md:text-base text-grayLight'}>
              {article?.page_views_count} views
            </span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default PostItem
