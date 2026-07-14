'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className={`mx-auto max-w-7xl bg-white/30 px-5 shadow-2xl shadow-[#08083d]/20 backdrop-blur-xl sm:px-7 ${menuOpen ? 'rounded-2xl' : 'rounded-2xl sm:rounded-full'}`}>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="relative block h-20 w-36 shrink-0 overflow-hidden sm:h-11 sm:w-48" aria-label="Australian Financial Advisory home">
            <Image
              src="/images/newLogo.png"
              alt="Australian Financial Advisory"
              fill
              sizes="(max-width: 640px) 144px, 192px"
              className="object-contain"
              preload
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-black/80 transition hover:text-blue-400/50">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-[#a29dff] py-2 pl-2 pr-4 text-sm font-bold text-[#111150] transition hover:bg-white sm:flex">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white" aria-hidden="true">→</span>
              Book a Call
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="text-xl" aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/15 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
