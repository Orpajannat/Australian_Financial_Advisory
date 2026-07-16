import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#08084f] sm:min-h-[760px] lg:min-h-screen">
      <div className="absolute inset-0 lg:left-auto lg:w-[58%]">
        <Image
          src="/images/heroBanner.jpg"
          alt="Financial advisory team collaborating"
          fill
          preload
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-center transition-transform duration-600 ease-out hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#08084f]/70 via-[#08084f]/45 to-[#08084f]/90 lg:hidden" />
      <div className="hero-panel absolute inset-y-0 left-0 hidden w-[67%] bg-[#08084f] lg:block" />
      <div className="hero-accent absolute inset-y-0 left-[48%] hidden w-[24%] bg-gradient-to-r from-[#1e2b82] to-[#4058ae]/75 lg:block" />

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-14 pt-32 sm:min-h-[760px] sm:px-8 sm:pb-20 lg:min-h-screen lg:items-center lg:px-10 lg:pb-10 lg:pt-28">
        <div className="max-w-2xl text-white lg:max-w-[560px]">
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#bbb8ff] sm:text-sm">
            <span className="h-2 w-2 rotate-45 bg-[#a6a2ff]" />
            Clear advice. Confident decisions.
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[68px]">
            Financial advice that helps you move forward
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            Practical, personalised strategies for building wealth, protecting what matters, and creating the future you want.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1874E8] py-2.5 pl-2.5 pr-6 text-sm font-bold text-[#0c0c51] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-lg" aria-hidden="true">→</span>
              Start Your Free Consultation
            </Link>
            <Link href="/services" className="w-fit flex flex-row items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-white/85 hover:text-white duration-200 hover:gap-5 hover:-translate-y-0.5">
              Explore our services
              <span className="text-lg" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/20 pt-6 sm:mt-14 sm:gap-8">
            <div><strong className="block text-xl sm:text-2xl">15+</strong><span className="text-xs text-white/60 sm:text-sm">Years experience</span></div>
            <div><strong className="block text-xl sm:text-2xl">500+</strong><span className="text-xs text-white/60 sm:text-sm">Clients advised</span></div>
            <div><strong className="block text-xl sm:text-2xl">100%</strong><span className="text-xs text-white/60 sm:text-sm">Personalised</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
