import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import SocialButtons from '@/components/SocialButtons'
import { SiTypescript } from 'react-icons/si'
import { IoLogoReact } from 'react-icons/io5'
import { RiNextjsFill } from 'react-icons/ri'
const About = () => {
  return (
    <main className={'flex flex-col gap-8 px-5 pt-5 h-full'}>
      <section className={'grid grid-cols-1 gap-6 md:grid-cols-2'}>
        <div className={'flex flex-col gap-4'}>
          <h2 className={'font-semibold text-5xl'}>About</h2>
          <div>
            <p>
              Hey, I’m José Lázaro a brazilian frontend developer with over 3
              years of experience with Typescript, React and React Native, I
              love creating incredible digital experiences that captivate and
              engage users.
            </p>
            <br />
            <p>
              In addition to coding, I have a passion for creative expression. I
              discovered that drawing is a powerful way of expressing myself.
              Among my biggest inspirations are Gawx and Kim Jung Gi. Check here
              some of my drawings
            </p>
            <div className={'flex flex-row mt-4'}>
              <img
                src={'/gawx1.jpg'}
                className={'h-72 rounded'}
                alt={'Gawx Art'}
              />
            </div>
          </div>
          {/* <div className={'flex flex-col gap-2.5'}> */}
          {/* <span className={'text-xl font-bold'}>My personal Blog</span> */}
          {/* <p> */}
          {/*   I like learning about many things, from bees to electricity. I */}
          {/*   decided to create a personal library to put all my projects and */}
          {/*   work, so if you like a little bit of interdisciplinarity feel free */}
          {/*   to see{' '} */}
          {/*   <a className={'text-brightRed underline italic cursor-pointer'}> */}
          {/*     my personal barsa. */}
          {/*   </a> */}
          {/* </p> */}
          {/* </div> */}
          <div className={'flex flex-col gap-2.5'}>
            <span className={'text-xl font-bold'}>Experience</span>
            <ul className={'text-softBlue'}>
              <li className={'flex flex-row items-center gap-2'}>
                <SiTypescript />
                Typescript +3 Years
              </li>
              <li className={'flex flex-row items-center gap-2'}>
                <IoLogoReact />
                React Native +3 Years
              </li>
              <li className={'flex flex-row items-center gap-2'}>
                <IoLogoReact />
                React JS +3 Years
              </li>
              <li className={'flex flex-row items-center gap-2'}>
                <RiNextjsFill />
                NextJS +1 Year
              </li>
            </ul>
          </div>

          <div className={'flex flex-col gap-2.5'}>
            <p>
              In addition to being a developer, I have a great appreciation for
              entrepreneurship, where I try to combine my interests to develop
              new products. One result of this is a clothing brand that we ended
              up developing in Brazil. Check here the
              <span className={'italic font-bold'}> Fade jump®</span>
            </p>
          </div>
          <br />

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
            </p>
          </div>
        </div>
        <div>
          <img
            alt="name"
            className={
              'bg-brightOrange rounded-2xl transition-transform duration-500 transform hover:translate-y-[-8px]'
            }
            src={'/image2.png'}
          />
          <SocialButtons />
        </div>
      </section>
    </main>
  )
}

export default About
