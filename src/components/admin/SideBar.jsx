'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { House, Newspaper, ClipboardClock, LogOut } from 'lucide-react'

const menuItems = [
  { href: '/admin', label: 'Dashboard', Icon: House, exact: true },
  { href: '/admin/blog', label: 'Blog', Icon: Newspaper },
  { href: '/admin/appointment', label: 'Appointment', Icon: ClipboardClock },
]

export default function SideBar() {
  const pathname = usePathname()

  return (
    <aside className='fixed inset-y-0 left-0 z-50 flex w-[88vw] max-w-80 flex-col items-center justify-between bg-white'>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col border-b border-blue-900/10 py-5'>
                <Image src="/images/MainLogo.png" alt="MainLogo" width={300} height={100}/>
                <p className='uppercase text-neutral-400 text-sm pl-22 leading-0'>Admin Panel</p>
            </div>
            <nav className='flex flex-col gap-3 px-5' aria-label='Admin navigation'>
              {menuItems.map(({ href, label, Icon, exact }) => {
                const isActive = exact
                  ? pathname === href
                  : pathname === href || pathname.startsWith(`${href}/`)

                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex w-full items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
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
        <button className='flex flex-row items-center justify-center gap-2 text-white hover:font-semibold bg-[#02153E] py-3 w-full'>
            <LogOut />
            Logout
        </button>
    </aside>
  )
}
