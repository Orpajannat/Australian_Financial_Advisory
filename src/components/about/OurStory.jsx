import Image from 'next/image'
import React from 'react'

export default function OurStory () {
  return (
    <section className='overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24'>
        <div className='max-w-xl lg:py-8'>
          <p className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0875ec] sm:text-sm'>
            <span className='h-px w-8 bg-[#0875ec] transition-all duration-300 hover:w-12' aria-hidden='true' />
            Our Story
          </p>

          <h2 className='mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#06183f] sm:text-5xl lg:text-6xl'>
            Built on Trust.<br />
            Focused on <span className='text-[#0875ec] transition-colors duration-300 hover:text-[#24a0ff]'>You.</span>
          </h2>

          <div className='mt-7 space-y-5 text-[0.98rem] leading-7 text-[#536078] sm:mt-8 sm:text-lg sm:leading-8'>
            <p className='transition-colors duration-300 hover:text-[#263956]'>
              Australian Financial Advisory was founded with a clear purpose: to make quality financial advice personal, practical, and genuinely valuable. Backed by extensive industry experience, our team brings together deep expertise, integrity, and an unwavering commitment to putting clients first.
            </p>
            <p className='transition-colors duration-300 hover:text-[#263956]'>
              We take the time to understand your circumstances, ambitions, and priorities before shaping a strategy around you. The result is considered advice that helps you build, protect, and enjoy your wealth with lasting confidence.
            </p>
          </div>
        </div>

        <div className='group relative mx-auto w-full max-w-3xl pb-20 sm:pb-16 lg:pb-12'>
          <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#dceafa] shadow-[0_24px_65px_rgba(5,38,91,0.14)] sm:aspect-[7/5] sm:rounded-[2rem]'>
            <Image
              src='/images/sydney.jpg'
              alt='The Sydney Opera House overlooking the harbour'
              fill
              sizes='(max-width: 1023px) 100vw, 58vw'
              className='object-cover transition duration-700 ease-out group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-linear-to-t from-[#031947]/25 via-transparent to-white/5 opacity-70 transition-opacity duration-500 group-hover:opacity-40' aria-hidden='true' />
          </div>

          <div className='absolute bottom-0 right-3 flex w-[calc(100%-1.5rem)] items-center gap-4 rounded-2xl border border-white/15 bg-[#061f57]/95 px-5 py-5 text-white shadow-[0_18px_45px_rgba(2,22,65,0.3)] backdrop-blur-md transition duration-500 group-hover:-translate-y-2 group-hover:bg-[#082a70]/95 group-hover:shadow-[0_24px_55px_rgba(2,38,100,0.4)] sm:right-[-1rem] sm:w-auto sm:max-w-sm sm:gap-5 sm:px-6 sm:py-6 lg:right-[-2rem]'>
            <span className='grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#2492ff]/45 bg-[#08285f] text-[#35a9ff] transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-[#48b4ff] group-hover:bg-[#0b61c9] group-hover:text-white' aria-hidden='true'>
              <svg viewBox='0 0 24 24' className='h-7 w-7' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z' />
                <circle cx='12' cy='10' r='3' />
              </svg>
            </span>
            <p className='text-sm font-medium leading-6 text-white/90 sm:text-base sm:leading-7'>
              Proudly based in Sydney,<br className='hidden sm:block' /> serving clients across Australia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
