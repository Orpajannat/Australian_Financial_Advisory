import SideBar from '@/components/admin/SideBar'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50">
      <SideBar />
      <main className="min-w-0 min-h-screen pt-20 lg:ml-72 lg:pt-0">
        <div className="mx-auto w-full max-w-[1600px] min-w-0 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
