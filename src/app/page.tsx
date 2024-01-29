import Image from 'next/image'
import PostItem from "@/components/PostItem/Index";
import ProjectItem from "@/components/ProjectItem/Index";


export default function Home() {

  return (
      <main className={'flex flex-col gap-8 px-5 pt-3'}>
          <div className={'flex flex-col gap-4 h-screen items-center justify-center'}>
                  <div className={'font-granesta flex flex-col text-center items-center'}>
                      <Image className={'motion-safe:animate-float md:w-96'} src={'https://i.pinimg.com/564x/10/63/ef/1063ef85538c9f6c7ee047258ef15cf7.jpg'} alt={'IMAGE'} width={273} height={273}/>
                      <span className={'text-brightOrange text-6xl'}>I'M LAZARO</span>
                      <span className={'text-6xl'}>A FRONTEND ENGINEER</span>
                  </div>
              <a className={'text-brightOrange text-lg'} href={'#common'}>check my content</a>
          </div>

          <section className={'flex flex-col gap-2.5 pt-20'} id="common">
              <div className={'flex flex-col'}>
                  <span className={'text-xl text-brightRed font-bold'}>COMMON VIEWED</span>
                  <span className={'text-brightBlue font-bold'}>some of my posts</span>
              </div>
              <div className={'flex flex-col gap-3'}>
                  <PostItem />
                  <PostItem />
                  <PostItem />
              </div>
          </section>

          <div className={'flex flex-col gap-2.5'}>
              <div className={'flex flex-col'}>
                  <span className={'text-xl text-brightRed font-bold'}>WORK</span>
                  <span className={'text-brightBlue font-bold'}>a collection of wild styles</span>
              </div>
              <div className={'flex flex-col gap-2'}>
                  <ProjectItem />
                  <ProjectItem />
                  <ProjectItem />
              </div>
          </div>

      </main>
  )
}
