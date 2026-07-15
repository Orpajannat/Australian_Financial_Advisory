const commitments = [
  {
    title: 'Personalised Financial Planning',
    description: 'Financial strategies designed around your unique goals, priorities, and aspirations.',
    icon: 'person',
  },
  {
    title: 'Transparent Communication',
    description: 'Clear advice without unnecessary complexity, hidden surprises, or confusing jargon.',
    icon: 'message',
  },
  {
    title: 'Long-Term Financial Partnership',
    description: 'Ongoing guidance through every milestone, decision, and change in your life.',
    icon: 'partnership',
  },
  {
    title: 'Strategic Wealth Solutions',
    description: 'Thoughtful strategies that help you build, protect, and preserve wealth for the future.',
    icon: 'shield',
  },
  {
    title: 'Tailored Investment Guidance',
    description: 'Recommendations aligned with your objectives, risk profile, and investment timeline.',
    icon: 'growth',
  },
  {
    title: 'Continuous Financial Support',
    description: 'Regular reviews that keep your strategy aligned as your circumstances and needs evolve.',
    icon: 'support',
  },
]

function CommitmentIcon ({ type }) {
  const props = {
    viewBox: '0 0 36 36',
    className: 'h-8 w-8',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (type === 'person') return <svg {...props}><circle cx='18' cy='11' r='5' /><path d='M8 30v-3c0-7 4-11 10-11s10 4 10 11v3' /></svg>
  if (type === 'message') return <svg {...props}><path d='M30 17c0 6-5.4 10-12 10-1.5 0-3-.2-4.3-.7L7 30l1.8-6.2C7 22 6 19.7 6 17 6 11 11.4 7 18 7s12 4 12 10Z' /><path d='M13 17h.1M18 17h.1M23 17h.1' /></svg>
  if (type === 'partnership') return <svg {...props}><path d='m13.5 11 4-3.2a4.6 4.6 0 0 1 6.1.3l6.4 6-5.5 5.5-7.8-6.4-3.2 2.6a3 3 0 0 1-4.2-.4 3 3 0 0 1 .4-4.2L13.5 8h-4L5 13l5 5' /><path d='m11 19 8 8a2.2 2.2 0 0 0 3.2-3.1l1.2 1a2.2 2.2 0 0 0 3.2-3l-1.4-1.3' /><path d='m8.5 21.5 2-2a2 2 0 1 1 2.8 2.8l-2 2a2 2 0 0 1-2.8-2.8Z' /></svg>
  if (type === 'shield') return <svg {...props}><path d='m18 4 12 4.5v8.7c0 7.2-4.9 11.9-12 14-7.1-2.1-12-6.8-12-14V8.5L18 4Z' /><path d='m12.5 18 3.5 3.5 7.5-8' /></svg>
  if (type === 'growth') return <svg {...props}><path d='M5 31h26M8 27v-8h5v8M16 27V14h5v13M24 27V9h5v18' /><path d='m7 15 8-7 6 3 8-7' /><path d='M24 4h5v5' /></svg>
  return <svg {...props}><path d='M7 21v-4a11 11 0 0 1 22 0v4' /><path d='M7 20H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4v-9H7ZM29 20h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4v-9h2ZM27 29c0 2-2 3-5 3' /></svg>
}

export default function OurCommitment () {
  return (
    <section className='relative overflow-hidden bg-[#021332] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_35%,rgba(10,92,207,0.22),transparent_34%),radial-gradient(circle_at_92%_15%,rgba(20,121,244,0.16),transparent_27%)]' aria-hidden='true' />
      <div className='pointer-events-none absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full border border-[#1978df]/10' aria-hidden='true' />
      <div className='pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full border border-[#1978df]/10' aria-hidden='true' />

      <div className='relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1px_1.22fr] lg:gap-14 xl:gap-20'>
        <div className='relative flex flex-col justify-center lg:py-8'>
          <p className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#49b7ff] sm:text-sm'>
            <span className='h-px w-9 bg-[#49b7ff]' aria-hidden='true' />
            Our Commitment
          </p>
          <h2 className='mt-6 max-w-xl text-4xl font-bold leading-[1.07] tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl'>
            Your financial future deserves complete <span className='text-[#2f96ff]'>confidence.</span>
          </h2>
          <p className='mt-7 max-w-lg text-sm leading-7 text-white/65 sm:text-base sm:leading-8'>
            Every financial decision has the power to shape your future. That&apos;s why we deliver clear advice, thoughtful planning, and personalised strategies that put your goals first—helping you move forward with confidence at every stage of life.
          </p>

          <div className='mt-8 flex w-fit items-center gap-3 rounded-full border border-[#2c86de]/35 bg-[#082654]/75 px-4 py-2.5 text-xs font-semibold text-[#75c5ff] backdrop-blur-sm transition duration-300 hover:border-[#4bacff] hover:bg-[#0a3979] hover:text-white sm:text-sm'>
            <span className='h-2 w-2 rounded-full bg-[#49b7ff] shadow-[0_0_13px_rgba(73,183,255,0.9)]' aria-hidden='true' />
            Advice centred on what matters to you
          </div>

          <svg className='pointer-events-none mt-10 hidden h-40 w-full max-w-md text-[#1682ed]/25 sm:block' viewBox='0 0 440 160' fill='none' aria-hidden='true'>
            <path d='M5 145 86 82l58 30 70-73 58 22L395 8' stroke='currentColor' strokeWidth='2' />
            <path d='m380 10 15-2-3 15' stroke='currentColor' strokeWidth='2' />
            <path d='M5 145h390' stroke='currentColor' opacity='.18' />
            <circle cx='86' cy='82' r='5' fill='currentColor' /><circle cx='144' cy='112' r='5' fill='currentColor' /><circle cx='214' cy='39' r='5' fill='currentColor' /><circle cx='272' cy='61' r='5' fill='currentColor' />
          </svg>
        </div>

        <div className='relative hidden bg-[#2c83da]/35 lg:block' aria-hidden='true'>
          <span className='absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#4cc3ff] shadow-[0_0_14px_rgba(76,195,255,0.9)]' />
          <span className='absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#4cc3ff] shadow-[0_0_14px_rgba(76,195,255,0.9)]' />
        </div>

        <div className='divide-y divide-[#2b6eaf]/30'>
          {commitments.map((commitment, index) => (
            <article key={commitment.title} className='group relative flex gap-4 py-6 first:pt-0 last:pb-0 sm:gap-6 sm:py-7 lg:first:pt-3 lg:last:pb-3'>
              <span className='grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-[#2f7dcc]/40 bg-[#072654]/80 text-[#43baff] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-[#55c2ff] group-hover:bg-[#0b6cd4] group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(5,103,211,0.28)] sm:h-18 sm:w-18'>
                <CommitmentIcon type={commitment.icon} />
              </span>
              <div className='min-w-0 pt-1 transition-transform duration-500 group-hover:translate-x-2'>
                <div className='flex items-start justify-between gap-3'>
                  <h3 className='text-base font-bold leading-6 tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#65c2ff] sm:text-lg'>{commitment.title}</h3>
                  <span className='pt-1 text-[0.65rem] font-bold tracking-[0.15em] text-white/20 transition-colors duration-300 group-hover:text-[#54baff]/60' aria-hidden='true'>0{index + 1}</span>
                </div>
                <p className='mt-2 max-w-lg text-sm leading-6 text-white/55 transition-colors duration-300 group-hover:text-white/78 sm:leading-7'>{commitment.description}</p>
              </div>
              <span className='absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-[#3db6ff] to-transparent transition-all duration-500 group-hover:w-1/2' aria-hidden='true' />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
