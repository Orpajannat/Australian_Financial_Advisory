import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'

export default function Decision () {
  return (
    <section className='overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='group relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#d8e5f4] bg-[#f2f7fe] shadow-[0_28px_75px_rgba(7,49,111,0.11)] transition duration-700 hover:border-[#a9cef7] hover:shadow-[0_34px_90px_rgba(7,66,151,0.17)] sm:rounded-[2.75rem] lg:grid-cols-[0.72fr_1.28fr]'>
        <div className='relative min-h-72 overflow-hidden bg-[#c9dced] sm:min-h-80 lg:min-h-[28rem]'>
          <Image
            src='/images/Decision.jpg'
            alt='An adviser listening carefully during a financial conversation'
            fill
            sizes='(max-width: 1023px) 100vw, 40vw'
            className='object-cover transition duration-700 ease-out group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-linear-to-t from-[#031947]/55 via-[#031947]/5 to-transparent' aria-hidden='true' />
          <div className='absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-[#031947]/70 p-4 text-white shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm sm:p-5'>
            <span className='grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#168bf5] text-white transition duration-500 group-hover:rotate-6 group-hover:scale-110' aria-hidden='true'>
              <MessageCircle size={21} />
            </span>
            <p className='text-xs font-semibold leading-5 text-white/88 sm:text-sm sm:leading-6'>A clear conversation can be the beginning of a more confident financial future.</p>
          </div>
        </div>

        <div className='relative flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 xl:px-14'>
          <div className='pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#168bf5]/10 transition duration-700 group-hover:scale-110' aria-hidden='true' />
          <div className='pointer-events-none absolute -bottom-28 right-20 h-64 w-64 rounded-full bg-[#168bf5]/8 blur-3xl transition duration-700 group-hover:bg-[#168bf5]/13' aria-hidden='true' />

          <div className='relative grid items-end gap-9 xl:grid-cols-[1fr_auto] xl:gap-12'>
            <div className='max-w-2xl'>
              <p className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0875ec] sm:text-sm'>
                <span className='h-px w-8 bg-[#0875ec]' aria-hidden='true' />
                Let&apos;s talk
              </p>
              <h2 className='mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-[#06183f] sm:text-4xl lg:text-5xl'>
                Ready to make smarter <span className='text-[#0875ec]'>financial decisions?</span>
              </h2>
              <p className='mt-5 max-w-xl text-sm leading-7 text-[#5c6980] sm:text-base sm:leading-8'>
                Our advisers are here to help you navigate your financial journey with personalised strategies, clear guidance, and a focus on what matters to you.
              </p>

              <div className='mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#617089] sm:text-sm'>
                <span className='flex items-center gap-2'><CheckCircle2 size={15} className='text-[#0875ec]' aria-hidden='true' /> No obligation</span>
                <span className='flex items-center gap-2'><CheckCircle2 size={15} className='text-[#0875ec]' aria-hidden='true' /> Clear next steps</span>
              </div>
            </div>

            <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap xl:w-60 xl:flex-col'>
              <Link href='/contact' className='group/link inline-flex items-center justify-center gap-4 rounded-xl bg-[#0875ec] px-6 py-4 text-sm font-bold text-white shadow-[0_13px_30px_rgba(8,117,236,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#168cff] hover:shadow-[0_18px_38px_rgba(8,117,236,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0875ec] sm:text-base'>
                Book a Consultation
                <ArrowRight size={18} className='transition-transform duration-300 group-hover/link:translate-x-1.5' aria-hidden='true' />
              </Link>
              <Link href='/services' className='group/link inline-flex items-center justify-center gap-4 rounded-xl border border-[#b8cde8] bg-white/65 px-6 py-4 text-sm font-bold text-[#0a2453] transition duration-300 hover:-translate-y-1 hover:border-[#0875ec] hover:bg-white hover:text-[#0875ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0875ec] sm:text-base'>
                Explore Services
                <ArrowRight size={18} className='transition-transform duration-300 group-hover/link:translate-x-1.5' aria-hidden='true' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
