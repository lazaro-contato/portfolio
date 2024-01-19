import Image from 'next/image'
import PostItem from "@/components/PostItem/Index";


export default function Home() {

  return (
      <main className={'flex flex-col gap-8 px-5 pt-3'}>
          <div className={'flex flex-col gap-5'}>
              <div className={'flex flex-col gap-2'}>
                  <div className={'font-lato flex flex-col text-6xl font-extrabold'}>
                      <span>HELLO</span>
                      <span>I'M LÁZARO</span>
                  </div>
                  <span className={'text-xl text-brightRed'}>THE FRONTEND ENGINEER</span>
              </div>
              <span>
                I like to learning things, building others
                and urban art. Sometimes I like to write
                about my interest and things that I’m learning.
          </span>
          </div>

          <div className={'flex flex-col gap-2.5'}>
              <span className={'text-xl text-brightRed'}>Latest Posts</span>
              <div className={'flex flex-col gap-2'}>
                  <PostItem />
                  <PostItem />
                  <PostItem />
              </div>
          </div>

          <div className={'flex flex-col gap-2.5'}>
              <span className={'text-xl text-brightRed'}>Some Projects</span>
              <div className={'flex flex-col gap-2'}>
                  <PostItem />
                  <PostItem />
                  <PostItem />
              </div>
          </div>

      </main>
  )
}
