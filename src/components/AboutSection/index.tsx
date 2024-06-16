import { FaLongArrowAltRight } from 'react-icons/fa'
import AboutSlider from '@/components/AboutSlider'
import React from 'react'

const AboutSection = () => {
  return (
    <section className={'grid grid-cols-1 gap-6 md:grid-cols-2'}>
      <div className={'flex flex-col gap-4'}>
        <div>
          <h2 className={'font-semibold text-4xl'}>About</h2>
          <p>
            Hey, I’m José Lázaro a brazilian frontend developer with over 3
            years of experience with Typescript, React and React Native, I love
            creating digital experiences that captivate and engage users.
          </p>
          <br />
          <p>
            In addition to coding, I have a passion for creative expression. I
            discovered that drawing is a powerful way of expressing myself,
            among my biggest inspirations are Gawx and Kim Jung Gi.
          </p>
          <br />
          <p>
            I really like learning about many things, from bees to electricity.
            So I decided to create a personal library to put all my projects and
            work, so if you like a little bit of interdisciplinary feel free to
            see{' '}
            <a className={'text-softBlue underline italic cursor-pointer'}>
              my personal barsa.
            </a>
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
  )
}

export default AboutSection
