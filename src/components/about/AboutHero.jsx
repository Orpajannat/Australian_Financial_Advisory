import Image from 'next/image'
import React from 'react'

export default function AboutHero () {
  return (
    <div className='relative isolate min-h-[44rem] overflow-hidden bg-[#031947] after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(90deg,rgba(3,18,52,0.97)_0%,rgba(3,25,71,0.88)_42%,rgba(3,25,71,0.28)_72%,rgba(3,25,71,0.12)_100%)] after:content-[""] sm:min-h-[48rem] lg:h-200 lg:min-h-0'>
        <Image src="/images/AboutHero.jpg" alt="A financial adviser reviewing figures and planning investments" fill preload sizes="100vw" className='z-0 object-cover object-[62%_bottom] sm:object-bottom'/>
        <div className='absolute inset-y-0 left-1/2 z-10 flex w-full max-w-7xl -translate-x-1/2 flex-col justify-center px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 xl:px-0'>
            <h2 className='w-fit rounded-full border border-[#49a8ff]/50 bg-[#0b5fc5]/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#72bdff] shadow-[0_0_24px_rgba(20,130,255,0.12)] backdrop-blur-sm sm:px-5 sm:text-sm'>About Us</h2>
            <h1 className='mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-balance drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)] sm:text-5xl md:text-6xl lg:text-7xl'>Guiding You Towards Financial Confidence</h1>
            <p className='mt-6 max-w-2xl text-[0.95rem] leading-7 text-white/78 sm:mt-7 sm:text-lg sm:leading-8'>At <b className='font-semibold text-white'>Australian Financial Advisory</b>, we believe financial success begins with informed decisions and trusted partnerships. Our mission is to provide personalized financial guidance that empowers individuals, families, and businesses to achieve their goals with confidence. Through integrity, expertise, and a client-first approach, we help you navigate every stage of your financial journey with clarity and peace of mind.</p>
            <button className='mt-8 w-full cursor-pointer rounded-xl bg-linear-to-r from-[#1597f5] to-[#075de5] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(7,93,229,0.3)] transition duration-300 hover:-translate-y-1 hover:from-[#27adff] hover:to-[#176ff0] hover:shadow-[0_18px_42px_rgba(18,138,255,0.38)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#63b8ff] active:translate-y-0 sm:w-fit sm:px-8 sm:text-base'>
                Book a Free Consultation
            </button>
        </div>
    </div>
  )
}
