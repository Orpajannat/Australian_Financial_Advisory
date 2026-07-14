import Link from 'next/link'

const features = [
  { title: 'Trusted Advice', description: 'Expert guidance you can rely on.', icon: 'shield' },
  { title: 'Client Focused', description: 'Your goals are at the heart of everything we do.', icon: 'clients' },
  { title: 'Proven Results', description: 'Strategies designed for long-term success.', icon: 'results' },
  { title: 'Secure & Confidential', description: 'Your information is safe with us.', icon: 'lock' },
]

function FeatureIcon({ type }) {
  const props = { viewBox: '0 0 48 48', className: 'h-9 w-9', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'shield') return <svg {...props}><path d="M24 4 40 10v12c0 10-7 18-16 22C15 40 8 32 8 22V10l16-6Z" /><path d="m17 24 5 5 10-11" /></svg>
  if (type === 'clients') return <svg {...props}><circle cx="19" cy="17" r="6" /><path d="M7 39v-4c0-7 5-11 12-11s12 4 12 11v4" /><circle cx="34" cy="19" r="5" /><path d="M34 28c5 0 9 3 9 9v2" /></svg>
  if (type === 'results') return <svg {...props}><path d="M7 41h34M10 35v-8h7v8M21 35V21h7v14M32 35V13h7v22M9 21l11-9 8 5L40 6" /><path d="M34 6h6v6" /></svg>
  return <svg {...props}><rect x="9" y="20" width="30" height="23" rx="4" /><path d="M15 20v-7a9 9 0 0 1 18 0v7M24 29v6" /><circle cx="24" cy="29" r="2" /></svg>
}

export default function Let() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="group/panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#031947] px-6 py-14 text-white shadow-[0_25px_70px_rgba(4,35,84,0.18)] transition duration-700 hover:shadow-[0_32px_85px_rgba(4,49,120,0.28)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(15,104,232,0.25),transparent_34%),radial-gradient(circle_at_12%_82%,rgba(7,79,184,0.2),transparent_30%)]" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full text-[#1878ec]/25 transition duration-700 group-hover/panel:text-[#2c8dff]/35" viewBox="0 0 1280 620" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 160C130 30 260 180 380 350S620 600 760 450 1040 80 1320 60" fill="none" stroke="currentColor" />
          <path d="M-40 190C135 55 255 200 370 370S610 620 770 470 1050 120 1320 90" fill="none" stroke="currentColor" />
          <path d="M-40 225C120 85 250 220 360 390S610 640 785 500 1070 160 1320 120" fill="none" stroke="currentColor" />
          <path d="M-40 265C120 120 240 250 350 415S600 660 800 530 1090 200 1320 155" fill="none" stroke="currentColor" />
        </svg>

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mx-auto w-fit rounded-full border border-[#1b77ed] bg-[#08255a]/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#3d9bff] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1166d8] hover:text-white hover:shadow-lg hover:shadow-[#1166d8]/30">
            Let&apos;s Start
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to start your <span className="italic text-[#24a0ff] transition-colors duration-300 hover:text-[#77c5ff]">journey?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/75 transition-colors hover:text-white/90 sm:text-lg sm:leading-8">
            Whether you&apos;re looking for financial guidance, planning for the future, or exploring better investment opportunities, we&apos;re here to listen. No pressure, no jargon — just a real conversation about what you need.
          </p>

          <div className="mt-9 grid justify-center gap-4 sm:flex sm:flex-wrap">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-4 rounded-2xl bg-linear-to-r from-[#1597f5] to-[#075de5] px-7 py-4 text-sm font-bold shadow-lg shadow-[#0875ec]/25 transition duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:from-[#27adff] hover:to-[#176ff0] hover:shadow-xl hover:shadow-[#128aff]/35 sm:text-base">
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:-rotate-6 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" /><path d="M8 9h8M8 13h5" /></svg>
              Book a Free Consultation
              <span className="transition-transform group-hover:translate-x-2" aria-hidden="true">→</span>
            </Link>
            <Link href="/services" className="group inline-flex items-center justify-center gap-4 rounded-2xl border border-[#4d9dff] bg-[#061b47]/70 px-7 py-4 text-sm font-bold transition duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:bg-white hover:text-[#08225a] hover:shadow-xl sm:text-base">
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:rotate-6 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="6" width="18" height="15" rx="2" /><path d="M8 6V3h8v3M3 12h18M9 10v4h6v-4" /></svg>
              Explore Our Services
              <span className="transition-transform group-hover:translate-x-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
          {features.map((feature, index) => (
            <article key={feature.title} className={`group grid grid-cols-[4.5rem_1fr] items-center gap-4 rounded-2xl p-4 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-black/10 ${index > 0 ? 'lg:border-l lg:border-white/15' : ''}`}>
              <div className="grid h-16 w-16 place-items-center rounded-full border border-[#2a5288] bg-[#062153]/70 text-[#2492ff] transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-[#2792ff] group-hover:bg-[#1070e8] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(30,132,255,0.35)]">
                <FeatureIcon type={feature.icon} />
              </div>
              <div>
                <h3 className="font-bold transition-colors group-hover:text-[#4ca8ff]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65 transition-colors group-hover:text-white/90">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
