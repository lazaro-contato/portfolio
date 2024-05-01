import ProjectItem from '@/components/ProjectItem/Index'
import React from 'react'
import PostItem from '@/components/PostItem'

export default function Home() {
  return (
    <main className={'flex flex-col gap-8 px-5 relative'}>
      <div className={'flex flex-col max-w-[700px] gap-4'}>
        <img src={'/jose.png'} className={'w-12'} />
        <h1 className={'font-semibold text-4xl'}>
          Versatile Product Designer. Elevating Tech Startups with Intuitive
          Design Solution
        </h1>
        <span className={'text-grayLight'}>
          I’m Amjad, a Product Designer dedicated to refining and reshaping tech
          startups through intuitive and strategic design. With over 5 years in
          the field, I transform brand and user experiences across web and
          mobile platforms.
        </span>
      </div>
      <section className={'flex flex-col gap-2.5'} id="common">
        <div className={'grid grid-cols-1 gap-4 w-full md:grid-cols-2'}>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </section>
      <section>
        <div className={'flex flex-col'}>
          <h2 className={'font-semibold text-4xl'}>Arcticles</h2>
          <span>
            Over the years, I’ve had the pleasure of working on 30+ projects,
            end to end, and here are a few selected ones.
          </span>
        </div>

        <div className={'flex flex-col gap-2.5'}>
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
