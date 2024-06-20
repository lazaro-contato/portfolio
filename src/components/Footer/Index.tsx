const Footer = () => {
  return (
    <footer className={'flex flex-col gap-2 px-5 justify-end mb-6'}>
      <div className={'w-full h-[1px] bg-graySoft'} />
      <div className={'flex flex-col gap-2'}>
        <span className={'text-sm'}>
          {' '}
          Copyright © 2019-2024 José Lázaro · All Rights Reserved.
        </span>
        <address
          className={'flex  flex-row gap-2 text-grayLight text-sm not-italic'}
        >
          <a
            className={'cursor-pointer hover:underline'}
            href={'https://dev.to/lazarocontato'}
            rel={'noreferrer'}
            target={'_blank'}
          >
            Dev.to
          </a>
          <span>•</span>
          <a
            className={'cursor-pointer hover:underline'}
            href={'https://github.com/lazaro-contato'}
            rel={'noreferrer'}
            target={'_blank'}
          >
            Github
          </a>
          <span>•</span>
          <a
            className={'cursor-pointer hover:underline'}
            href={'https://www.linkedin.com/in/lazaro-contato/'}
            rel={'noreferrer'}
            target={'_blank'}
          >
            Linkedin
          </a>
          {/* <span>•</span> */}
          {/* <a className={'cursor-pointer hover:underline'}>my personal barsa</a> */}
        </address>
      </div>
    </footer>
  )
}

export default Footer
