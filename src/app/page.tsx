import ProjectItem from '@/components/ProjectItem/Index'
import React from 'react'

export default function Home() {
  return (
    <main className={'flex flex-col gap-8 px-5 relative'}>
      <div className={'flex flex-col w-[700px] gap-4'}>
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
        <div className={'flex flex-col'}>
          <h1 className={'text-xl text-brightRed font-bold'}>WORK</h1>
        </div>
        <div className={'grid grid-cols-2 gap-3 w-full'}>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </section>
    </main>
  )
}
