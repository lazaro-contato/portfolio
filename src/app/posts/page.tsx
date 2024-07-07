import React from 'react'
import PostItem from '@/components/PostItem/Index'
import { Article } from '@/services/http/repositories/articles/models'

const getArticles = async (): Promise<Article[]> => {
  const headers = new Headers()
  headers.append('api-key', process.env.DEVTO_PRIVATE_KEY || '')

  const res = await fetch('https://dev.to/api/articles/me/published', {
    method: 'GET',
    headers,
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog = async () => {
  const articles = await getArticles()

  return (
    <main className={'flex flex-col gap-8 px-5 w-full'}>
      <section className={'flex flex-col gap-4'}>
        <h1 className={'font-semibold text-5xl'}>Articles</h1>
        <p>Some of my published articles.</p>
        <ul className={'flex flex-col'}>
          {articles?.map((article, index) => {
            return <PostItem key={index} article={article} />
          })}
        </ul>
      </section>
    </main>
  )
}

export default Blog
