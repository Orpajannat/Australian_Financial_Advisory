'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Financial Planning',
    description: 'Plan your financial future with confidence through clear, practical strategies built around your life and goals.',
    image: '/images/service1.jpg',
    position: 'object-center',
  },
  {
    title: 'Investment Advice',
    description: 'Smart investment strategies designed to support sustainable growth while reflecting your comfort with risk.',
    image: '/images/service2.jpg',
    position: 'object-[42%_center]',
  },
  {
    title: 'Wealth Management',
    description: 'Grow and protect your wealth over time with coordinated advice that keeps the full financial picture in view.',
    image: '/images/service3.png',
    position: 'object-[65%_center]',
  },
  {
    title: 'Insurance & Risk',
    description: 'Protect what matters most to you with considered cover and risk strategies for greater peace of mind.',
    image: '/images/service4.jpg',
    position: 'object-left',
  },
  {
    title: 'Retirement Planning',
    description: 'Build a clear path toward a secure and comfortable retirement lifestyle with advice that evolves with you.',
    image: '/images/service5.jpg',
    position: 'object-right',
  },
  {
    title: 'Business Advisory',
    description: 'Make informed business decisions with financial solutions shaped around stability, opportunity, and growth.',
    image: '/images/service6.jpg',
    position: 'object-[78%_center]',
  },
]

export default function OurServices() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f3f7fd] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-36 top-40 h-80 w-80 rounded-full border border-[#1467e8]/[0.05]" />
      <div className="pointer-events-none absolute -right-28 bottom-24 h-72 w-72 rounded-full bg-[#dceaff]/30 blur-2xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="mx-auto w-fit rounded-full border border-[#bdd6fb] bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#16499e] shadow-sm">
            Our Services
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#0b1949] sm:text-4xl md:text-5xl lg:text-6xl">
            Financial guidance for your <span className="text-[#1874e8]">whole journey</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#526184] sm:text-lg sm:leading-8">
            Comprehensive financial solutions tailored to your needs—delivered with clarity, care, and a focus on your long-term confidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group overflow-hidden rounded-3xl border border-[#dfe8f5] bg-white shadow-[0_12px_35px_rgba(24,65,126,0.08)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(24,65,126,0.17)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: isVisible ? `${index * 90}ms` : '0ms' }}
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={`object-cover ${service.position} transition-transform duration-700 ease-out group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071743]/50 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 grid h-11 min-w-11 place-items-center rounded-xl bg-white px-2 text-sm font-bold text-[#16499e] shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-[#071743]/75 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                  Personal financial advice
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold tracking-[-0.02em] text-[#0b1949] sm:text-2xl">{service.title}</h3>
                <p className="mt-3 min-h-18 text-sm leading-6 text-[#566487] sm:text-base sm:leading-7">{service.description}</p>
                <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#124bb0] transition-all group-hover:gap-4" aria-label={`Learn more about ${service.title}`}>
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all delay-500 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Link href="/services" className="inline-flex items-center gap-4 rounded-full bg-[#0b1949] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#0b1949]/15 transition hover:-translate-y-1 hover:bg-linear-to-r hover:from-[#124bb0] hover:via-[#F7F7F0]/60 hover:to-[#124bb0] sm:px-9 sm:text-base">
            View all services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
