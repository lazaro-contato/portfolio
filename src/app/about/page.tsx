import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import SocialButtons from '@/components/SocialButtons'
import AboutSlider from '@/components/AboutSlider'
const About = () => {
  return (
    <main className={'flex flex-col gap-8 px-5 pt-5 h-full'}>
      <section className={'grid grid-cols-1 gap-6 md:grid-cols-2'}>
        <div className={'flex flex-col gap-6'}>
          <h1 className={'font-semibold text-5xl'}>About</h1>
          <div className={'flex flex-col gap-8'}>
            <div className={'flex flex-col gap-2.5'}>
              <p>
                Hey, I’m José Lázaro a brazilian frontend developer with over 3
                years of experience with{' '}
                <span className={'font-bold'}>
                  Typescript, React and React Native and NextJS.
                </span>
              </p>
              <p>
                I am currently pursuing a graduate specialization in Software
                Engineering at PUC Minas. My studies focus on advanced software
                design principles, mastering software architecture, and
                cutting-edge development practices.
              </p>

              <span className={'text-2xl font-bold'}>Experience</span>
              <ul className={'text-softBlue'}>
                <li className={'flex flex-row items-center gap-2'}>
                  Typescript +3 Years
                </li>
                <li className={'flex flex-row items-center gap-2'}>
                  React Native +3 Years
                </li>
                <li className={'flex flex-row items-center gap-2'}>
                  React JS +3 Years
                </li>
                <li className={'flex flex-row items-center gap-2'}>
                  NextJS +1 Year
                </li>
              </ul>
            </div>
            <div className={'flex flex-col gap-2.5'}>
              <span className={'text-2xl font-bold'}>Skills</span>
              <ul className={'flex flex-col gap-3'}>
                <li>
                  <p>
                    <span className={'font-bold'}>JS Frameworks:</span> ReactJS,
                    React Native and Next.js.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={'font-bold'}>Testing: </span>Experienced
                    with testing frameworks like Jest and React Testing Library
                    to ensure code quality and reliability.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={'font-bold'}>Styling:</span> Sass, Styled
                    Components, Bootstrap, Material UI, Chakra UI, Tailwind, CSS
                    Modules.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={'font-bold'}>API:</span> GraphQL, REST.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={'font-bold'}>
                      Tech I Study in Personal Projects:{' '}
                    </span>
                    Python, Flutter, Node.js.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={'font-bold'}>Languages: </span>
                    Advanced English, Native Portuguese.
                  </p>
                </li>
              </ul>
            </div>
            <div className={'flex flex-col gap-2.5'}>
              <span className={'text-2xl font-bold'}>Projects</span>
              <ul>
                <li>
                  <p>
                    <span className={'font-bold'}>E-commerce Platform: </span> I
                    am currently building a fully functional e-commerce platform
                    using NextJS and Tailwind, with a focus on performance
                    optimization and user experience.
                  </p>
                </li>
                <li className={'flex flex-row items-center gap-2'}>
                  <p>
                    <span className={'font-bold'}>Catholic Social Media: </span>
                    Built a React Native application and a web platform using
                    ReactJS for Catholic communities, enabling members to
                    connect, share content, and stay updated with community
                    events and news.
                  </p>
                </li>
              </ul>
            </div>
            <div className={'flex flex-col gap-2.5'}>
              <span className={'text-2xl font-bold'}>Things I like</span>
              <p>
                In addition to coding, I have a passion for creative expression.
                I discovered that drawing is a powerful way of expressing
                myself. Among my biggest inspirations are Gawx and Kim Jung Gi.
                Check here some of my drawings
              </p>
            </div>
            <div className={'flex flex-col gap-2.5'}>
              <span className={'text-xl font-bold'}>
                Are you interested in my work? Get in touch
              </span>
              <p className={'flex flex-wrap gap-2'}>
                Email me at
                <a
                  className={
                    'cursor-pointer flex flex-row items-center gap-2 hover:text-softBlue transition duration-200 underline'
                  }
                  href={'mailto:contato.jlazaro@gmail.com'}
                >
                  contato.jlazaro@gmail.com <BsArrowUpRight />
                </a>
                <span>or follow me via my social links.</span>
                <SocialButtons />
              </p>
            </div>
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

        {/* <p> */}
        {/*  In addition to being a developer, I have a great appreciation for */}
        {/*  entrepreneurship, where I try to combine my interests to develop */}
        {/*  new products. One result of this is a clothing brand that we ended */}
        {/*  up developing in Brazil. Check here the */}
        {/*  <span className={'italic font-bold'}> Fade jump®</span> */}
        {/* </p> */}
        <div className={'flex flex-col gap-6'}>
          <AboutSlider />
          <div>
            <SocialButtons />
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
