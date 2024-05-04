import ProjectItem from '@/components/ProjectItem/Index'
import React from 'react'
import PostItem from '@/components/PostItem/Index'
import { FaCircleUser } from 'react-icons/fa6'
import PersonalImage from '@/components/PersonalImage'
import { FaLongArrowAltRight } from 'react-icons/fa'
import SocialButtons from '@/components/SocialButtons'
import AboutSlider from '@/components/AboutSlider'

const Home = () => {
  return (
    <main className={'flex flex-col gap-20 px-5 relative mb-24'}>
      <section className={'flex flex-col max-w-[700px] gap-4 mt-40'}>
        <PersonalImage />
        <div className={'flex flex-row gap-2 items-center text-softBlue'}>
          <FaCircleUser />
          <span>José Lázaro | Frontend Enginner</span>
        </div>
        <h1 className={'font-semibold text-4xl'}>
          Versatile Product Designer. Elevating Tech Startups with Intuitive
          Design Solution
        </h1>
        <span className={'text-grayLight'}>
          I’m José Lázaro a brazilian frontend developer with over 3 years of
          experience with Typescript, React and React Native, I love creating
          incredible digital experiences that captivate and engage users.
        </span>
        <SocialButtons />
      </section>
      <section className={'flex flex-col gap-6'} id="common">
        <div className={'flex flex-row justify-between'}>
          <h2 className={'font-semibold text-4xl'}>Work</h2>{' '}
          <a
            className={
              'flex flex-row items-center justify-center gap-3 hover:translate-x-[4px] duration-300 transform cursor-pointer text-softBlue font-bold'
            }
          >
            See more
            <span>
              <FaLongArrowAltRight />
            </span>
          </a>
        </div>

        <div className={'grid grid-cols-1 gap-4 w-full md:grid-cols-2'}>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </section>
      <section className={'flex flex-col gap-6'}>
        <div className={'flex flex-row justify-between'}>
          <div className={'flex flex-col'}>
            <h2 className={'font-semibold text-4xl'}>Articles</h2>{' '}
            <span>
              Over the years, I’ve had the pleasure of working on 30+ projects,
              end to end, and here are a few selected ones.
            </span>
          </div>
          <a
            className={
              'flex flex-row items-center justify-center gap-3 hover:translate-x-[4px] duration-300 transform cursor-pointer text-softBlue font-bold'
            }
          >
            See more
            <span>
              <FaLongArrowAltRight />
            </span>
          </a>
        </div>

        <ul className={'flex flex-col'}>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </ul>
      </section>
      <section className={'grid grid-cols-1 gap-6 md:grid-cols-2'}>
        <div className={'flex flex-col gap-4'}>
          <div>
            <h2 className={'font-semibold text-4xl'}>About</h2>
            <p>
              Hey, I’m José Lázaro a brazilian frontend developer with over 3
              years of experience with Typescript, React and React Native, I
              love headfirst into creating incredible digital experiences that
              captivate and engage users.
            </p>
            <br />
            <p>
              In addition to coding, I have a passion for creative expression. I
              discovered that drawing is a powerful way of expressing myself,
              among my biggest inspirations are Gawx and Kim Jung Gi.
            </p>
            <br />
            <p>
              As an entrepreneur, I am constantly looking for new ways to
              combine my passion for technology and artistic expression. I
              firmly believe in technology's ability to transform lives and
              communities, and I'm determined to use my skills to make a
              difference.
            </p>
          </div>
          <button
            className={
              'bg-softBlue py-2 rounded text-white w-32 flex flex-row items-center justify-center gap-3 hover:translate-x-[4px] duration-300 transform'
            }
          >
            See more
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </div>
        <div>
          <AboutSlider />
        </div>
      </section>
    </main>
  )
}

export default Home
