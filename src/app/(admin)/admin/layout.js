import SideBar from '@/components/admin/SideBar'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <SideBar />
      <main className="min-h-screen ml-80 p-6">
        {children}
      </main>
    </div>
  )
}
