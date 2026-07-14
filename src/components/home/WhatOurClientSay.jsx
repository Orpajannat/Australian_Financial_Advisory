const testimonials = [
  {
    quote: 'Aust Financial Advisory helped us secure our retirement. Their advice is practical, clear and effective.',
    name: 'Michael Thompson',
    role: 'Retired Engineer',
    initials: 'MT',
    colors: 'from-[#163d7a] to-[#2b78c5]',
  },
  {
    quote: 'Their team is professional, responsive and truly cares about our financial well-being. Highly recommended!',
    name: 'Sarah Mitchell',
    role: 'Business Owner',
    initials: 'SM',
    colors: 'from-[#9a653f] to-[#d69a65]',
  },
  {
    quote: 'Excellent guidance on investments and wealth management. We’ve seen great growth in our portfolio.',
    name: 'David Anderson',
    role: 'Corporate Executive',
    initials: 'DA',
    colors: 'from-[#15614e] to-[#51a76e]',
  },
]

export default function WhatOurClientSay() {
  return (
    <section className="relative overflow-hidden bg-[#fbfdff] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 rounded-full bg-[#e7f1ff]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full border border-[#1267ee]/[0.05]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#176ae5]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#091744] sm:text-4xl lg:text-5xl">What Our Clients Say</h2>
          <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-[#76aaff]" />
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5a6786]">Real experiences from clients who trust us to help shape their financial future.</p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.name} className="group relative flex min-h-80 flex-col overflow-hidden rounded-3xl border border-[#e7edf7] bg-white px-7 py-8 shadow-[0_12px_40px_rgba(28,67,124,0.08)] transition duration-500 hover:-translate-y-3 hover:border-[#bad5ff] hover:shadow-[0_25px_60px_rgba(28,67,124,0.16)] sm:px-9 sm:py-9">
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#176ae5] via-[#71a8ff] to-[#176ae5] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="absolute right-7 top-5 text-7xl font-black leading-none text-[#176ae5]/[0.04] transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:text-[#176ae5]/[0.08]">{String(index + 1).padStart(2, '0')}</span>

              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5ff] text-4xl font-bold leading-none text-[#84b1f8] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#176ae5] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#176ae5]/25" aria-hidden="true">“</div>
              <blockquote className="relative z-10 mt-6 text-lg font-medium leading-8 text-[#202c50] transition-colors group-hover:text-[#091744] sm:text-xl">
                {testimonial.quote}
              </blockquote>

              <div className="relative z-10 mt-auto flex items-center gap-4 pt-8">
                <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full bg-linear-to-br ${testimonial.colors} text-sm font-bold text-white ring-4 ring-[#edf4ff] transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:ring-[#cfe2ff]`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-bold text-[#0b1949] transition-colors group-hover:text-[#176ae5]">{testimonial.name}</h3>
                  <p className="mt-1 text-sm text-[#65708a]">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 flex items-center justify-center gap-3" aria-label="Testimonial pages">
          <button type="button" className="h-2.5 w-2.5 rounded-full bg-[#d9e2ef] transition duration-300 hover:scale-150 hover:bg-[#176ae5]" aria-label="Testimonial page 1" />
          <button type="button" className="h-2.5 w-2.5 rounded-full bg-[#d9e2ef] transition duration-300 hover:scale-150 hover:bg-[#176ae5]" aria-label="Testimonial page 2" />
          <button type="button" className="h-3 w-3 rounded-full bg-[#176ae5] shadow-md shadow-[#176ae5]/30 transition duration-300 hover:scale-150" aria-label="Testimonial page 3" aria-current="true" />
        </div>
      </div>
    </section>
  )
}
