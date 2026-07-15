import Link from 'next/link'
import { ArrowRight, CalendarDays, Handshake, ShieldCheck, Target, UsersRound } from 'lucide-react'

const assurances = [
  {
    title: 'Trusted & Secure',
    description: 'Your privacy is always treated as a priority.',
    icon: ShieldCheck,
  },
  {
    title: 'Experienced Advisers',
    description: 'Professional guidance grounded in expertise.',
    icon: UsersRound,
  },
  {
    title: 'Personalised Solutions',
    description: 'Strategies shaped around your needs and goals.',
    icon: Target,
  },
  {
    title: 'Long-Term Partnership',
    description: 'Support that continues through every stage.',
    icon: Handshake,
  },
]

export default function NextStep () {
  return (
    <section className='overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='group relative overflow-hidden rounded-[2rem] bg-[#031642] px-6 py-10 text-white shadow-[0_30px_75px_rgba(3,25,71,0.2)] transition duration-700 hover:shadow-[0_36px_90px_rgba(3,48,117,0.27)] sm:px-9 sm:py-12 lg:px-12 lg:py-14'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(26,139,255,0.3),transparent_34%),radial-gradient(circle_at_5%_100%,rgba(8,79,184,0.22),transparent_32%)]' aria-hidden='true' />
          <div className='pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#42a9ff]/12 transition duration-700 group-hover:scale-110' aria-hidden='true' />
          <div className='pointer-events-none absolute right-7 top-7 grid grid-cols-6 gap-2 opacity-15' aria-hidden='true'>
            {Array.from({ length: 24 }).map((_, index) => <span key={index} className='h-1 w-1 rounded-full bg-[#58b5ff]' />)}
          </div>

          <div className='relative grid items-center gap-8 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] lg:gap-10 xl:gap-14'>
            <span className='grid h-24 w-24 place-items-center rounded-[1.7rem] border border-[#3d8fe0]/45 bg-[#08275b] text-[#4fb4ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_40px_rgba(0,5,22,0.28)] transition duration-500 group-hover:-rotate-6 group-hover:scale-105 group-hover:border-[#5bbaff] group-hover:bg-[#0a65ce] group-hover:text-white group-hover:shadow-[0_20px_46px_rgba(10,101,206,0.34)] sm:h-28 sm:w-28'>
              <CalendarDays size={48} strokeWidth={1.6} aria-hidden='true' />
            </span>

            <div className='max-w-2xl'>
              <p className='text-xs font-bold uppercase tracking-[0.18em] text-[#4aafff]'>Your next step</p>
              <h2 className='mt-3 text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl'>Ready to move forward with confidence?</h2>
              <p className='mt-4 max-w-xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8'>
                Start with a conversation and let&apos;s build a financial strategy tailored to your priorities, circumstances, and goals.
              </p>
            </div>

            <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap md:col-start-2 lg:col-start-auto lg:w-60 lg:flex-col'>
              <Link href='#contact-form' className='group/link inline-flex items-center justify-center gap-4 rounded-xl bg-[#0875ec] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_32px_rgba(8,117,236,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#168cff] hover:shadow-[0_19px_40px_rgba(8,117,236,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base'>
                Book a Consultation
                <ArrowRight size={18} className='transition-transform duration-300 group-hover/link:translate-x-1.5' aria-hidden='true' />
              </Link>
              <Link href='/services' className='group/link inline-flex items-center justify-center gap-4 rounded-xl border border-[#4b76ad] bg-white/[0.045] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#62baff] hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base'>
                Explore Our Services
                <ArrowRight size={18} className='transition-transform duration-300 group-hover/link:translate-x-1.5' aria-hidden='true' />
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-5 grid overflow-hidden rounded-[1.75rem] border border-[#d9e6f4] bg-[#d9e6f4] shadow-[0_18px_50px_rgba(8,48,105,0.07)] sm:grid-cols-2 sm:gap-px lg:grid-cols-4'>
          {assurances.map((item) => {
            const Icon = item.icon

            return (
              <article key={item.title} className='group relative flex min-h-36 items-center gap-4 bg-white px-5 py-6 transition duration-400 hover:z-10 hover:bg-[#f6faff] sm:min-h-40 sm:flex-col sm:items-start sm:px-7 sm:py-7 lg:min-h-36 lg:flex-row lg:items-center'>
                <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e9f3ff] text-[#0875ec] transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#0875ec] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(8,117,236,0.22)]' aria-hidden='true'>
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className='text-sm font-bold text-[#0a214d] transition-colors duration-300 group-hover:text-[#0875ec] sm:text-base'>{item.title}</h3>
                  <p className='mt-1 text-xs leading-5 text-[#6c798e] sm:text-sm sm:leading-6'>{item.description}</p>
                </div>
                <span className='absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#0875ec] to-[#48b4ff] transition-transform duration-500 group-hover:scale-x-100' aria-hidden='true' />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
