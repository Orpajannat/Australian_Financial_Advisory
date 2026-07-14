import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#eef4ff] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full border border-[#14205f]/[0.06]" />
      <div className="pointer-events-none absolute -left-10 top-32 h-44 w-44 rounded-full border border-[#14205f]/[0.05]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full border border-[#14205f]/[0.06]" />
      <div className="pointer-events-none absolute -right-16 bottom-16 h-60 w-60 rounded-full border border-[#14205f]/[0.05]" />

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#15205e] sm:mb-7">
          <span className="h-2 w-2 rotate-45 bg-[#807ae8]" aria-hidden="true" />
          About Us
        </p>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-24">
          <div className="flex flex-col">
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0c1455] sm:text-4xl lg:text-5xl">
              Building Financial Confidence for Every Stage of Life
            </h2>

            <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-2xl shadow-xl shadow-[#11195c]/10 sm:mt-10 lg:mt-14">
              <Image
                src="/images/Conversation.jpg"
                alt="Financial advisers having a conversation"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col lg:pt-3">
            <p className="max-w-2xl text-base leading-7 text-[#283363] sm:text-lg sm:leading-8">
              At Australia Financial Advisory, we do more than provide financial advice—we build lasting partnerships that help individuals, families, and businesses achieve their financial goals. Through personalized strategies, expert guidance, and a commitment to transparency, we empower our clients to make informed decisions with confidence.
            </p>

            <div className="my-9 flex flex-col items-start gap-8 sm:my-11 sm:flex-row sm:items-center sm:gap-14 lg:gap-20">
              <div className="flex flex-row items-end gap-3 text-[#0c1455]">
                <p className="text-5xl font-bold tracking-[-0.05em] sm:text-6xl">15+</p>
                <p className="max-w-32 pb-1 text-sm font-semibold leading-5 sm:text-base">Years of Financial Excellence</p>
              </div>

              <div className="relative h-36 w-36 shrink-0 text-[#1b2763] sm:h-40 sm:w-40" aria-label="Trust, Growth, Confidence, Success">
                <svg viewBox="0 0 160 160" className="h-full w-full" role="img" aria-hidden="true">
                  <defs>
                    <path id="about-circle-path" d="M 80,80 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0" />
                  </defs>
                  <text className="fill-current text-[11px] font-semibold tracking-[2.2px]">
                    <textPath href="#about-circle-path" startOffset="2%">
                      TRUST • GROWTH • CONFIDENCE • SUCCESS •
                    </textPath>
                  </text>
                  <path d="M59 95 101 53M78 53h23v23" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <p className="max-w-3xl text-base leading-7 text-[#3a456e] sm:leading-8">
              We believe every financial journey is unique. That&apos;s why we take the time to understand your objectives, assess your circumstances, and develop tailored strategies designed for long-term success. Whether you&apos;re planning for retirement, growing your investments, managing business finances, or protecting your wealth, our experienced advisors are dedicated to helping you navigate every step with clarity and confidence. Our client-first approach, industry expertise, and commitment to ethical advice have earned the trust of hundreds of clients across Australia. We don&apos;t just manage finances—we help build secure futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
