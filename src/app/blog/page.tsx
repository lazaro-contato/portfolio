import React from 'react'
import PostItem from '@/components/PostItem/Index'

const Blog = () => {
  return (
    <main className={'flex flex-col gap-8 px-5'}>
      <h1 className={'font-granesta flex flex-col text-6xl text-brightOrange'}>
        -&gt; BLOGG
      </h1>
      <section className={'flex flex-col gap-4'}>
        <span className={'font-bold text-lg'}>some of my posts</span>
        <ul className={'flex flex-col gap-4'}>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </ul>
      </section>
      <section className={'flex flex-col gap-6'}>
        <h2
          className={'font-granesta flex flex-col text-4xl text-brightOrange'}
        >{`// BARSA`}</h2>

        <span>
          This section is not related just about code. I like learning about
          many things, from bees to electricity. I decided to create a personal
          library to put all my projects and work, so if you like a little bit
          of interdisciplinarity feel free to see{' '}
          <a className={'text-brightRed underline italic cursor-pointer'}>
            my personal barsa.
          </a>
        </span>
        <div className={'flex flex-row gap-1'}>
          <div className={'w-4 h-auto bg-brightOrange'} />

          <div className={'p-3 bg-brightOrange/10 text-justify'}>
            <span className={'italic text-grayLight'}>
              <a className={'cursor-pointer underline'}>Barsa</a> it is a
              refferecent to the first Brazilian encyclopedia, distinguished for
              providing comprehensive knowledge that spanned from sciences to
              humanities. It became a significant reference for the
              dissemination of knowledge in Brazil.
            </span>
          </div>
        </div>

        <div className={'flex flex-col gap-2.5'}>
          <h3 className={'text-xl font-bold'}>mind chapters</h3>
          <ul className={'flex flex-col gap-2'}>
            <PostItem />
            <PostItem />
            <PostItem />
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Blog
