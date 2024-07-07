import React from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import PersonalImage from '@/components/PersonalImage'
import SocialButtons from '@/components/SocialButtons'
import AboutSection from '@/components/AboutSection'
import ArticlesSection from '../components/ArticlesSection'
import WorkSection from '@/components/WorkSection'
import BrazilIcon from '@/components/BrazilIcon'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Home = () => {
  return (
    <main className={'flex flex-col gap-20 px-5 relative mb-24'}>
      <section className={'flex flex-col max-w-[700px] gap-4 mt-12'}>
        <PersonalImage />
        <div className={'flex flex-row gap-2 items-center text-softBlue'}>
          <FaCircleUser />
          <span>José Lázaro | Frontend Engineer</span>
        </div>
        <h1 className={'font-semibold text-4xl'}>
          Creating digital experiences and improving creative expression. Coding
          is Art too.
        </h1>
        <span className={'text-grayLight'}>
          I’m José Lázaro a {<BrazilIcon label={'brazilian'} />} frontend
          developer with over 3 years of experience with Typescript, React and
          React Native, I love creating incredible digital experiences that
          captivate and engage users.
        </span>
        <SocialButtons />
      </section>
      <WorkSection />
      <ArticlesSection />
      <AboutSection />
      <div
        className={
          'flex flex-col gap-10 mt-24 items-center justify-center text-center'
        }
      >
        <span className={'text-2xl'}>Need a project?</span>
        <Link
          href={'https://www.linkedin.com/in/lazaro-contato/'}
          target="_blank"
        >
          <div
            className={
              'flex flex-row gap-3 justify-center items-center text-center text-5xl lg:text-7xl hover:text-softBlue transition duration-200 ease-in-out hover:translate-x-[4px] transform'
            }
          >
            <span>Let&apos;s work together</span>
            <FaLongArrowAltRight className={'pt-3'} />
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Home
