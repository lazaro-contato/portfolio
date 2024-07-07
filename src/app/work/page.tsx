import React from 'react'
import Image from 'next/image'

const Work = async () => {
  return (
    <main className={'flex flex-col gap-8 px-5'}>
      <div className={'flex flex-col gap-4'}>
        <h1 className={'font-semibold text-5xl'}>Work</h1>
      </div>
      <section className={'flex flex-col gap-6'} id="common">
        <div className={'flex flex-col gap-4 items-center mt-16'}>
          <Image
            src={'/homeImage.png'}
            alt="art made by me!"
            title={'art made by me!'}
            height={300}
            width={300}
            className={'animate-float hover:animation-shake cursor-pointer'}
          />
          <span className={'font-semibold text-5xl'}>
            This page is being built
          </span>
        </div>

        {/* <div className={'grid grid-cols-1 gap-4 w-full md:grid-cols-2'}> */}
        {/*   <ProjectItem /> */}
        {/*   <ProjectItem /> */}
        {/*   <ProjectItem /> */}
        {/*   <ProjectItem /> */}
        {/*   <ProjectItem /> */}
        {/*   <ProjectItem /> */}
        {/*   <ProjectItem /> */}
        {/*   <ProjectItem /> */}
        {/* </div> */}
      </section>
    </main>
  )
}

export default Work
