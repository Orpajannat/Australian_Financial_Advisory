import { ArrowRight, Clock3, LockKeyhole, Mail, MapPin, Phone } from 'lucide-react'

const fieldClass = 'mt-2 w-full rounded-xl border border-[#cfdeef] bg-[#f9fbfe] px-4 py-3.5 text-sm text-[#14284e] outline-none transition duration-300 placeholder:text-[#94a1b4] hover:border-[#9cc5f1] hover:bg-white focus:border-[#0875ec] focus:bg-white focus:ring-4 focus:ring-[#0875ec]/10'

export default function GetInTouch () {
  return (
    <section className='relative overflow-hidden bg-[#f6f9fe] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#e5f0ff] blur-3xl' aria-hidden='true' />
      <div className='pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#e1eeff]/80 blur-3xl' aria-hidden='true' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='mb-12 max-w-3xl lg:mb-16'>
          <p className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0875ec] sm:text-sm'>
            <span className='h-px w-9 bg-[#0875ec]' aria-hidden='true' />
            Get in Touch
          </p>
          <h2 className='mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-[#06183f] sm:text-5xl lg:text-6xl'>
            Start with a <span className='text-[#0875ec]'>conversation.</span>
          </h2>
          <p className='mt-5 max-w-2xl text-sm leading-7 text-[#5d6980] sm:text-base sm:leading-8'>
            Choose the contact option that suits you, or share a few details using the enquiry form and our team can follow up with you.
          </p>
        </div>

        <div className='grid items-stretch gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8 xl:gap-10'>
          <aside className='relative overflow-hidden rounded-[2rem] bg-[#061b48] p-6 text-white shadow-[0_28px_70px_rgba(3,25,71,0.2)] sm:p-9 lg:p-10'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_5%,rgba(28,139,255,0.3),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(8,76,184,0.24),transparent_35%)]' aria-hidden='true' />
            <div className='pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#4aaeff]/15' aria-hidden='true' />
            <svg className='pointer-events-none absolute bottom-0 right-0 h-56 w-56 text-[#268def]/12' viewBox='0 0 220 220' aria-hidden='true'>
              <path d='M10 210C45 100 110 185 140 80s70-60 95-45M35 220C70 125 125 195 160 105s55-55 75-35' fill='none' stroke='currentColor' />
            </svg>

            <div className='relative'>
              <p className='text-xs font-bold uppercase tracking-[0.18em] text-[#50b2ff]'>Contact details</p>
              <h3 className='mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl'>We&apos;re ready to listen.</h3>
              <p className='mt-4 max-w-md text-sm leading-7 text-white/60 sm:text-base'>Reach our team directly using the details below. Your enquiry will be treated with care and confidentiality.</p>

              <div className='mt-8 space-y-4'>
                <a href='tel:+61255500198' className='group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition duration-300 hover:translate-x-1 hover:border-[#4cabff]/45 hover:bg-white/[0.1] sm:p-5'>
                  <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0a2d67] text-[#50b2ff] transition duration-300 group-hover:-rotate-6 group-hover:bg-[#0875ec] group-hover:text-white' aria-hidden='true'><Phone size={22} /></span>
                  <span className='min-w-0'><span className='block text-xs font-bold uppercase tracking-[0.13em] text-white/40'>Phone Number</span><span className='mt-1.5 block text-sm font-semibold text-white sm:text-base'>+61 2 5550 0198</span></span>
                </a>

                <a href='mailto:enquiries@austfinancialadvisory.com.au' className='group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition duration-300 hover:translate-x-1 hover:border-[#4cabff]/45 hover:bg-white/[0.1] sm:p-5'>
                  <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0a2d67] text-[#50b2ff] transition duration-300 group-hover:-rotate-6 group-hover:bg-[#0875ec] group-hover:text-white' aria-hidden='true'><Mail size={22} /></span>
                  <span className='min-w-0'><span className='block text-xs font-bold uppercase tracking-[0.13em] text-white/40'>Email</span><span className='mt-1.5 block break-all text-sm font-semibold leading-6 text-white'>enquiries@austfinancialadvisory.com.au</span></span>
                </a>

                <div className='group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition duration-300 hover:translate-x-1 hover:border-[#4cabff]/45 hover:bg-white/[0.1] sm:p-5'>
                  <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0a2d67] text-[#50b2ff] transition duration-300 group-hover:-rotate-6 group-hover:bg-[#0875ec] group-hover:text-white' aria-hidden='true'><MapPin size={22} /></span>
                  <address className='min-w-0 not-italic'><span className='block text-xs font-bold uppercase tracking-[0.13em] text-white/40'>Office Address</span><span className='mt-1.5 block text-sm font-semibold leading-6 text-white'>Level 42, 1 Macquarie Place<br />Sydney NSW 2000, Australia</span></address>
                </div>
              </div>

              <div className='mt-6 flex items-center gap-3 border-t border-white/10 pt-6 text-xs leading-5 text-white/45 sm:text-sm'>
                <Clock3 size={17} className='shrink-0 text-[#50b2ff]' aria-hidden='true' />
                Consultations are available by appointment.
              </div>
            </div>
          </aside>

          <div className='rounded-[2rem] border border-[#d9e6f4] bg-white p-6 shadow-[0_24px_65px_rgba(8,48,105,0.09)] transition duration-500 hover:border-[#b2d2f5] hover:shadow-[0_30px_75px_rgba(8,72,155,0.13)] sm:p-9 lg:p-10 xl:p-12'>
            <div className='max-w-2xl'>
              <p className='text-xs font-bold uppercase tracking-[0.18em] text-[#0875ec]'>Send us a message</p>
              <h3 className='mt-3 text-3xl font-bold tracking-[-0.04em] text-[#071a43] sm:text-4xl'>How can we help?</h3>
              <p className='mt-3 text-sm leading-7 text-[#667389] sm:text-base'>Complete the form below with a little information about your enquiry.</p>
            </div>

            <form id='contact-form' className='mt-8 scroll-mt-28' method='post'>
              <div className='grid gap-x-5 gap-y-5 sm:grid-cols-2'>
                <label className='text-sm font-semibold text-[#1a2c4f]'>
                  Full Name
                  <input type='text' name='name' autoComplete='name' placeholder='Enter your full name' required className={fieldClass} />
                </label>
                <label className='text-sm font-semibold text-[#1a2c4f]'>
                  Email Address
                  <input type='email' name='email' autoComplete='email' placeholder='Enter your email address' required className={fieldClass} />
                </label>
                <label className='text-sm font-semibold text-[#1a2c4f]'>
                  Phone Number
                  <input type='tel' name='phone' autoComplete='tel' placeholder='Enter your phone number' className={fieldClass} />
                </label>
                <label className='text-sm font-semibold text-[#1a2c4f]'>
                  Subject
                  <select name='subject' defaultValue='' required className={`${fieldClass} cursor-pointer`}>
                    <option value='' disabled>Select a subject</option>
                    <option value='financial-planning'>Financial Planning</option>
                    <option value='investments'>Investment Advice</option>
                    <option value='retirement'>Retirement Planning</option>
                    <option value='business'>Business Advisory</option>
                    <option value='other'>Other Enquiry</option>
                  </select>
                </label>
              </div>

              <label className='mt-5 block text-sm font-semibold text-[#1a2c4f]'>
                Message
                <textarea name='message' rows={6} placeholder='Tell us how we can help' required className={`${fieldClass} resize-y`} />
              </label>

              <div className='mt-5 flex items-start gap-2.5 text-xs leading-5 text-[#718097] sm:text-sm'>
                <LockKeyhole size={15} className='mt-0.5 shrink-0 text-[#0875ec]' aria-hidden='true' />
                Your information will be handled respectfully and used only to respond to your enquiry.
              </div>

              <button type='submit' className='group mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl bg-[#0875ec] px-7 py-4 text-sm font-bold text-white shadow-[0_13px_30px_rgba(8,117,236,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#168cff] hover:shadow-[0_18px_38px_rgba(8,117,236,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0875ec] sm:w-fit sm:min-w-56 sm:text-base'>
                Send Message
                <ArrowRight size={18} className='transition-transform duration-300 group-hover:translate-x-1.5' aria-hidden='true' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
