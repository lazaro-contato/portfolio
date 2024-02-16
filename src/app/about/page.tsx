import React from 'react'
import Image from 'next/image'
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'
const About = () => {
  return (
    <main className={'flex flex-col gap-8 px-5 pt-5 h-full'}>
      <div className={'grid grid-cols-1 gap-6 md:grid-cols-2'}>
        <div className={'relative flex items-center justify-center'}>
          <div>
            <h1
              className={
                'font-granesta flex flex-col text-8xl text-brightOrange absolute -top-8'
              }
            >
              ME
            </h1>
            <Image
              className={'rounded-lg'}
              src={'/jose.png'}
              alt={"lazaro's image"}
              height={375}
              width={305}
            />
          </div>
        </div>
        <div className={'flex flex-col gap-4 md:justify-end'}>
          <p>
            Hi, my name is Lázaro Oliveira, and I am a frontend developer based
            in <span className={'underline cursor-pointer'}>Brazil</span>. I
            love making things with technology, and I really like to write about
            everything that I am learning (including not code related).
          </p>
          <p>
            I have over three years of experience working with{' '}
            <span className={'underline'}>
              Typescript, ReactJS, React Native and NextJS.
            </span>{' '}
            Also I’m creating a loading library to ReactJS projects. Check{' '}
            <a className={'underline text-brightOrange'}>here</a>.
          </p>
          <p>
            When I am not working or writing something I’m probably spending
            time with my family in a little city in the countryside.
          </p>
        </div>
      </div>

      <div className={'flex flex-col gap-2.5'}>
        <span className={'text-xl font-bold'}>Get in touch</span>
        <p className={'flex flex-wrap gap-2'}>
          Email me at
          <a
            className={
              'cursor-pointer flex flex-row items-center gap-2 hover:text-brightRed underline'
            }
            href={'mailto:contato.jlazaro@gmail.com'}
          >
            contato.jlazaro@gmail.com <BsArrowUpRight />
          </a>
          <span>or follow me via my social links.</span>
          <div className={'flex flex-row gap-2'}>
            <a
              className={
                'cursor-pointer hover:underline flex flex-row items-center gap-2'
              }
              href={'https://dev.to/lazarocontato'}
              rel={'noreferrer'}
              target={'_blank'}
            >
              <FaDev /> Dev.to
            </a>
            <span>|</span>
            <a
              className={
                'cursor-pointer hover:underline flex flex-row items-center gap-2'
              }
              href={'https://github.com/lazaro-contato'}
              rel={'noreferrer'}
              target={'_blank'}
            >
              <FaGithub color={'black'} />
              Github
            </a>
            <span>|</span>
            <a
              className={
                'cursor-pointer hover:underline flex flex-row items-center gap-2'
              }
              href={'https://www.linkedin.com/in/lazaro-contato/'}
              rel={'noreferrer'}
              target={'_blank'}
            >
              <FaLinkedin /> Linkedin
            </a>
          </div>
        </p>
      </div>
      {/* <div className={'flex flex-col gap-2.5'}> */}
      {/*  <span className={'text-xl text-brightRed'}>What I&apos;m learning</span> */}
      {/*  <div className={'flex flex-col gap-2'}> */}
      {/*    <span>Creating a farm with arduino</span> */}
      {/*    <span>My work desk created via AutoCAD</span> */}
      {/*    <span>How to draw?</span> */}
      {/*  </div> */}
      {/* </div> */}
    </main>
  )
}

export default About
