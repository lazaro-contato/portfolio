import { FaLongArrowAltRight } from 'react-icons/fa'
import AboutSlider from '@/components/AboutSlider'
import React from 'react'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className={'grid grid-cols-1 gap-6 md:grid-cols-2'}>
      <div className={'flex flex-col gap-4'}>
        <div>
          <h2 className={'font-semibold text-4xl'}>About</h2>
          <p>
            Hey, I’m José Lázaro a brazilian frontend developer with over 3
            years of experience with{' '}
            <span className={'font-bold'}>
              Typescript, React and React Native and NextJS.
            </span>
          </p>
          <br />
          <p>
            I am currently pursuing a graduate specialization in Software
            Engineering at PUC Minas. My studies focus on advanced software
            design principles, mastering software architecture, and cutting-edge
            development practices.
          </p>
          <br />
          <p>
            In addition to coding, I have a passion for creative expression. I
            discovered that drawing is a powerful way of expressing myself,
            among my biggest inspirations are Gawx and Kim Jung Gi.
          </p>
        </div>
        <Link href={'/about'}>
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
        </Link>
      </div>
      <div>
        <AboutSlider />
      </div>
    </section>
  )
}

export default AboutSection
