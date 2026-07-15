import { Landmark, PiggyBank, TrendingUp } from 'lucide-react'

const blogTopics = [
  {
    title: 'Market Perspectives',
    description: 'Clear commentary on market movements and what they may mean for long-term investors.',
    icon: TrendingUp,
    accent: 'text-[#208cff]',
    surface: 'bg-[#e8f3ff]',
  },
  {
    title: 'Investment Guidance',
    description: 'Practical principles for building, reviewing, and maintaining a considered portfolio.',
    icon: PiggyBank,
    accent: 'text-[#149569]',
    surface: 'bg-[#e7f7f1]',
  },
  {
    title: 'Retirement Planning',
    description: 'Useful strategies to help you prepare for retirement with greater clarity and confidence.',
    icon: Landmark,
    accent: 'text-[#7857e8]',
    surface: 'bg-[#f0ecff]',
  },
]

export default function BlogHero () {
  return (
    <section className='relative overflow-hidden bg-[#031642] px-5 pb-20 pt-36 text-white sm:px-8 sm:pb-24 sm:pt-40 lg:px-10 lg:pb-28 lg:pt-44'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(22,129,246,0.2),transparent_30%),radial-gradient(circle_at_5%_100%,rgba(10,83,189,0.2),transparent_32%)]' aria-hidden='true' />
      <div className='pointer-events-none absolute -right-28 top-16 h-80 w-80 rounded-full border border-[#268df1]/10' aria-hidden='true' />
      <div className='pointer-events-none absolute -right-12 top-32 h-56 w-56 rounded-full border border-[#268df1]/10' aria-hidden='true' />

      <svg className='pointer-events-none absolute inset-0 h-full w-full text-[#268df1]/10' viewBox='0 0 1440 700' preserveAspectRatio='none' aria-hidden='true'>
        <path d='M-60 610C180 390 310 750 560 480S930 70 1190 310s300 110 340 20' fill='none' stroke='currentColor' />
        <path d='M-60 650C200 420 330 790 580 520S950 110 1210 350s290 100 320 20' fill='none' stroke='currentColor' />
      </svg>

      <div className='relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24'>
        <div className='max-w-3xl'>
          <p className='flex w-fit items-center gap-3 rounded-full border border-[#2e83dc]/45 bg-[#082657]/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#55b4ff] backdrop-blur-sm transition duration-300 hover:border-[#59b7ff] hover:bg-[#0a397a] hover:text-white sm:px-5 sm:text-sm'>
            <span className='h-2 w-2 rounded-full bg-[#45adff] shadow-[0_0_13px_rgba(69,173,255,0.85)]' aria-hidden='true' />
            Blog
          </p>

          <h1 className='mt-7 text-4xl font-bold leading-[1.04] tracking-[-0.055em] text-balance sm:text-5xl md:text-6xl lg:text-7xl'>
            Financial thinking for <span className='text-[#43a8ff]'>smarter decisions.</span>
          </h1>

          <p className='mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-lg sm:leading-8'>
            Explore practical financial guidance, investment principles, retirement strategies, and informed perspectives designed to help you approach every stage of your financial life with confidence.
          </p>

          <div className='mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-white/48 sm:text-sm'>
            <span className='flex items-center gap-2'><span className='text-[#43a8ff]' aria-hidden='true'>✓</span> Clear explanations</span>
            <span className='flex items-center gap-2'><span className='text-[#43a8ff]' aria-hidden='true'>✓</span> Practical perspectives</span>
            <span className='flex items-center gap-2'><span className='text-[#43a8ff]' aria-hidden='true'>✓</span> Australian focus</span>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute bottom-5 left-5 top-5 w-px bg-linear-to-b from-transparent via-[#42a7ff]/45 to-transparent sm:left-7' aria-hidden='true' />
          <div className='space-y-4 pl-5 sm:pl-7'>
            {blogTopics.map((topic, index) => {
              const Icon = topic.icon

              return (
                <article key={topic.title} className='group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.065] p-5 shadow-[0_16px_38px_rgba(0,5,23,0.14)] backdrop-blur-sm transition duration-500 hover:translate-x-2 hover:border-white/25 hover:bg-white/[0.11] hover:shadow-[0_22px_48px_rgba(0,5,23,0.24)] sm:gap-5 sm:p-6'>
                  <span className='absolute -left-[1.45rem] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#031642] bg-[#41a8ff] shadow-[0_0_14px_rgba(65,168,255,0.75)] sm:-left-[1.7rem]' aria-hidden='true' />
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${topic.surface} ${topic.accent} transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-[0_12px_25px_rgba(0,5,23,0.18)] sm:h-16 sm:w-16`}>
                    <Icon className='h-7 w-7 sm:h-8 sm:w-8' strokeWidth={1.8} aria-hidden='true' />
                  </span>
                  <div className='min-w-0 pt-0.5'>
                    <div className='flex items-start justify-between gap-3'>
                      <h2 className='text-base font-bold tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#69bdff] sm:text-lg'>{topic.title}</h2>
                      <span className='text-[0.6rem] font-bold tracking-[0.15em] text-white/20 transition-colors duration-300 group-hover:text-[#53afff]/60' aria-hidden='true'>0{index + 1}</span>
                    </div>
                    <p className='mt-2 text-sm leading-6 text-white/52 transition-colors duration-300 group-hover:text-white/76'>{topic.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
