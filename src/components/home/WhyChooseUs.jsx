import Link from 'next/link'

const reasons = [
  { value: '250+', title: 'Happy Clients', detail: 'and growing', icon: 'clients' },
  { value: '$500M+', title: 'Assets Managed', detail: 'across portfolios', icon: 'assets' },
  { value: '15+', title: 'Years of Experience', detail: 'in financial advisory', icon: 'experience' },
  { value: '98%', title: 'Client Satisfaction', detail: 'based on reviews', icon: 'satisfaction' },
]

function ReasonIcon({ type }) {
  const props = { viewBox: '0 0 48 48', className: 'h-11 w-11', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'clients') return <svg {...props}><circle cx="18" cy="17" r="6" /><path d="M6 39v-4c0-7 5-11 12-11s12 4 12 11v4" /><circle cx="34" cy="18" r="5" /><path d="M34 27c5 0 9 3 9 9v3" /></svg>
  if (type === 'assets') return <svg {...props}><path d="M6 41h36M10 35V25h6v10M21 35V18h6v17M32 35V11h6v24M9 19l10-8 8 4L39 5" /><path d="M33 5h6v6" /></svg>
  if (type === 'experience') return <svg {...props}><path d="M14 6h20v9a10 10 0 0 1-20 0V6ZM14 10H6v4c0 6 4 9 10 9M34 10h8v4c0 6-4 9-10 9M24 25v9M17 42h14M20 34h8v8" /></svg>
  return <svg {...props}><path d="M24 4 40 10v12c0 10-7 18-16 22C15 40 8 32 8 22V10l16-6Z" /><path d="m17 24 5 5 10-11" /></svg>
}

export default function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03143b] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(20,91,225,0.17),transparent_36%),radial-gradient(circle_at_15%_80%,rgba(4,55,145,0.2),transparent_32%)]" />
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full text-[#1167df]/20" viewBox="0 0 1440 190" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 100C210 230 390 160 540 100s270-70 440 10 300 35 460-60" fill="none" stroke="currentColor" />
        <path d="M0 125C180 230 370 205 545 135s300-75 450 5 285 50 445-30" fill="none" stroke="currentColor" />
        <path d="M0 155C180 235 365 230 555 165s300-60 455 0 275 45 430-10" fill="none" stroke="currentColor" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))] xl:items-stretch">
        <div className="group rounded-2xl p-2 transition duration-500 hover:translate-x-2">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3181ff] transition group-hover:tracking-[0.22em]">Why Choose Us</p>
          <h2 className="mt-4 max-w-sm text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
            Experience. Trust. <span className="transition-colors group-hover:text-[#438cff]">Results.</span>
          </h2>
          <p className="mt-4 max-w-sm text-base leading-7 text-white/70 transition-colors group-hover:text-white/90">
            We are committed to helping our clients achieve financial success with personalized strategies.
          </p>
          <Link href="/about" className="mt-6 inline-flex items-center gap-5 rounded-lg border border-white/40 px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-[#287cff] hover:bg-[#1262df] hover:shadow-xl hover:shadow-[#1262df]/25">
            About Us <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:col-span-4 xl:grid-cols-4">
          {reasons.map((reason) => (
            <article key={reason.title} className="group relative overflow-hidden rounded-2xl border border-[#16366d] bg-[#071b49]/80 px-5 py-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm transition duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-[#2379f2] hover:bg-[#0a265f] hover:shadow-[0_20px_45px_rgba(0,73,190,0.22)]">
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-linear-to-r from-transparent via-[#338cff] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#126cff]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#126cff]/20" />
              <div className="mx-auto w-fit text-[#1b70f1] transition duration-500 group-hover:-rotate-6 group-hover:scale-125 group-hover:text-[#63a4ff] group-hover:drop-shadow-[0_0_12px_rgba(60,139,255,0.6)]">
                <ReasonIcon type={reason.icon} />
              </div>
              <p className="mt-5 text-4xl font-bold tracking-[-0.04em] text-[#176cf1] transition duration-300 group-hover:scale-105 group-hover:text-[#5da0ff] lg:text-5xl">{reason.value}</p>
              <h3 className="mt-3 text-base font-bold transition-transform duration-300 group-hover:-translate-y-0.5 lg:text-lg">{reason.title}</h3>
              <p className="mt-1 text-sm text-white/65 transition-colors group-hover:text-white/90">{reason.detail}</p>
              <span className="mx-auto mt-5 block h-0.5 w-8 bg-[#2278ed]/0 transition-all duration-500 group-hover:w-16 group-hover:bg-[#2278ed]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
