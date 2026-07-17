'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { House, Newspaper, ClipboardClock, Users, UserRound, LogOut, Menu, X } from 'lucide-react'

const menuItems = [
  { href: '/admin', label: 'Dashboard', Icon: House, exact: true },
  { href: '/admin/blog', label: 'Blog', Icon: Newspaper },
  { href: '/admin/appointment', label: 'Appointment', Icon: ClipboardClock },
  { href: '/admin/client', label: 'Client', Icon: UserRound },
  { href: '/admin/team', label: 'Team', Icon: Users },
]

export default function SideBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 shadow-sm backdrop-blur lg:hidden">
        <Image src="/images/MainLogo.png" alt="Australian Financial Advisory" width={190} height={64} className="h-auto w-44" priority />
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? 'Close admin navigation' : 'Open admin navigation'}
          aria-expanded={isOpen}
          aria-controls="admin-sidebar"
          className="grid size-10 place-items-center rounded-xl border border-slate-200 text-[#02153E] transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {isOpen && (
        <button
          type="button"
          aria-label="Close admin navigation"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-[#02153E]/35 backdrop-blur-[2px] lg:hidden"
        />
      )}

      <aside
        id="admin-sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(84vw,18rem)] flex-col justify-between border-r border-slate-200 bg-white shadow-2xl transition-transform duration-300 lg:w-72 lg:translate-x-0 lg:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="flex min-h-32 flex-col justify-center border-b border-blue-900/10 px-5 py-5">
                <Image src="/images/MainLogo.png" alt="Australian Financial Advisory" width={260} height={86} className="h-auto w-full" priority />
                <p className="mt-1 pl-16 text-xs font-semibold tracking-[0.16em] text-neutral-400 uppercase">Admin Panel</p>
            </div>
            <nav className="flex flex-col gap-2 px-4 py-6" aria-label="Admin navigation">
              {menuItems.map(({ href, label, Icon, exact }) => {
                const isActive = exact
                  ? pathname === href
                  : pathname === href || pathname.startsWith(`${href}/`)

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'border-[#02153E] bg-[#02153E] text-white shadow-[0_10px_25px_-15px_rgba(2,21,62,0.9)]'
                        : 'border-[#02153E] bg-white/50 text-[#02153E] hover:bg-[#02153E] hover:text-white'
                    }`}
                  >
                    <Icon size={17} strokeWidth={1.9} />
                    {label}
                  </Link>
                )
              })}
            </nav>
        </div>
        <button type="button" className="flex min-h-12 w-full flex-row items-center justify-center gap-2 bg-[#02153E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-950">
            <LogOut size={18} />
            Logout
        </button>
      </aside>
    </>
  )
}
