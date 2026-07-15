import { Headphones, MapPin, MessageCircle, ShieldCheck } from 'lucide-react'

export default function ContactHero () {
  return (
    <section className='relative overflow-hidden bg-white px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-40 lg:px-10 lg:pb-28 lg:pt-44'>
      <div className='pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#eaf4ff] blur-3xl' aria-hidden='true' />
      <div className='pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#f1f7ff] blur-3xl' aria-hidden='true' />
      <div className='pointer-events-none absolute right-[8%] top-32 h-56 w-56 rounded-full border border-[#168bf5]/8' aria-hidden='true' />
      <div className='pointer-events-none absolute right-[11%] top-40 h-40 w-40 rounded-full border border-[#168bf5]/10' aria-hidden='true' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24'>
          <div className='max-w-3xl'>
            <p className='flex w-fit items-center gap-3 rounded-full border border-[#c5dcf8] bg-[#f6faff] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0875ec] shadow-sm transition duration-300 hover:border-[#88bef7] hover:bg-[#eaf4ff] sm:px-5 sm:text-sm'>
              <span className='h-2 w-2 rounded-full bg-[#0875ec] shadow-[0_0_12px_rgba(8,117,236,0.5)]' aria-hidden='true' />
              Contact Us
            </p>

            <h1 className='mt-7 text-4xl font-bold leading-[1.04] tracking-[-0.055em] text-balance text-[#06183f] sm:text-5xl md:text-6xl lg:text-7xl'>
              Let&apos;s make your next decision feel <span className='text-[#0875ec]'>clearer.</span>
            </h1>

            <p className='mt-7 max-w-2xl text-sm leading-7 text-[#5b6980] sm:text-lg sm:leading-8'>
              Whether you have a question, need professional financial advice, or are ready to plan your next step, our team is here to listen carefully and provide guidance shaped around what matters to you.
            </p>

            <div className='mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-[#617089] sm:text-sm'>
              <span className='flex items-center gap-2'><span className='text-[#0875ec]' aria-hidden='true'>✓</span> Personal conversation</span>
              <span className='flex items-center gap-2'><span className='text-[#0875ec]' aria-hidden='true'>✓</span> Clear next steps</span>
              <span className='flex items-center gap-2'><span className='text-[#0875ec]' aria-hidden='true'>✓</span> No unnecessary pressure</span>
            </div>
          </div>

          <div className='group relative overflow-hidden rounded-[2rem] border border-[#d5e5f6] bg-[#f0f6fe] p-6 shadow-[0_24px_65px_rgba(8,48,105,0.09)] transition duration-700 hover:border-[#9dc9f8] hover:shadow-[0_30px_75px_rgba(8,72,155,0.14)] sm:p-9 lg:p-10'>
            <div className='pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#168bf5]/10 blur-2xl transition duration-700 group-hover:scale-110 group-hover:bg-[#168bf5]/16' aria-hidden='true' />
            <svg className='pointer-events-none absolute bottom-0 right-0 h-52 w-52 text-[#168bf5]/8' viewBox='0 0 200 200' aria-hidden='true'>
              <path d='M20 185C50 90 95 165 125 70s65-55 95-45M40 200C70 115 115 180 145 95s55-55 75-35' fill='none' stroke='currentColor' />
            </svg>

            <div className='relative'>
              <span className='grid h-20 w-20 place-items-center rounded-[1.4rem] border border-[#c2dcf8] bg-white text-[#0875ec] shadow-[0_15px_35px_rgba(8,72,155,0.12)] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-[#5aafff] group-hover:bg-[#0875ec] group-hover:text-white group-hover:shadow-[0_18px_40px_rgba(8,117,236,0.25)]'>
                <MessageCircle size={37} strokeWidth={1.7} aria-hidden='true' />
              </span>

              <p className='mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#0875ec]'>A conversation centred on you</p>
              <h2 className='mt-3 text-3xl font-bold leading-tight tracking-[-0.045em] text-[#071a43] sm:text-4xl'>Advice begins with understanding.</h2>
              <p className='mt-4 max-w-lg text-sm leading-7 text-[#5c6980] sm:text-base sm:leading-8'>Tell us where you are, what you&apos;re considering, and where you would like to go. We&apos;ll help bring clarity to the path ahead.</p>

              <div className='mt-7 flex items-center gap-4 border-t border-[#cfdef0] pt-6'>
                <span className='grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#dfeeff] text-[#0875ec]' aria-hidden='true'><Headphones size={19} /></span>
                <div>
                  <p className='text-sm font-bold text-[#0a214d]'>Thoughtful, confidential support</p>
                  <p className='mt-1 text-xs leading-5 text-[#748197]'>From your first question onward.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 grid overflow-hidden rounded-[1.75rem] border border-[#d9e6f4] bg-[#d9e6f4] shadow-[0_18px_50px_rgba(8,48,105,0.06)] sm:grid-cols-3 sm:gap-px lg:mt-16'>
          <article className='group flex gap-4 bg-white px-5 py-6 transition duration-300 hover:bg-[#f5faff] sm:flex-col sm:px-7 sm:py-8 lg:flex-row lg:items-center'>
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e9f3ff] text-[#0875ec] transition duration-300 group-hover:-rotate-6 group-hover:bg-[#0875ec] group-hover:text-white' aria-hidden='true'><Headphones size={23} /></span>
            <div><h3 className='font-bold text-[#0a214d] transition-colors group-hover:text-[#0875ec]'>Speak with an Expert</h3><p className='mt-1 text-sm leading-6 text-[#68758a]'>Connect with an adviser who is ready to listen.</p></div>
          </article>
          <article className='group flex gap-4 bg-white px-5 py-6 transition duration-300 hover:bg-[#f5faff] sm:flex-col sm:px-7 sm:py-8 lg:flex-row lg:items-center'>
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e9f3ff] text-[#0875ec] transition duration-300 group-hover:-rotate-6 group-hover:bg-[#0875ec] group-hover:text-white' aria-hidden='true'><ShieldCheck size={23} /></span>
            <div><h3 className='font-bold text-[#0a214d] transition-colors group-hover:text-[#0875ec]'>Your Priorities First</h3><p className='mt-1 text-sm leading-6 text-[#68758a]'>Guidance shaped around your circumstances and goals.</p></div>
          </article>
          <article className='group flex gap-4 bg-white px-5 py-6 transition duration-300 hover:bg-[#f5faff] sm:flex-col sm:px-7 sm:py-8 lg:flex-row lg:items-center'>
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e9f3ff] text-[#0875ec] transition duration-300 group-hover:-rotate-6 group-hover:bg-[#0875ec] group-hover:text-white' aria-hidden='true'><MapPin size={23} /></span>
            <div><h3 className='font-bold text-[#0a214d] transition-colors group-hover:text-[#0875ec]'>Australia-Wide Support</h3><p className='mt-1 text-sm leading-6 text-[#68758a]'>Professional advice wherever your journey takes you.</p></div>
          </article>
        </div>
      </div>
    </section>
  )
}
