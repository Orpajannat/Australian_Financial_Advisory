const impactStats = [
  {
    value: '250+',
    label: 'Clients Supported',
    description: 'Individuals, families, and businesses guided across Australia.',
    icon: 'clients',
  },
  {
    value: '$500M+',
    label: 'Assets Under Advice',
    description: 'Helping clients grow, protect, and manage their wealth with purpose.',
    icon: 'growth',
  },
  {
    value: '15+',
    label: 'Years of Experience',
    description: 'Decades of combined expertise across financial planning and advice.',
    icon: 'experience',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Trusted for transparent advice, attentive service, and lasting support.',
    icon: 'satisfaction',
  },
]

function ImpactIcon ({ type }) {
  const props = {
    viewBox: '0 0 40 40',
    className: 'h-9 w-9',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (type === 'clients') {
    return (
      <svg {...props}>
        <circle cx='16' cy='14' r='5' />
        <path d='M7 33v-3c0-6 3.8-10 9-10s9 4 9 10v3H7Z' />
        <circle cx='28.5' cy='16' r='4' />
        <path d='M27 23c4.5 0 7 3.2 7 8v2' />
      </svg>
    )
  }

  if (type === 'growth') {
    return (
      <svg {...props}>
        <path d='M6 34h28M9 30v-8h6v8M18 30V16h6v14M27 30V10h6v20' />
        <path d='m8 17 9-8 7 4 9-8' />
        <path d='M27.5 5H33v5.5' />
      </svg>
    )
  }

  if (type === 'experience') {
    return (
      <svg {...props}>
        <circle cx='20' cy='17' r='10' />
        <path d='m14 26-2 9 8-4 8 4-2-9' />
        <path d='m20 10 2.1 4.2 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7L20 10Z' />
      </svg>
    )
  }

  return (
    <svg {...props}>
      <circle cx='20' cy='20' r='14' />
      <path d='M13 17v.1M27 17v.1M13.5 24c1.8 2.3 4 3.5 6.5 3.5s4.7-1.2 6.5-3.5' />
    </svg>
  )
}

export default function OurImpact () {
  return (
    <section className='relative overflow-hidden bg-[#020f30] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-15%,rgba(14,107,233,0.32),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(8,76,184,0.2),transparent_32%)]' aria-hidden='true' />
      <div className='pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full border border-[#2087f3]/10' aria-hidden='true' />
      <div className='pointer-events-none absolute -left-28 top-36 h-72 w-72 rounded-full border border-[#2087f3]/10' aria-hidden='true' />

      <svg className='pointer-events-none absolute inset-0 h-full w-full text-[#1977df]/10' viewBox='0 0 1440 620' preserveAspectRatio='none' aria-hidden='true'>
        <path d='M-80 150C170-40 270 310 500 130S900-40 1110 170s330 110 430-20' fill='none' stroke='currentColor' />
        <path d='M-80 185C170-10 290 335 520 155S920-15 1130 195s320 105 410-10' fill='none' stroke='currentColor' />
        <path d='M-80 220C190 20 310 360 540 180S940 10 1150 220s300 95 390 0' fill='none' stroke='currentColor' />
      </svg>

      <div className='relative mx-auto max-w-7xl'>
        <div className='mx-auto max-w-4xl text-center'>
          <p className='flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#43a6ff] sm:text-sm'>
            <span className='h-px w-8 bg-linear-to-r from-transparent to-[#43a6ff]' aria-hidden='true' />
            Our Impact
            <span className='h-px w-8 bg-linear-to-l from-transparent to-[#43a6ff]' aria-hidden='true' />
          </p>
          <h2 className='mt-5 text-4xl font-bold leading-[1.06] tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl'>
            Creating value.<br className='hidden sm:block' /> <span className='text-[#46a9ff]'>Changing futures.</span>
          </h2>
          <p className='mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8'>
            Our progress is measured by the confidence we create, the relationships we nurture, and the financial futures we help strengthen.
          </p>
        </div>

        <div className='mt-12 grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 shadow-[0_30px_70px_rgba(0,5,23,0.3)] sm:mt-14 sm:grid-cols-2 sm:gap-px lg:mt-16 lg:grid-cols-4'>
          {impactStats.map((stat) => (
            <article key={stat.label} className='group relative flex min-h-80 flex-col items-center bg-[#04163f]/95 px-5 py-9 text-center transition duration-500 hover:bg-[linear-gradient(155deg,#08265d_0%,#061b4b_55%,#0751a8_140%)] sm:px-7 sm:py-10 lg:min-h-96 lg:justify-center'>
              <div className='pointer-events-none absolute inset-x-0 top-0 h-px origin-center scale-x-0 bg-linear-to-r from-transparent via-[#4eb0ff] to-transparent transition-transform duration-500 group-hover:scale-x-100' aria-hidden='true' />
              <div className='relative grid h-20 w-20 place-items-center rounded-full border border-[#318ce9]/45 bg-[#082356] text-[#42a9ff] shadow-[inset_0_0_0_8px_rgba(11,54,119,0.45),0_12px_30px_rgba(0,4,19,0.24)] transition duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:border-[#62bbff] group-hover:bg-[#0b69d9] group-hover:text-white group-hover:shadow-[0_16px_38px_rgba(11,105,217,0.38)]'>
                <span className='absolute -right-0.5 top-1 h-2.5 w-2.5 rounded-full border-2 border-[#04163f] bg-[#4eb0ff] shadow-[0_0_12px_rgba(78,176,255,0.9)] transition-transform duration-500 group-hover:rotate-180' aria-hidden='true' />
                <ImpactIcon type={stat.icon} />
              </div>

              <p className='mt-7 text-4xl font-bold tracking-[-0.055em] text-white transition duration-500 group-hover:text-[#55b2ff] sm:text-5xl'>{stat.value}</p>
              <h3 className='mt-2 text-base font-bold tracking-[-0.02em] text-white/92 sm:text-lg'>{stat.label}</h3>
              <span className='my-5 h-px w-9 bg-[#268bea]/70 transition-all duration-500 group-hover:w-16 group-hover:bg-[#65bdff]' aria-hidden='true' />
              <p className='max-w-xs text-sm leading-6 text-white/55 transition-colors duration-300 group-hover:text-white/78'>{stat.description}</p>
            </article>
          ))}
        </div>

        <p className='mt-8 flex items-center justify-center gap-3 text-center text-xs font-medium tracking-wide text-white/45 sm:mt-10 sm:text-sm'>
          <span className='h-1.5 w-1.5 rounded-full bg-[#43a6ff] shadow-[0_0_12px_rgba(67,166,255,0.9)]' aria-hidden='true' />
          Every figure represents a relationship built on trust.
        </p>
      </div>
    </section>
  )
}
