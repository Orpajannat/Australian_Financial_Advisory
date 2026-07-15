import Image from 'next/image'

const teamMembers = [
  {
    name: 'James Carter',
    role: 'Managing Director',
    experience: '20+ years of experience',
    description: 'Bringing strategic leadership and trusted guidance across financial planning, investment strategy, and wealth management.',
    image: '/images/employee1.jpg',
    position: 'object-[50%_22%]',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Senior Financial Adviser',
    experience: 'Retirement & investment specialist',
    description: 'Helping clients navigate retirement planning, investments, and wealth creation with clarity, care, and confidence.',
    image: '/images/employee2.jpg',
    position: 'object-[50%_20%]',
  },
]

export default function OurTeam () {
  return (
    <section className='relative overflow-hidden bg-[#f8fbff] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='pointer-events-none absolute -right-36 top-10 h-96 w-96 rounded-full bg-[#dcecff]/65 blur-3xl' aria-hidden='true' />
      <div className='pointer-events-none absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-[#e8f2ff] blur-3xl' aria-hidden='true' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
          <div>
            <p className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0875ec] sm:text-sm'>
              <span className='h-px w-9 bg-[#0875ec]' aria-hidden='true' />
              Our Team
            </p>
            <h2 className='mt-5 max-w-2xl text-4xl font-bold leading-[1.07] tracking-[-0.05em] text-[#06183f] sm:text-5xl lg:text-6xl'>
              Experienced advisers.<br />
              <span className='text-[#0875ec]'>Dedicated to you.</span>
            </h2>
          </div>
          <div className='max-w-2xl border-l border-[#b8d7f8] pl-5 sm:pl-8 lg:mb-1'>
            <p className='text-sm leading-7 text-[#56647c] sm:text-lg sm:leading-8'>
              Our qualified professionals combine deep industry knowledge with a genuine commitment to helping you achieve your financial goals. We&apos;re here to guide and support you at every stage of your journey.
            </p>
          </div>
        </div>

        <div className='mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-7'>
          {teamMembers.map((member, index) => (
            <article key={member.name} className='group relative grid overflow-hidden rounded-[1.75rem] border border-[#d9e7f7] bg-white shadow-[0_18px_50px_rgba(8,48,105,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#83bcfa] hover:shadow-[0_28px_65px_rgba(8,72,155,0.16)] sm:grid-cols-[0.82fr_1.18fr]'>
              <div className='relative min-h-80 overflow-hidden bg-[#dbe8f6] sm:min-h-[28rem]'>
                <Image
                  src={member.image}
                  alt='Portrait of an Australian Financial Advisory team member'
                  fill
                  sizes='(max-width: 639px) 100vw, (max-width: 1023px) 40vw, 22vw'
                  className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${member.position}`}
                />
                <div className='absolute inset-0 bg-linear-to-t from-[#031947]/35 via-transparent to-white/5 opacity-50 transition-opacity duration-500 group-hover:opacity-25' aria-hidden='true' />
                <span className='absolute left-5 top-5 rounded-full border border-white/35 bg-[#031947]/55 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:hidden' aria-hidden='true'>
                  0{index + 1}
                </span>
              </div>

              <div className='relative flex flex-col p-6 sm:p-7 lg:p-8'>
                <span className='absolute right-6 top-5 hidden text-5xl font-bold tracking-[-0.08em] text-[#071d48]/[0.045] transition-colors duration-500 group-hover:text-[#0875ec]/10 sm:block' aria-hidden='true'>
                  0{index + 1}
                </span>

                <div>
                  <p className='text-xs font-bold uppercase tracking-[0.15em] text-[#0875ec]'>{member.role}</p>
                  <h3 className='mt-3 text-2xl font-bold tracking-[-0.035em] text-[#071a43] transition-colors duration-300 group-hover:text-[#0875ec] sm:text-3xl'>{member.name}</h3>
                </div>

                <p className='mt-5 text-sm leading-7 text-[#5c6980] transition-colors duration-300 group-hover:text-[#35455e] sm:text-[0.95rem]'>{member.description}</p>

                <div className='mt-auto pt-7'>
                  <span className='mb-5 block h-px w-full bg-linear-to-r from-[#b9d7f8] via-[#dbe8f7] to-transparent' aria-hidden='true' />
                  <div className='flex items-center gap-3'>
                    <span className='grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e9f3ff] text-[#0875ec] transition duration-500 group-hover:rotate-6 group-hover:bg-[#0875ec] group-hover:text-white' aria-hidden='true'>
                      <svg viewBox='0 0 24 24' className='h-4 w-4' fill='none' stroke='currentColor' strokeWidth='1.9' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M12 3 15 9l6 .9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.9 9 9l3-6Z' />
                      </svg>
                    </span>
                    <p className='text-xs font-semibold leading-5 text-[#53617a] sm:text-sm'>{member.experience}</p>
                  </div>
                </div>

                <span className='absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#0875ec] to-[#38b4ff] transition-transform duration-500 group-hover:scale-x-100' aria-hidden='true' />
              </div>
            </article>
          ))}
        </div>

        <div className='mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#dce9f8] bg-white/70 px-5 py-5 text-center shadow-[0_12px_35px_rgba(8,48,105,0.05)] backdrop-blur-sm sm:flex-row sm:px-7 sm:text-left'>
          <p className='text-sm leading-6 text-[#5b6980]'>A collaborative team, united by one goal: helping you move forward with confidence.</p>
          <span className='shrink-0 text-xs font-bold uppercase tracking-[0.17em] text-[#0875ec]'>Advice with purpose</span>
        </div>
      </div>
    </section>
  )
}
