import Link from 'next/link'
import { ChevronDown, Headphones, MessageCircle } from 'lucide-react'

const questions = [
  {
    question: 'How do I know which financial service is right for me?',
    answer: 'We begin with a conversation about your current position, priorities, and goals. From there, we identify the areas where advice can add the most value and explain the most suitable next steps clearly.',
  },
  {
    question: 'Do you offer ongoing financial advice?',
    answer: 'Yes. Financial plans should evolve as your life, priorities, and markets change. Our ongoing advice includes regular reviews, progress monitoring, strategy adjustments, and continued access to professional guidance.',
  },
  {
    question: 'Can you help with retirement planning?',
    answer: 'Yes. We can help you understand your retirement position, structure superannuation and investments, plan sustainable income, and create a strategy designed around the lifestyle you want to maintain.',
  },
  {
    question: 'How are your fees structured?',
    answer: 'Fees depend on the complexity and scope of the advice required. We explain all costs clearly before any work begins, so you understand what you are paying for and can make an informed decision without hidden surprises.',
  },
  {
    question: 'Do you work with both individuals and businesses?',
    answer: 'Yes. We advise individuals, families, professionals, and business owners. Each engagement is tailored to the client, whether the focus is personal wealth, business cash flow, risk protection, succession, or long-term planning.',
  },
  {
    question: 'What should I bring to an initial consultation?',
    answer: 'You do not need to prepare everything in advance. A general understanding of your income, expenses, assets, liabilities, and goals is helpful, and we will guide you through any additional information needed after the conversation.',
  },
]

export default function Questions () {
  return (
    <section className='relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full bg-[#e7f2ff]/80 blur-3xl' aria-hidden='true' />
      <div className='pointer-events-none absolute -right-36 bottom-10 h-96 w-96 rounded-full bg-[#edf5ff] blur-3xl' aria-hidden='true' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0875ec] sm:text-sm'>
            <span className='h-px w-8 bg-linear-to-r from-transparent to-[#0875ec]' aria-hidden='true' />
            Frequently Asked Questions
            <span className='h-px w-8 bg-linear-to-l from-transparent to-[#0875ec]' aria-hidden='true' />
          </p>
          <h2 className='mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-balance text-[#06183f] sm:text-5xl lg:text-6xl'>
            Clear answers for your <span className='text-[#0875ec]'>next step.</span>
          </h2>
          <p className='mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5d6980] sm:text-base sm:leading-8'>
            Helpful guidance on our advice, process, and what you can expect when working with our team.
          </p>
        </div>

        <div className='mt-12 grid items-start gap-8 lg:mt-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10 xl:gap-14'>
          <div className='space-y-3'>
            {questions.map((item, index) => (
              <details key={item.question} name='services-faq' open={index === 0} className='group overflow-hidden rounded-2xl border border-[#dbe7f5] bg-[#f9fbfe] shadow-[0_8px_24px_rgba(8,48,105,0.035)] transition duration-300 open:border-[#9ac8f8] open:bg-white open:shadow-[0_16px_38px_rgba(8,72,155,0.08)] hover:border-[#99c7f6] hover:bg-white hover:shadow-[0_13px_32px_rgba(8,72,155,0.07)]'>
                <summary className='flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-sm font-bold leading-6 text-[#0a1d46] outline-none transition-colors duration-300 group-open:text-[#0875ec] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0875ec] sm:px-6 sm:py-6 sm:text-base [&::-webkit-details-marker]:hidden'>
                  <span className='flex min-w-0 items-center gap-4'>
                    <span className='hidden text-[0.65rem] font-bold tracking-[0.15em] text-[#9aaac0] transition-colors duration-300 group-hover:text-[#4a9bec] group-open:text-[#0875ec] sm:block' aria-hidden='true'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.question}
                  </span>
                  <span className='grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d4e3f4] bg-white text-[#0875ec] transition duration-300 group-hover:border-[#86bdf5] group-hover:bg-[#edf6ff] group-open:rotate-180 group-open:border-[#0875ec] group-open:bg-[#0875ec] group-open:text-white' aria-hidden='true'>
                    <ChevronDown size={17} strokeWidth={2.2} />
                  </span>
                </summary>
                <div className='px-5 pb-6 sm:px-6 sm:pb-7'>
                  <div className='border-t border-[#e3ebf5] pt-5 sm:pl-10'>
                    <p className='max-w-3xl text-sm leading-7 text-[#5c6980] sm:text-[0.95rem] sm:leading-8'>{item.answer}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <aside className='group relative overflow-hidden rounded-[1.75rem] bg-[#061b48] p-7 text-white shadow-[0_25px_60px_rgba(3,25,71,0.18)] sm:p-9 lg:sticky lg:top-8 lg:min-h-[29rem] lg:p-10'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_5%,rgba(25,139,255,0.3),transparent_36%),radial-gradient(circle_at_0%_100%,rgba(9,80,184,0.25),transparent_35%)]' aria-hidden='true' />
            <div className='pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#3fa8ff]/15 transition-transform duration-700 group-hover:scale-110' aria-hidden='true' />
            <svg className='pointer-events-none absolute bottom-0 right-0 h-52 w-52 text-[#248cef]/12' viewBox='0 0 200 200' aria-hidden='true'>
              <path d='M20 185C45 90 95 155 120 70s65-65 95-55M40 200C65 110 110 170 140 90s60-65 80-50' fill='none' stroke='currentColor' />
            </svg>

            <div className='relative flex h-full flex-col'>
              <span className='grid h-20 w-20 place-items-center rounded-2xl border border-[#3f8edd]/45 bg-[#08285c] text-[#4eb5ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_30px_rgba(0,4,20,0.22)] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-[#5cbaff] group-hover:bg-[#0b6dd9] group-hover:text-white'>
                <Headphones size={38} strokeWidth={1.7} aria-hidden='true' />
              </span>
              <p className='mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#4eafff]'>Talk with our team</p>
              <h3 className='mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl'>Still have questions?</h3>
              <p className='mt-4 max-w-sm text-sm leading-7 text-white/62 sm:text-base'>Every financial situation is different. Our team is ready to listen, understand what you need, and help you find the right way forward.</p>

              <Link href='/contact' className='group/link mt-8 inline-flex w-full items-center justify-between rounded-xl bg-white px-5 py-4 text-sm font-bold text-[#082252] shadow-[0_12px_28px_rgba(0,5,22,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#eaf5ff] hover:text-[#0875ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-fit sm:min-w-52'>
                Contact Us
                <MessageCircle size={18} className='transition-transform duration-300 group-hover/link:scale-110' aria-hidden='true' />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
