import { BarChart3, Search, Send, Target } from 'lucide-react'

const processSteps = [
  {
    title: 'Discover',
    description: 'We take the time to understand your goals, priorities, values, and current financial position.',
    icon: Search,
  },
  {
    title: 'Strategise',
    description: 'We develop a personalised financial plan with clear recommendations tailored to your needs.',
    icon: Target,
  },
  {
    title: 'Implement',
    description: 'We turn your plan into action, coordinating the right strategies and solutions with care.',
    icon: Send,
  },
  {
    title: 'Review',
    description: 'We monitor progress and refine your strategy as your circumstances, needs, and goals evolve.',
    icon: BarChart3,
  },
]

export default function PlanningProcess () {
  return (
    <section className='overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#031642] px-5 py-14 text-white shadow-[0_32px_80px_rgba(3,25,71,0.19)] sm:rounded-[2.75rem] sm:px-9 sm:py-16 lg:px-14 lg:py-20'>
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(18,113,241,0.27),transparent_38%),radial-gradient(circle_at_5%_100%,rgba(14,91,201,0.18),transparent_30%)]' aria-hidden='true' />
        <div className='pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#258cf4]/10' aria-hidden='true' />
        <div className='pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-[#258cf4]/10' aria-hidden='true' />

        <svg className='pointer-events-none absolute inset-0 h-full w-full text-[#1d82eb]/10' viewBox='0 0 1280 560' preserveAspectRatio='none' aria-hidden='true'>
          <path d='M-40 470C180 300 300 590 510 390S850 90 1060 270s260 70 300-10' fill='none' stroke='currentColor' />
          <path d='M-40 500C190 330 320 620 530 420S870 120 1080 300s250 65 280 0' fill='none' stroke='currentColor' />
        </svg>

        <div className='relative mx-auto max-w-4xl text-center'>
          <p className='text-xs font-bold uppercase tracking-[0.22em] text-[#43a8ff] sm:text-sm'>Our Financial Planning Process</p>
          <h2 className='mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl'>
            A simple process.<br className='sm:hidden' /> <span className='text-[#4aabff]'>Powerful results.</span>
          </h2>
          <p className='mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base sm:leading-8'>
            A disciplined, collaborative approach that turns your ambitions into a clear and adaptable financial strategy.
          </p>
        </div>

        <div className='relative mt-12 sm:mt-14 lg:mt-16'>
          <div className='absolute bottom-10 left-9 top-10 w-px bg-linear-to-b from-[#44aeff]/20 via-[#44aeff]/65 to-[#44aeff]/20 md:hidden' aria-hidden='true' />
          <div className='absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-linear-to-r from-[#2d8de9]/25 via-[#43a8ff]/75 to-[#2d8de9]/25 lg:block' aria-hidden='true'>
            <span className='absolute left-1/3 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4db3ff] shadow-[0_0_14px_rgba(77,179,255,0.85)]' />
            <span className='absolute left-2/3 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4db3ff] shadow-[0_0_14px_rgba(77,179,255,0.85)]' />
          </div>

          <div className='relative grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-4'>
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <article key={step.title} className='group relative grid grid-cols-[4.5rem_1fr] gap-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition duration-500 hover:translate-x-1 hover:border-[#349df5]/45 hover:bg-white/[0.08] hover:shadow-[0_20px_45px_rgba(0,5,23,0.2)] md:flex md:min-h-72 md:translate-x-0 md:flex-col md:items-center md:px-5 md:py-6 md:text-center md:hover:-translate-y-2 lg:min-h-80 lg:border-transparent lg:bg-transparent lg:py-0 lg:hover:bg-white/[0.055]'>
                  <div className='relative z-10 grid h-18 w-18 shrink-0 place-items-center rounded-full border border-[#3689d8]/45 bg-[#061f51] text-[#43a8ff] shadow-[inset_0_0_0_8px_rgba(9,47,104,0.5),0_12px_28px_rgba(0,4,20,0.25)] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-[#58b9ff] group-hover:bg-[#0a69d6] group-hover:text-white group-hover:shadow-[0_16px_34px_rgba(10,105,214,0.35)] sm:h-20 sm:w-20 lg:h-24 lg:w-24'>
                    <Icon className='h-8 w-8 lg:h-10 lg:w-10' strokeWidth={1.8} aria-hidden='true' />
                    <span className='absolute -right-1 top-0 grid h-6 min-w-6 place-items-center rounded-full border-2 border-[#031642] bg-[#168bf5] px-1 text-[0.6rem] font-bold text-white shadow-[0_0_14px_rgba(22,139,245,0.55)] lg:hidden' aria-hidden='true'>
                      {index + 1}
                    </span>
                  </div>

                  <div className='min-w-0 pt-0.5 md:pt-0'>
                    <p className='hidden text-xs font-bold tracking-[0.17em] text-[#3ba7ff] md:mt-5 md:block'>
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className='text-lg font-bold tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#65bdff] md:mt-2 md:text-xl'>{step.title}</h3>
                    <p className='mt-2 max-w-xs text-sm leading-6 text-white/55 transition-colors duration-300 group-hover:text-white/78 md:mx-auto md:mt-3 md:leading-7'>{step.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className='relative mx-auto mt-9 flex max-w-2xl items-center gap-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/30 sm:mt-11 sm:text-xs'>
          <span className='h-px flex-1 bg-linear-to-r from-transparent to-[#318ee9]/40' aria-hidden='true' />
          Discover to ongoing review
          <span className='h-px flex-1 bg-linear-to-l from-transparent to-[#318ee9]/40' aria-hidden='true' />
        </div>
      </div>
    </section>
  )
}
