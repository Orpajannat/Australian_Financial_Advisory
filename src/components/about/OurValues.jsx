const values = [
  {
    title: 'Integrity',
    description: 'We act with honesty, transparency, and always in your best interest.',
    icon: 'integrity',
  },
  {
    title: 'Client First',
    description: 'Your goals drive our advice and strategies. Always.',
    icon: 'client',
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering the highest-quality advice and service.',
    icon: 'excellence',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We build lasting relationships to support you at every stage of your financial journey.',
    icon: 'partnership',
  },
]

function ValueIcon ({ type }) {
  const iconProps = {
    viewBox: '0 0 32 32',
    className: 'h-8 w-8',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (type === 'integrity') {
    return (
      <svg {...iconProps}>
        <path d='M16 3.5 27 7.7v7.8c0 6.7-4.6 11.1-11 13-6.4-1.9-11-6.3-11-13V7.7L16 3.5Z' />
        <path d='m10.8 16 3.2 3.2 7.2-7.2' />
      </svg>
    )
  }

  if (type === 'client') {
    return (
      <svg {...iconProps}>
        <circle cx='13' cy='11' r='5' />
        <path d='M4 27v-2.5c0-5.4 3.6-8.5 9-8.5s9 3.1 9 8.5V27H4Z' />
        <path d='M21 9.5a4.5 4.5 0 0 1 0 8.5M23.5 18.5c3 .8 4.5 3.1 4.5 6.5v2' />
      </svg>
    )
  }

  if (type === 'excellence') {
    return (
      <svg {...iconProps}>
        <path d='m16 3.5 3.8 7.7 8.5 1.2-6.1 6 1.4 8.4-7.6-4-7.6 4 1.4-8.4-6.1-6 8.5-1.2L16 3.5Z' />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <path d='M4 27V17h5v10M13.5 27V12h5v15M23 27V7h5v20' />
      <path d='m5 12 7-6 5 3 10-6' />
      <path d='M22.5 3H27v4.5' />
    </svg>
  )
}

export default function OurValues () {
  return (
    <section className='overflow-hidden bg-[#f7faff] px-4 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#031642] px-5 py-14 text-white shadow-[0_35px_90px_rgba(3,25,71,0.2)] sm:rounded-[2.75rem] sm:px-9 sm:py-16 lg:px-14 lg:py-20 xl:px-16'>
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_5%,rgba(28,139,255,0.24),transparent_28%),radial-gradient(circle_at_8%_95%,rgba(8,93,214,0.2),transparent_30%)]' aria-hidden='true' />
        <div className='pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full border border-[#2e8eff]/15' aria-hidden='true' />
        <div className='pointer-events-none absolute -right-12 top-24 h-48 w-48 rounded-full border border-[#2e8eff]/15' aria-hidden='true' />

        <svg className='pointer-events-none absolute inset-0 h-full w-full text-[#258aff]/12' viewBox='0 0 1280 720' preserveAspectRatio='none' aria-hidden='true'>
          <path d='M-60 620C190 350 330 760 580 470S980 70 1340 250' fill='none' stroke='currentColor' />
          <path d='M-50 650C200 380 350 790 600 500S1000 100 1340 280' fill='none' stroke='currentColor' />
          <path d='M-40 680C220 410 370 810 620 530S1020 130 1340 310' fill='none' stroke='currentColor' />
        </svg>

        <div className='relative grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16'>
          <div>
            <p className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#4ba7ff] sm:text-sm'>
              <span className='h-2 w-2 rounded-full bg-[#2a9cff] shadow-[0_0_18px_rgba(42,156,255,0.9)]' aria-hidden='true' />
              Our Values
            </p>
            <h2 className='mt-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.05em] text-balance sm:text-5xl md:text-6xl'>
              Principles that shape <span className='text-[#41a6ff]'>every decision.</span>
            </h2>
          </div>
          <div className='border-l border-[#3188e9]/40 pl-5 sm:pl-7'>
            <p className='max-w-lg text-sm leading-7 text-white/65 sm:text-base sm:leading-8'>
              More than words, these are the standards behind every conversation, recommendation, and relationship we build.
            </p>
          </div>
        </div>

        <div className='relative mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4'>
          {values.map((value, index) => (
            <article key={value.title} className='group relative flex min-h-80 flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-3 hover:border-[#309bff]/55 hover:bg-white/[0.095] hover:shadow-[0_24px_55px_rgba(0,6,24,0.28)] sm:p-7 lg:min-h-96'>
              <div className='pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#168bf5]/0 blur-3xl transition duration-500 group-hover:bg-[#168bf5]/20' aria-hidden='true' />
              <span className='absolute right-6 top-5 text-5xl font-bold tracking-[-0.08em] text-white/[0.045] transition duration-500 group-hover:text-[#3fa8ff]/15 sm:text-6xl' aria-hidden='true'>
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className='relative grid h-16 w-16 place-items-center rounded-2xl border border-[#328fe9]/35 bg-[#08265b] text-[#41a6ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_25px_rgba(0,5,22,0.18)] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-[#55b4ff] group-hover:bg-[#0c6ee0] group-hover:text-white group-hover:shadow-[0_16px_32px_rgba(9,105,224,0.35)]'>
                <ValueIcon type={value.icon} />
              </span>

              <div className='relative mt-auto pt-12 lg:pt-16'>
                <span className='mb-5 block h-px w-10 bg-[#309bff]/70 transition-all duration-500 group-hover:w-20 group-hover:bg-[#61b7ff]' aria-hidden='true' />
                <h3 className='text-xl font-bold leading-tight tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#67bbff]'>
                  {value.title}
                </h3>
                <p className='mt-4 text-sm leading-7 text-white/58 transition-colors duration-300 group-hover:text-white/82'>
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className='relative mt-8 flex items-center gap-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/35 sm:mt-10'>
          <span className='h-px flex-1 bg-linear-to-r from-transparent via-[#3b91e8]/30 to-transparent' aria-hidden='true' />
          Advice built around what matters
          <span className='h-px flex-1 bg-linear-to-r from-transparent via-[#3b91e8]/30 to-transparent' aria-hidden='true' />
        </div>
      </div>
    </section>
  )
}
