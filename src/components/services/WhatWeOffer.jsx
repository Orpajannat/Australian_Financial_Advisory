import Link from 'next/link'
import {
  BriefcaseBusiness,
  Calculator,
  ChartNoAxesCombined,
  ClipboardList,
  FileText,
  GraduationCap,
  HandHeart,
  House,
  Landmark,
  ShieldCheck,
  Umbrella,
  WalletCards,
} from 'lucide-react'

const services = [
  {
    title: 'Financial Planning',
    description: 'Create a clear financial roadmap aligned with your goals, lifestyle, and future needs.',
    features: ['Cash flow planning', 'Goal setting', 'Budget strategies', 'Future projections'],
    icon: ClipboardList,
  },
  {
    title: 'Investment Advice',
    description: 'Make informed investment decisions with strategies designed around your objectives and risk profile.',
    features: ['Portfolio strategy', 'Investment reviews', 'Risk assessment', 'Diversification'],
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Wealth Management',
    description: 'Grow, manage, and preserve your wealth through considered, long-term financial strategies.',
    features: ['Wealth protection', 'Asset allocation', 'Tax efficiency', 'Estate planning'],
    icon: WalletCards,
  },
  {
    title: 'Insurance & Risk Protection',
    description: 'Protect what matters most with comprehensive insurance solutions and informed risk management.',
    features: ['Life insurance', 'Income protection', 'Trauma cover', 'Risk assessment'],
    icon: ShieldCheck,
  },
  {
    title: 'Retirement Planning',
    description: 'Plan for a secure and comfortable retirement with strategies that evolve alongside you.',
    features: ['Retirement income', 'Superannuation advice', 'Pension planning', 'Lifestyle planning'],
    icon: Umbrella,
  },
  {
    title: 'Business Advisory',
    description: 'Strengthen your business with financial strategies that support resilience, stability, and growth.',
    features: ['Business planning', 'Cash flow management', 'Succession planning', 'Growth strategy'],
    icon: BriefcaseBusiness,
  },
  {
    title: 'Tax Planning',
    description: 'Improve your financial outcomes with intelligent, compliant strategies designed to minimise liabilities.',
    features: ['Tax optimisation', 'Deduction planning', 'Tax-efficient investing', 'Year-end planning'],
    icon: Calculator,
  },
  {
    title: 'Home Loan Advisory',
    description: 'Find a suitable home-loan structure with guidance tailored to your wider financial position.',
    features: ['Loan comparison', 'Interest-rate advice', 'Refinancing options', 'Loan structuring'],
    icon: House,
  },
  {
    title: 'Education Planning',
    description: 'Build a strong financial foundation for your children’s education and future opportunities.',
    features: ['Education savings', 'Investment for education', 'Cost projections', 'Scholarship planning'],
    icon: GraduationCap,
  },
  {
    title: 'Estate & Succession Planning',
    description: 'Protect your legacy and help ensure your wealth passes according to your intentions.',
    features: ['Will and estate planning', 'Asset distribution', 'Power of attorney', 'Succession planning'],
    icon: FileText,
  },
  {
    title: 'Philanthropy & Giving',
    description: 'Create meaningful impact through structured, thoughtful, and sustainable giving strategies.',
    features: ['Charitable giving plans', 'Trusts and foundations', 'Tax benefits', 'Legacy planning'],
    icon: HandHeart,
  },
  {
    title: 'Cash Flow Management',
    description: 'Take control of your cash flow and improve long-term financial stability with a practical plan.',
    features: ['Cash flow analysis', 'Expense optimisation', 'Debt management', 'Savings strategies'],
    icon: Landmark,
  },
]

