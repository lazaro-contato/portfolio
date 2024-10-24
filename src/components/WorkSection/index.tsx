import { FaLongArrowAltRight } from 'react-icons/fa'
import ProjectItem from '@/components/ProjectItem/Index'
import Link from 'next/link'

const WorkSection = () => {
  return (
    <section className={'flex flex-col gap-6'} id="common">
      <div className={'flex flex-row justify-between'}>
        <h2 className={'font-semibold text-4xl'}>Work</h2>{' '}
        <Link
          href={'/work'}
          className={
            'flex flex-row items-center justify-center gap-3 hover:translate-x-[4px] duration-300 transform cursor-pointer text-softBlue font-bold'
          }
        >
          See more
          <span>
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>

      <div className={'grid grid-cols-1 gap-4 w-full md:grid-cols-2'}>
        <ProjectItem
          name={'Our Time Together'}
          description={'Create a dynamic relationship time counter.'}
          techs={'NextJS, Typescript, Tailwind, React-hook-form'}
          image={'./outimetogether.png'}
          url={'https://ourtimetogetherapp.netlify.app/'}
        />
        <ProjectItem
          name={'CSS-100'}
          description={'100 CSS projects made with full vanilla css and js'}
          image={'./css-projects.jpg'}
          techs={'Pure CSS styles and animations'}
          url={'https://css100projects.netlify.app/'}
        />
      </div>
    </section>
  )
}

export default WorkSection
