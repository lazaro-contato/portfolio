import ProjectItem from '@/components/ProjectItem/Index'
import HomeImage from '@/components/HomeImage/Index'
import React from 'react'

export default function Home() {
  return (
    <main className={'flex flex-col gap-8 px-5 relative'}>
      <div
        className={'flex flex-col gap-4 h-screen items-center justify-center'}
      >
        <div className={'font-granesta flex flex-col text-center items-center'}>
          <HomeImage />
          <span className={'text-brightOrange text-6xl'}>I&apos;M LAZARO</span>
          <span className={'text-6xl'}>A FRONTEND ENGINEER</span>
        </div>
        <a className={'text-brightOrange text-lg'} href={'#common'}>
          check my work
        </a>
      </div>

      <span>
        I like design and building things, programming and drawing. Sometimes I
        like to write about my interests and everything I&apos;m learning. Take
        a look at{' '}
        <a className={'text-brightRed underline italic cursor-pointer'}>
          my personal barsa.
        </a>
      </span>
      <section className={'flex flex-col gap-2.5'} id="common">
        <div className={'flex flex-col'}>
          <h1 className={'text-xl text-brightRed font-bold'}>WORK</h1>
        </div>
        <div className={'grid grid-cols-1 sm:grid-cols-2 justify-items-center'}>
          <div className={'grid grid-cols-1 gap-3 justify-center'}>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>
          <div className={'grid grid-cols-1 gap-3'}>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>
        </div>
      </section>
    </main>
  )
}
