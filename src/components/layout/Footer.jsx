import Image from 'next/image'
import Link from 'next/link'

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Our Process' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact Us' },
]

const serviceLinks = [
  'Financial Planning',
  'Investment Advice',
  'Wealth Management',
  'Retirement Planning',
  'Superannuation Advice',
  'Insurance & Risk Advice',
  'Business Advisory',
  'Estate Planning',
]

function ContactIcon({ type }) {
  const props = { viewBox: '0 0 24 24', className: 'h-5 w-5', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'phone') return <svg {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
  if (type === 'email') return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m3 6 9 7 9-7" /></svg>
  return <svg {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

function SocialIcon({ type }) {
  if (type === 'facebook') return <span className="text-xl font-bold" aria-hidden="true">f</span>
  if (type === 'linkedin') return <span className="text-base font-bold" aria-hidden="true">in</span>
  if (type === 'instagram') return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M22 12s0-3.5-.4-5.2a2.8 2.8 0 0 0-2-2C17.8 4.3 12 4.3 12 4.3s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 8.5 2 12 2 12s0 3.5.4 5.2a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15.5 22 12 22 12Zm-12 3.4V8.6l6 3.4-6 3.4Z" /></svg>
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#02143b] px-5 pt-16 text-white sm:px-8 sm:pt-20 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(20,90,220,0.13),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(10,76,185,0.13),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr_1.25fr] lg:gap-10 xl:gap-16">
          <div>
            <Link href="/" className="relative block h-16 w-64 overflow-hidden transition duration-500 hover:-translate-y-1 hover:scale-[1.02]" aria-label="Australian Financial Advisory home">
              <Image
                src="/images/FooterLogo.png"
                alt="Australian Financial Advisory"
                width={1772}
                height={608}
                sizes="331px"
                className="absolute -left-[37px] -top-[21px] h-auto w-[331px] max-w-none"
              />
            </Link>
            <p className="mt-7 max-w-xs text-base leading-7 text-white/70 transition-colors hover:text-white">
              Empowering financial futures. Helping individuals, families and businesses build, grow and protect their wealth.
            </p>

            <div className="mt-7 grid w-fit grid-cols-4 gap-3">
              {['facebook', 'linkedin', 'instagram', 'youtube'].map((social) => (
                <a key={social} href="#" aria-label={social} className="grid h-11 w-11 place-items-center rounded-xl bg-[#102958] text-white/90 transition duration-300 hover:-translate-y-2 hover:rotate-3 hover:scale-110 hover:bg-[#1268e8] hover:text-white hover:shadow-lg hover:shadow-[#1268e8]/30">
                  <SocialIcon type={social} />
                </a>
              ))}
            </div>

            <div className="group mt-8 grid max-w-xs grid-cols-[3.5rem_1fr] items-center gap-4 rounded-2xl border border-[#244273] p-5 transition duration-500 hover:-translate-y-1 hover:border-[#1876f2] hover:bg-[#092252] hover:shadow-xl hover:shadow-black/20">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0864ef] transition duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0864ef]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m12 2 8 4v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V6l8-4Z" /><path d="m8 12 3 3 5-6" /></svg>
              </span>
              <div><p className="font-bold">AFS Licensed</p><p className="mt-1 text-sm leading-5 text-white/65">Australian Financial Services Licensee</p></div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em]">Explore</h2>
            <nav className="mt-7 grid gap-4" aria-label="Footer navigation">
              {exploreLinks.map((link) => (
                <Link key={link.label} href={link.href} className="group w-fit text-base text-white/75 transition duration-300 hover:translate-x-2 hover:text-[#4d98ff]">
                  <span className="bg-linear-to-r from-[#4d98ff] to-[#4d98ff] bg-[length:0_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em]">Services</h2>
            <nav className="mt-7 grid gap-4" aria-label="Footer services">
              {serviceLinks.map((service) => (
                <Link key={service} href="#service-list" className="group w-fit text-base text-white/75 transition duration-300 hover:translate-x-2 hover:text-[#4d98ff]">
                  <span className="bg-linear-to-r from-[#4d98ff] to-[#4d98ff] bg-[length:0_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">{service}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em]">Get In Touch</h2>
            <div className="mt-7 grid gap-5">
              <a href="tel:+61255500198" className="group grid grid-cols-[3rem_1fr] items-center gap-3 text-white/80 transition hover:text-white">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#102958] transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#1268e8]"><ContactIcon type="phone" /></span>
                <span className="transition-transform group-hover:translate-x-1">+61 2 5550 0198</span>
              </a>
              <a href="mailto:enquiries@austfinancialadvisory.com.au" className="group grid grid-cols-[3rem_1fr] items-center gap-3 break-all text-white/80 transition hover:text-white">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#102958] transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#1268e8]"><ContactIcon type="email" /></span>
                <span className="transition-transform group-hover:translate-x-1">enquiries@austfinancialadvisory.com.au</span>
              </a>
              <div className="group grid grid-cols-[3rem_1fr] items-start gap-3 text-white/80 transition hover:text-white">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#102958] transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#1268e8]"><ContactIcon type="location" /></span>
                <address className="pt-1 not-italic leading-7 transition-transform group-hover:translate-x-1">Level 42, 1 Macquarie Place,<br />Sydney NSW 2000, Australia</address>
              </div>
            </div>

            <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0864ef] px-7 py-4 text-sm font-bold shadow-lg shadow-[#0864ef]/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-linear-to-r hover:from-[#124bb0] hover:via-[#F7F7F7]/30 hover:to-[#124bb0] hover:shadow-xl">
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 border-t border-white/15 py-7 text-center text-sm text-white/60 md:grid-cols-[1fr_auto] md:text-left">
          <p className="transition-colors hover:text-white">© 2026 Australian Financial Advisory. All Rights Reserved.</p>
          <div className="grid grid-cols-2 gap-6 md:flex md:gap-8">
            <Link href="/privacy" className="transition hover:text-[#4d98ff]">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-[#4d98ff]">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
