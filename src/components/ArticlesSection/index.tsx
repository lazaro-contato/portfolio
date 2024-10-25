import { FaLongArrowAltRight } from 'react-icons/fa'
import PostItem from '@/components/PostItem/Index'
import React from 'react'
import { Article } from '@/services/http/repositories/articles/models'
import Link from 'next/link'

const getArticles = async (size: number): Promise<Article[]> => {
  const headers = new Headers()
  headers.append('api-key', process.env.NEXT_PUBLIC_DEVTO_PRIVATE_KEY || '')

  const res = await fetch(
    `https://dev.to/api/articles/me/published?per_page=${size}`,
    {
      method: 'GET',
      headers,
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const ArticlesSection = async () => {
  const articles = await getArticles(5)
  return (
    <section className={'flex flex-col gap-6'}>
      <div className={'flex flex-row justify-between'}>
        <h2 className={'font-semibold text-4xl'}>Articles</h2>{' '}
        <Link
          href={'/posts'}
          className={
            'flex flex-row items-center justify-center gap-3 hover:translate-x-[4px] duration-300 transform cursor-pointer text-softBlue font-bold'
          }
        >
          See more
          <span>
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>

      <ul className={'flex flex-col'}>
        {articles?.map((article, index) => {
          return <PostItem key={index} article={article} />
        })}
      </ul>
    </section>
  )
}

export default ArticlesSection
