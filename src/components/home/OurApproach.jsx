import Image from 'next/image'
import Link from 'next/link'

const steps = [
  {
    title: 'Understand Your Goals',
    description: 'We take the time to understand your financial goals, needs, and long-term vision.',
    icon: <><circle cx="24" cy="24" r="13" /><circle cx="24" cy="24" r="7" /><path d="m24 24 12-12M31 12h5v5" /></>,
  },
  {
    title: 'Create a Personalised Strategy',
    description: 'Our experts design a strategy tailored to your circumstances and future aspirations.',
    icon: <><path d="M7 39h34M10 35V12M15 31l7-8 7 4 10-14" /><path d="M33 13h6v6" /></>,
  },
  {
    title: 'Support & Grow Together',
    description: 'We’re with you at every step, reviewing, adjusting, and helping you grow with confidence.',
    icon: <><path d="M24 4 40 10v12c0 10-7 18-16 22C15 40 8 32 8 22V10l16-6Z" /><path d="m17 24 5 5 10-11" /></>,
  },
]

const stats = [
  { value: '250+', label: 'Happy Clients', detail: 'Individuals, families and businesses served across Australia.', icon: 'people' },
  { value: '$500M+', label: 'Assets Advised', detail: 'Helping clients grow, protect and manage their wealth.', icon: 'chart' },
  { value: '15+', label: 'Years of Experience', detail: 'Decades of combined financial planning experience.', icon: 'award' },
  { value: '98%', label: 'Client Satisfaction', detail: 'Trust built through transparent advice and lasting relationships.', icon: 'shield' },
]

function StatIcon({ type }) {
  const props = { viewBox: '0 0 48 48', className: 'h-7 w-7', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'people') return <svg {...props}><circle cx="19" cy="17" r="6" /><path d="M7 38v-4c0-6 5-10 12-10s12 4 12 10v4" /><circle cx="34" cy="19" r="5" /><path d="M34 27c5 0 9 4 9 9v2" /></svg>
  if (type === 'chart') return <svg {...props}><path d="M7 40h34M11 35v-8h6v8M21 35V20h6v15M31 35V12h6v23M10 20l10-8 8 4L39 6" /><path d="M33 6h6v6" /></svg>
  if (type === 'award') return <svg {...props}><path d="M15 6h18v9a9 9 0 0 1-18 0V6ZM15 10H8v4c0 5 4 8 9 8M33 10h7v4c0 5-4 8-9 8M24 24v9M17 41h14M20 33h8v8" /></svg>
  return <svg {...props}><path d="M24 4 40 10v12c0 10-7 18-16 22C15 40 8 32 8 22V10l16-6Z" /><path d="m17 24 5 5 10-11" /></svg>
}

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-36 bottom-0 h-80 w-80 rounded-full bg-[#e8f2ff]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full border border-[#1267ee]/[0.05]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg border border-[#b9d3ff] bg-[#f5f9ff] px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#075de5] transition duration-300 hover:-translate-y-1 hover:border-[#0864ef] hover:bg-[#0864ef] hover:text-white hover:shadow-lg hover:shadow-[#0864ef]/20">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="9" cy="8" r="3" /><path d="M3 19v-2c0-3 2-5 6-5s6 2 6 5v2M16 7a3 3 0 0 1 0 6M17 13c3 0 5 2 5 5v1" /></svg>
              Our Approach
            </p>

            <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#081747] sm:text-4xl lg:text-5xl xl:text-[54px]">
              We guide you through <span className="text-[#0864ef]">every step</span> of your journey
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#566486]">
              Financial success isn’t about luck — it’s about having the right plan and the right partner. We simplify complex financial decisions and provide clear, practical guidance tailored to your unique goals.
            </p>

            <div className="mt-8 space-y-6">
              {steps.map((step) => (
                <div key={step.title} className="group grid grid-cols-[3.5rem_1fr] gap-4 rounded-2xl p-2 transition duration-300 hover:translate-x-2 hover:bg-[#f4f8ff] hover:shadow-md hover:shadow-[#16499e]/5">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-[#edf4ff] text-[#0864ef] transition duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-[#0864ef] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0864ef]/25">
                    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{step.icon}</svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1949] transition-colors group-hover:text-[#0864ef]">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#5b6888]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/contact" className="inline-flex items-center justify-center gap-5 rounded-md bg-[#0864ef] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0864ef]/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#0752c7] hover:shadow-xl hover:shadow-[#0864ef]/30">
                Book a Free Consultation <span aria-hidden="true">→</span>
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center gap-5 rounded-md border border-[#0864ef] px-6 py-3.5 text-sm font-bold text-[#0864ef] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#0864ef] hover:text-white hover:shadow-lg hover:shadow-[#0864ef]/20">
                How We Work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div>
            <div className="group relative aspect-[3/2] overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(13,45,100,0.13)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(13,45,100,0.22)]">
              <Image src="/images/heroBanner.jpg" alt="Financial advisers working with clients" fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0864ef]/0 transition-colors duration-500 group-hover:bg-[#0864ef]/10" />
            </div>

            <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#e1eaf6] bg-white shadow-[0_15px_40px_rgba(21,62,120,0.09)] sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`group px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#f1f6ff] sm:px-3 lg:px-4 ${index % 2 !== 0 ? 'border-l border-[#e1eaf6]' : ''} ${index > 1 ? 'border-t border-[#e1eaf6] sm:border-t-0 sm:border-l' : ''} ${index === 1 ? 'sm:border-l' : ''}`}>
                  <div className="mx-auto w-fit text-[#0864ef] transition duration-300 group-hover:-rotate-6 group-hover:scale-125"><StatIcon type={stat.icon} /></div>
                  <p className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0b1949] transition-colors group-hover:text-[#0864ef] sm:text-xl xl:text-3xl">{stat.value}</p>
                  <h3 className="mt-1 text-xs font-bold text-[#0b1949] xl:text-sm">{stat.label}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-[#62708e]">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl bg-gradient-to-r from-[#f4f8fe] to-[#edf5ff] px-6 py-6 sm:grid-cols-[1.15fr_1px_0.85fr] sm:items-center sm:px-8 lg:mt-16">
          <div className="group grid grid-cols-[3.5rem_1fr] items-center gap-4 rounded-xl p-2 transition duration-300 hover:bg-white/70 hover:shadow-md">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e2eeff] text-xl font-bold text-[#0864ef] transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#0864ef] group-hover:text-white">“</span>
            <p className="text-sm leading-6 text-[#596887]">Our mission is simple: to empower you with the knowledge, strategies, and support you need to achieve a secure and prosperous future.</p>
          </div>
          <span className="hidden h-full bg-[#d9e5f6] sm:block" />
          <div className="group grid grid-cols-[3.5rem_1fr] items-center gap-4 rounded-xl p-2 transition duration-300 hover:bg-white/70 hover:shadow-md">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e2eeff] text-[#0864ef] transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#0864ef] group-hover:text-white"><StatIcon type="shield" /></span>
            <div><p className="font-bold text-[#0b1949]">Trusted by Hundreds of Clients</p><p className="mt-1 text-xs text-[#66738e]">Proudly helping Australians achieve financial confidence.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
