import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react';

export default function ServiceHero () {
  return (
    <div>
        <div className='relative isolate min-h-[58rem] overflow-hidden bg-[#031947] after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(90deg,rgba(3,18,52,0.97)_0%,rgba(3,25,71,0.88)_42%,rgba(3,25,71,0.28)_72%,rgba(3,25,71,0.12)_100%)] after:content-[""] sm:min-h-[53rem] md:min-h-[50rem] lg:h-200 lg:min-h-0'>
            <Image src="/images/ServiceHero.jpg" alt="A financial adviser reviewing figures and planning investments" fill preload sizes="100vw" className='z-0 object-cover object-[62%_bottom] sm:object-bottom'/>
            <div className='absolute inset-y-0 left-1/2 z-10 flex w-full max-w-7xl -translate-x-1/2 flex-col justify-center px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-10 2xl:px-0'>
                <h2 className='w-fit rounded-full border border-[#49a8ff]/50 bg-[#0b5fc5]/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#72bdff] shadow-[0_0_24px_rgba(20,130,255,0.12)] backdrop-blur-sm sm:px-5 sm:text-sm'>OUR SERVICES</h2>
                <h1 className='mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-balance drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)] sm:text-5xl md:text-6xl lg:text-7xl'>Financial Solutions Designed Around Your Goals.</h1>
                <p className='mt-6 max-w-2xl text-[0.95rem] leading-7 text-white/78 sm:mt-7 sm:text-lg sm:leading-8'>Whether you&apos;re planning for the future, growing your wealth, protecting your assets, or making important business decisions, our experienced advisors provide personalized financial strategies tailored to your unique needs. We simplify complex financial decisions so you can move forward with confidence.</p>
                <div className='mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:gap-10'>
                    <button className='flex w-full shrink-0 cursor-pointer flex-row items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#1597f5] to-[#075de5] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(7,93,229,0.3)] transition duration-300 hover:-translate-y-1 hover:gap-5 hover:from-[#27adff] hover:to-[#176ff0] hover:shadow-[0_18px_42px_rgba(18,138,255,0.38)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#63b8ff] active:translate-y-0 sm:w-fit sm:px-8 sm:text-base'>
                        Book a Free Consultation
                        <MoveRight size={18}/>
                    </button>
                    {/* <button className='flex flex-row items-center gap-2 mt-8 w-full cursor-pointer shrink-0 hover:gap-5 transition duration-300 hover:-translate-y-1 hover:border-b-2 hover:border-white hover:w-fit'>
                        Explore Services
                        <MoveRight size={18}/>
                    </button> */}
                    <button className="group relative inline-flex w-full shrink-0 cursor-pointer flex-row items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:gap-5 sm:w-fit sm:justify-start">
                        Explore Services
                        <MoveRight size={18} />
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-100 sm:w-40"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
