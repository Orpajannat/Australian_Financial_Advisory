import Link from 'next/link'

export default function AboutCTA () {
  return (
    <section className='overflow-hidden bg-[#f6f9fe] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='group relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#d7e5f5] bg-white shadow-[0_28px_75px_rgba(7,49,111,0.11)] transition duration-700 hover:shadow-[0_34px_90px_rgba(7,66,151,0.17)] sm:rounded-[2.75rem] lg:grid-cols-[17rem_1fr]'>
        <div className='relative flex min-h-64 items-center justify-center overflow-hidden bg-[#061b48] p-10 lg:min-h-[25rem]'>
          <div className='pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#319cff]/20 transition duration-700 group-hover:scale-110' aria-hidden='true' />
          <div className='pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#0875ec]/25 blur-2xl transition duration-700 group-hover:bg-[#168cff]/35' aria-hidden='true' />
          <svg className='pointer-events-none absolute inset-0 h-full w-full text-[#288cee]/14' viewBox='0 0 300 420' preserveAspectRatio='none' aria-hidden='true'>
            <path d='M-30 350C50 250 110 390 180 280S260 90 340 120' fill='none' stroke='currentColor' />
            <path d='M-30 380C60 270 120 410 195 300S275 115 340 145' fill='none' stroke='currentColor' />
          </svg>

          <div className='relative grid h-36 w-36 place-items-center rounded-[2rem] border border-white/15 bg-white/[0.08] text-[#55b5ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_22px_50px_rgba(0,5,22,0.28)] backdrop-blur-md transition duration-500 group-hover:-rotate-3 group-hover:scale-105 group-hover:border-[#52b5ff]/55 group-hover:bg-[#0b4fa6]/55 group-hover:text-white'>
            <span className='absolute -right-2 -top-2 h-5 w-5 rounded-full border-4 border-[#061b48] bg-[#39aaff] shadow-[0_0_18px_rgba(57,170,255,0.8)]' aria-hidden='true' />
            <svg viewBox='0 0 48 48' className='h-16 w-16' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
              <rect x='6' y='10' width='36' height='32' rx='5' />
              <path d='M6 19h36M15 5v10M33 5v10' />
              <path d='M17 29h14M24 24v10' />
            </svg>
          </div>
        </div>

        <div className='relative flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16'>
          <div className='pointer-events-none absolute right-[-1rem] top-1/2 hidden -translate-y-1/2 text-[13rem] font-black leading-none tracking-[-0.12em] text-[#071d48]/[0.025] xl:block' aria-hidden='true'>
            AFA
          </div>

          <div className='relative grid items-end gap-8 xl:grid-cols-[1fr_auto] xl:gap-12'>
            <div className='max-w-2xl'>
              <p className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0875ec] sm:text-sm'>
                <span className='h-2 w-2 rounded-full bg-[#0875ec] shadow-[0_0_12px_rgba(8,117,236,0.45)]' aria-hidden='true' />
                Your next step
              </p>
              <h2 className='mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.045em] text-[#06183f] sm:text-4xl lg:text-5xl'>
                Ready to secure your <span className='text-[#0875ec]'>financial future?</span>
              </h2>
              <p className='mt-5 max-w-xl text-sm leading-7 text-[#5d6980] sm:text-base sm:leading-8'>
                Whether you&apos;re planning for retirement, growing your investments, or protecting your wealth, we&apos;re here to help you take the next step with clarity.
              </p>
            </div>

            <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap xl:w-60 xl:flex-col'>
              <Link href='/contact' className='group/button inline-flex items-center justify-center gap-4 rounded-xl bg-[#0875ec] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(8,117,236,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#168cff] hover:shadow-[0_17px_35px_rgba(8,117,236,0.34)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0875ec] sm:text-base'>
                Book a Consultation
                <span className='transition-transform duration-300 group-hover/button:translate-x-1.5' aria-hidden='true'>→</span>
              </Link>
              <Link href='/services' className='group/button inline-flex items-center justify-center gap-4 rounded-xl border border-[#b7cce7] bg-[#f7faff] px-6 py-4 text-sm font-bold text-[#0a2453] transition duration-300 hover:-translate-y-1 hover:border-[#0875ec] hover:bg-[#eaf4ff] hover:text-[#0875ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0875ec] sm:text-base'>
                Explore Our Services
                <span className='transition-transform duration-300 group-hover/button:translate-x-1.5' aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>

          <div className='relative mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#dce7f4] pt-6 text-xs font-semibold text-[#64728a] sm:text-sm'>
            <span className='flex items-center gap-2'><span className='text-[#0875ec]' aria-hidden='true'>✓</span> No obligation</span>
            <span className='flex items-center gap-2'><span className='text-[#0875ec]' aria-hidden='true'>✓</span> Personalised conversation</span>
            <span className='flex items-center gap-2'><span className='text-[#0875ec]' aria-hidden='true'>✓</span> Clear next steps</span>
          </div>
        </div>
      </div>
    </section>
  )
}