function ServiceCard ({ service, index }) {
  const Icon = service.icon

  return (
    <article className='group relative flex min-h-[31rem] flex-col overflow-hidden rounded-[1.5rem] border border-[#dce7f5] bg-white p-6 shadow-[0_14px_38px_rgba(8,48,105,0.06)] transition duration-500 hover:-translate-y-2 hover:border-[#74b5fa] hover:shadow-[0_25px_55px_rgba(8,72,155,0.14)] sm:p-7'>
      <span className='absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#0875ec] via-[#2aa1ff] to-[#66c8ff] transition-transform duration-500 group-hover:scale-x-100' aria-hidden='true' />
      <div className='pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#168af5]/0 blur-3xl transition duration-500 group-hover:bg-[#168af5]/10' aria-hidden='true' />

      <div className='relative flex items-start justify-between gap-5'>
        <span className='grid h-16 w-16 place-items-center rounded-2xl border border-[#d2e4fa] bg-[#edf5ff] text-[#0875ec] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-[#58adff] group-hover:bg-[#0875ec] group-hover:text-white group-hover:shadow-[0_14px_28px_rgba(8,117,236,0.25)]'>
          <Icon size={30} strokeWidth={1.8} aria-hidden='true' />
        </span>
        <span className='rounded-lg border border-[#dce9f8] bg-[#f6f9fd] px-2.5 py-1.5 text-[0.68rem] font-bold tracking-[0.13em] text-[#7590b2] transition-colors duration-300 group-hover:border-[#9dccff] group-hover:text-[#0875ec]' aria-hidden='true'>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className='relative mt-6 text-xl font-bold leading-tight tracking-[-0.03em] text-[#071a43] transition-colors duration-300 group-hover:text-[#0875ec] sm:text-[1.35rem]'>{service.title}</h3>
      <p className='relative mt-3 text-sm leading-6 text-[#637088]'>{service.description}</p>

      <div className='relative my-5 h-px bg-linear-to-r from-[#c8dcf3] via-[#e5edf7] to-transparent' aria-hidden='true' />

      <ul className='relative space-y-2.5'>
        {service.features.map((feature) => (
          <li key={feature} className='flex items-center gap-3 text-sm text-[#45546d] transition-transform duration-300 group-hover:translate-x-1'>
            <span className='grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#e7f2ff] text-[#0875ec] transition-colors duration-300 group-hover:bg-[#0875ec] group-hover:text-white' aria-hidden='true'>
              <svg viewBox='0 0 12 12' className='h-2.5 w-2.5' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='m3 6 2 2 4-4' /></svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link href='/contact' className='group/link relative mt-auto flex items-center justify-between border-t border-[#e2eaf4] pt-5 text-sm font-bold text-[#0875ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0875ec]' aria-label={`Discuss ${service.title} with an adviser`}>
        Discuss this service
        <span className='grid h-8 w-8 place-items-center rounded-full bg-[#edf5ff] transition duration-300 group-hover/link:translate-x-1 group-hover/link:bg-[#0875ec] group-hover/link:text-white' aria-hidden='true'>→</span>
      </Link>
    </article>
  )
}

export default function WhatWeOffer () {
  return (
    <section id='service-list' className='relative scroll-mt-24 overflow-hidden bg-[#f6f9fe] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#dcecff]/60 blur-3xl' aria-hidden='true' />
      <div className='pointer-events-none absolute -right-36 bottom-48 h-96 w-96 rounded-full bg-[#e3efff]/70 blur-3xl' aria-hidden='true' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='mx-auto max-w-4xl text-center'>
          <p className='flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0875ec] sm:text-sm'>
            <span className='h-px w-8 bg-linear-to-r from-transparent to-[#0875ec]' aria-hidden='true' />
            What We Offer
            <span className='h-px w-8 bg-linear-to-l from-transparent to-[#0875ec]' aria-hidden='true' />
          </p>
          <h2 className='mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-balance text-[#06183f] sm:text-5xl lg:text-6xl'>
            Comprehensive advice for <span className='text-[#0875ec]'>every stage of life.</span>
          </h2>
          <p className='mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#5d6980] sm:text-base sm:leading-8'>
            Our tailored services are designed to help you build wealth, protect what matters, and make confident financial decisions—today and into the future.
          </p>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
