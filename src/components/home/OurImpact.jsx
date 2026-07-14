import Link from 'next/link'

const impacts = [
  {
    value: '500+',
    label: 'Clients Empowered',
    description: 'Supporting Australians with personalized financial strategies tailored to their goals.',
    icon: 'clients',
  },
  {
    value: '$750M+',
    label: 'Assets Advised',
    description: 'Helping clients grow, protect, and manage their wealth through strategic financial planning.',
    icon: 'assets',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Delivering exceptional service built on transparency, trust, and long-term relationships.',
    icon: 'satisfaction',
  },
  {
    value: '15+',
    label: 'Years of Experience',
    description: 'Providing expert financial guidance backed by industry knowledge and proven results.',
    icon: 'experience',
  },
]

function ImpactIcon({ type }) {
  if (type === 'clients') {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="19" cy="17" r="6" /><path d="M7 38v-4c0-6 5-10 12-10s12 4 12 10v4" /><circle cx="33" cy="20" r="5" /><path d="M34 28c5 0 9 3 9 8v2" />
      </svg>
    )
  }

  if (type === 'assets') {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="5" y="14" width="38" height="27" rx="4" /><path d="M17 14v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M5 25h38M20 23v5h8v-5" />
      </svg>
    )
  }

  if (type === 'satisfaction') {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
        <path d="m24 5 5.8 11.8 13 1.9-9.4 9.1 2.2 12.9L24 34.6l-11.6 6.1 2.2-12.9-9.4-9.1 13-1.9L24 5Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 4 41 11v12c0 10-7 17-17 21C14 40 7 33 7 23V11l17-7Z" /><path d="m17 24 5 5 10-11" />
    </svg>
  )
}

export default function OurImpact() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-28 -top-32 h-72 w-72 rounded-full bg-[#dceaff]/50" />
      <div className="impact-dots pointer-events-none absolute left-[7%] top-32 hidden h-24 w-24 opacity-40 sm:block" />
      <svg className="pointer-events-none absolute inset-x-0 top-32 h-64 w-full text-[#83b6ff]/25" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 225 C180 210 260 170 350 88 S590 240 760 175 1010 25 1440 85" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 260 C240 210 330 225 470 150 S760 225 910 140 1160 40 1440 20" fill="none" stroke="currentColor" />
        <circle cx="160" cy="201" r="7" fill="currentColor" /><circle cx="350" cy="88" r="7" fill="currentColor" /><circle cx="1210" cy="47" r="13" fill="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex w-fit flex-col items-center text-xs font-bold uppercase tracking-[0.12em] text-[#075de5]">
            Our Impact
            <span className="relative mt-2 h-px w-40 bg-[#78aaf8] before:absolute before:left-1/2 before:top-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#075de5]" />
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-[#071743] sm:text-4xl lg:text-5xl">
            Creating Financial Confidence<br className="hidden sm:block" /> Through <span className="text-[#075de5]">Trusted Advice</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#46547a] sm:text-base sm:leading-7">
            For years, we&apos;ve helped individuals, families, and businesses make informed financial decisions with confidence. Our impact is measured not only by the numbers we achieve but by the lasting relationships we build and the financial futures we help secure.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {impacts.map((impact) => (
            <article key={impact.label} className="group flex min-h-80 flex-col items-center rounded-2xl border border-[#dbe8fa] bg-white/90 px-6 py-7 text-center shadow-[0_15px_45px_rgba(44,91,160,0.09)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(44,91,160,0.16)]">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-[#edf4ff] text-[#0864ef] transition group-hover:scale-105">
                <ImpactIcon type={impact.icon} />
              </div>
              <p className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#0754ca] sm:text-5xl">{impact.value}</p>
              <h3 className="mt-1 text-base font-bold text-[#071743]">{impact.label}</h3>
              <span className="my-4 h-px w-8 bg-[#0873ff]" />
              <p className="text-sm leading-6 text-[#4e5b7e]">{impact.description}</p>
            </article>
          ))}
        </div>

        <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#061d58] via-[#062d7c] to-[#0755c7] px-6 py-7 text-white shadow-xl shadow-[#082b6b]/15 sm:px-10 lg:px-14">
          <div className="pointer-events-none absolute -bottom-28 right-10 h-52 w-96 rounded-[50%] border border-[#1a77e7]/40" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-white text-[#075de5]">
                <svg viewBox="0 0 48 48" className="h-12 w-12" fill="currentColor" aria-hidden="true">
                  <rect x="7" y="31" width="7" height="10" rx="1" /><rect x="19" y="24" width="7" height="17" rx="1" /><rect x="31" y="16" width="7" height="25" rx="1" /><path d="M8 25 19 15l8 5L39 8v7h3V3H30v3h7l-11 10-8-5L6 22l2 3Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">Every Number Represents a Life Changed</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                  Behind every strategy is a family planning for the future, a business pursuing growth, or an individual working toward financial independence. We&apos;re proud to make a meaningful difference through trusted advice and long-term partnerships.
                </p>
              </div>
            </div>

            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-5 rounded-xl border border-[#4ab1ff] bg-[#0874f9] px-7 py-4 text-sm font-bold shadow-lg shadow-black/15 transition hover:bg-[#1685ff] sm:text-base">
              Start Your Financial Journey
              <span className="text-2xl font-light" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <p className="mt-7 flex items-center justify-center gap-2 text-center text-sm text-[#566487]">
          <span className="text-[#0864ef]" aria-hidden="true">♢</span>
          Trusted by hundreds of clients across Australia.
        </p>
      </div>
    </section>
  )
}
