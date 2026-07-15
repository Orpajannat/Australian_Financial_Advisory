import { Handshake, PieChart, ShieldCheck, UsersRound } from 'lucide-react'

const trustReasons = [
  {
    title: 'Independent Advice',
    description: 'Our recommendations are guided by your best interests, circumstances, and long-term objectives.',
    icon: ShieldCheck,
  },
  {
    title: 'Experienced Advisers',
    description: 'Skilled professionals bring practical insight, technical expertise, and considered judgement.',
    icon: UsersRound,
  },
  {
    title: 'Personalised Strategies',
    description: 'Every solution is shaped around your unique priorities, needs, and definition of success.',
    icon: PieChart,
  },
  {
    title: 'Long-Term Partnership',
    description: 'We remain alongside you through changing markets, milestones, and every stage ahead.',
    icon: Handshake,
  },
]

export default function TrustUs () {
  return (
    <section className='relative overflow-hidden bg-[#f7faff] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#e0edff]/75 blur-3xl' aria-hidden='true' />
      <div className='pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#e7f2ff] blur-3xl' aria-hidden='true' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
          <div>
            <p className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0875ec] sm:text-sm'>
              <span className='h-px w-9 bg-[#0875ec]' aria-hidden='true' />
              Why Clients Trust Our Advice
            </p>
            <h2 className='mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-balance text-[#06183f] sm:text-5xl lg:text-6xl'>
              Confidence starts with advice <span className='text-[#0875ec]'>built around you.</span>
            </h2>
          </div>
          <div className='border-l border-[#b9d5f5] pl-5 sm:pl-8 lg:mb-1'>
            <p className='max-w-xl text-sm leading-7 text-[#5b6980] sm:text-base sm:leading-8'>
              Trust is earned through consistency, transparency, and advice that remains focused on what matters most—your financial wellbeing.
            </p>
          </div>
        </div>

        <div className='relative mt-12 overflow-hidden rounded-[1.75rem] border border-[#d6e4f4] bg-[#d6e4f4] shadow-[0_24px_65px_rgba(8,48,105,0.09)] sm:grid sm:grid-cols-2 sm:gap-px lg:mt-16 lg:grid-cols-4'>
          <span className='absolute inset-x-0 top-0 z-10 h-1 bg-linear-to-r from-[#075de5] via-[#2da5ff] to-[#72cbff]' aria-hidden='true' />

          {trustReasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <article key={reason.title} className='group relative flex min-h-64 gap-5 bg-white px-5 py-8 transition duration-500 hover:z-10 hover:bg-[#f9fcff] sm:min-h-80 sm:flex-col sm:px-7 sm:py-9 lg:min-h-88 lg:justify-center'>
                <div className='pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#168af5]/0 blur-3xl transition duration-500 group-hover:bg-[#168af5]/10' aria-hidden='true' />
                <span className='absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#0875ec] to-[#51b8ff] transition-all duration-500 group-hover:w-full' aria-hidden='true' />

                <div className='relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-[#cfe1f8] bg-[#edf5ff] text-[#0875ec] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-[#55acff] group-hover:bg-[#0875ec] group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(8,117,236,0.25)] sm:h-18 sm:w-18'>
                  <Icon className='h-8 w-8' strokeWidth={1.8} aria-hidden='true' />
                </div>

                <div className='relative min-w-0'>
                  <span className='text-[0.65rem] font-bold tracking-[0.17em] text-[#96a9c1] transition-colors duration-300 group-hover:text-[#49a7ff]' aria-hidden='true'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='mt-2 text-lg font-bold leading-tight tracking-[-0.025em] text-[#071a43] transition-colors duration-300 group-hover:text-[#0875ec] sm:text-xl'>{reason.title}</h3>
                  <p className='mt-3 text-sm leading-6 text-[#647188] transition-colors duration-300 group-hover:text-[#3c4d67] sm:leading-7'>{reason.description}</p>
                </div>
              </article>
            )
          })}
        </div>

        <div className='mt-7 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left'>
          <p className='text-xs leading-6 text-[#718097] sm:text-sm'>Professional guidance. Clear reasoning. A relationship designed to last.</p>
          <p className='flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0875ec]'>
            <span className='h-1.5 w-1.5 rounded-full bg-[#0875ec] shadow-[0_0_10px_rgba(8,117,236,0.55)]' aria-hidden='true' />
            Client first, always
          </p>
        </div>
      </div>
    </section>
  )
}
