'use client'

import { useMemo, useState } from 'react'
import { Filter, Pencil, Plus, Search, Trash2, UserRound, X } from 'lucide-react'

const initialClients = [
  { id: 1, name: 'Michael Brown', company: 'Brown Enterprises', email: 'michael.brown@email.com', phone: '+1 (555) 234-5678', category: 'Individual', status: 'Active', joined: 'May 15, 2024' },
  { id: 2, name: 'Emily Wilson', company: 'Wilson & Co.', email: 'emily.wilson@email.com', phone: '+1 (555) 876-5432', category: 'Business', status: 'Active', joined: 'Jun 22, 2024' },
  { id: 3, name: 'James Carter', company: '', email: 'james.carter@email.com', phone: '+1 (555) 345-6789', category: 'Individual', status: 'Active', joined: 'Jul 10, 2024' },
  { id: 4, name: 'Sarah Mitchell', company: 'Mitchell Group', email: 'sarah.mitchell@email.com', phone: '+1 (555) 654-3210', category: 'Business', status: 'Inactive', joined: 'Mar 18, 2024' },
  { id: 5, name: 'David Lee', company: '', email: 'david.lee@email.com', phone: '+1 (555) 987-6543', category: 'Individual', status: 'Active', joined: 'Aug 05, 2024' },
  { id: 6, name: 'Olivia Martinez', company: 'Martinez LLC', email: 'olivia.martinez@email.com', phone: '+1 (555) 234-9876', category: 'Business', status: 'Active', joined: 'Apr 30, 2024' },
  { id: 7, name: 'Robert Johnson', company: '', email: 'robert.johnson@email.com', phone: '+1 (555) 456-7890', category: 'Individual', status: 'Inactive', joined: 'Feb 12, 2024' },
]

const fieldClassName = 'mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-[#02153E] outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
const filterClassName = 'min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-[#02153E] outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

export default function Client() {
  const [clients, setClients] = useState(initialClients)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All Status')
  const [category, setCategory] = useState('All Categories')
  const [editingClient, setEditingClient] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const filteredClients = useMemo(() => clients.filter((client) => {
    const matchesQuery = `${client.name} ${client.email} ${client.phone} ${client.company}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (status === 'All Status' || client.status === status) && (category === 'All Categories' || client.category === category)
  }), [category, clients, query, status])

  function openForm(client = null) {
    setEditingClient(client)
    setIsFormOpen(true)
  }

  function closeForm() {
    setEditingClient(null)
    setIsFormOpen(false)
  }

  function saveClient(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const joinedDate = data.get('joined')
    const client = {
      id: editingClient?.id ?? Date.now(),
      name: data.get('name'), company: data.get('company'), email: data.get('email'), phone: data.get('phone'),
      category: data.get('category'), status: data.get('status'),
      joined: joinedDate ? new Date(`${joinedDate}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : editingClient?.joined,
    }
    setClients((current) => editingClient ? current.map((item) => item.id === editingClient.id ? client : item) : [...current, client])
    closeForm()
  }

  return (
    <div className="space-y-7">
      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_50px_-34px_rgba(2,21,62,0.4)]">
        <div className="h-1 bg-gradient-to-r from-[#02153E] via-blue-700 to-cyan-500" />
        <header className="flex flex-col gap-5 px-5 py-6 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-start gap-4">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-800 ring-1 ring-blue-100"><UserRound size={21} aria-hidden="true" /></div>
            <div><p className="text-xs font-bold tracking-[0.15em] text-blue-800 uppercase">Client management</p><h1 className="mt-1 text-2xl font-semibold tracking-[-0.025em] text-[#02153E] sm:text-[28px]">Clients</h1><p className="mt-1.5 text-sm text-slate-500">Manage your clients and their information.</p></div>
          </div>
          <button type="button" onClick={() => openForm()} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#02153E] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_-15px_rgba(2,21,62,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-950 sm:w-auto"><Plus size={17} /> Add New Client</button>
        </header>

        {isFormOpen && <div className="border-y border-slate-200 bg-slate-50/70 px-5 py-6 sm:px-7 lg:px-8">
          <div className="mb-5 flex items-start justify-between gap-4"><div><h2 className="text-lg font-semibold text-[#02153E]">{editingClient ? 'Edit client' : 'Add a new client'}</h2><p className="mt-1 text-sm text-slate-500">Enter the clientâ€™s contact and account details.</p></div><button type="button" onClick={closeForm} aria-label="Close form" className="grid size-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500"><X size={17} /></button></div>
          <form onSubmit={saveClient} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <Field label="Client name" name="name" value={editingClient?.name} required />
            <Field label="Company" name="company" value={editingClient?.company} />
            <Field label="Email" name="email" type="email" value={editingClient?.email} required />
            <Field label="Phone" name="phone" type="tel" value={editingClient?.phone} required />
            <label className="text-sm font-semibold text-slate-700">Category<select name="category" defaultValue={editingClient?.category ?? 'Individual'} className={fieldClassName}><option>Individual</option><option>Business</option></select></label>
            <label className="text-sm font-semibold text-slate-700">Status<select name="status" defaultValue={editingClient?.status ?? 'Active'} className={fieldClassName}><option>Active</option><option>Inactive</option></select></label>
            {!editingClient && <label className="text-sm font-semibold text-slate-700">Joined on<input name="joined" type="date" required className={fieldClassName} /></label>}
            <div className="flex flex-col-reverse gap-3 sm:col-span-2 sm:flex-row sm:justify-end xl:col-span-3"><button type="button" onClick={closeForm} className="min-h-11 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700">Cancel</button><button type="submit" className="min-h-11 rounded-xl bg-[#02153E] px-5 text-sm font-semibold text-white">{editingClient ? 'Save changes' : 'Add client'}</button></div>
          </form>
        </div>}

        <div className="px-4 py-5 sm:px-6 lg:px-8"><div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-3 md:grid-cols-[minmax(230px,1fr)_minmax(150px,0.45fr)_minmax(160px,0.45fr)_auto]">
          <label className="relative"><span className="sr-only">Search clients</span><Search size={17} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, email or phone" className={`${filterClassName} pl-10`} /></label>
          <label><span className="sr-only">Filter by status</span><select value={status} onChange={(event) => setStatus(event.target.value)} className={filterClassName}><option>All Status</option><option>Active</option><option>Inactive</option></select></label>
          <label><span className="sr-only">Filter by category</span><select value={category} onChange={(event) => setCategory(event.target.value)} className={filterClassName}><option>All Categories</option><option>Individual</option><option>Business</option></select></label>
          <div className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[#02153E]"><Filter size={16} /> Filter</div>
        </div></div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_50px_-34px_rgba(2,21,62,0.4)]">
        <div className="border-b border-slate-200 px-5 py-5 sm:px-8"><h2 className="text-lg font-semibold text-[#02153E]">Client directory</h2><p className="mt-1 text-sm text-slate-500">View and manage all client records.</p></div>
        <div className="hidden overflow-x-auto lg:block"><table className="w-full min-w-[1050px] text-left"><thead className="bg-slate-50/70 text-[11px] font-bold tracking-[0.1em] text-slate-500 uppercase"><tr><th className="px-7 py-4">Client name</th><th className="px-4 py-4">Email</th><th className="px-4 py-4">Phone</th><th className="px-4 py-4">Category</th><th className="px-4 py-4">Status</th><th className="px-4 py-4">Joined on</th><th className="px-7 py-4 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-100">{filteredClients.map((client) => <ClientRow key={client.id} client={client} onEdit={openForm} onDelete={(id) => setClients((current) => current.filter((item) => item.id !== id))} />)}</tbody></table></div>
        <div className="grid divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:hidden">{filteredClients.map((client) => <ClientCard key={client.id} client={client} onEdit={openForm} onDelete={(id) => setClients((current) => current.filter((item) => item.id !== id))} />)}</div>
        {filteredClients.length === 0 && <p className="px-5 py-12 text-center text-sm text-slate-500">No clients match your filters.</p>}
      </section>
    </div>
  )
}

function Field({ label, name, type = 'text', value = '', required = false }) { return <label className="text-sm font-semibold text-slate-700">{label}<input name={name} type={type} required={required} defaultValue={value ?? ''} className={fieldClassName} /></label> }
function Avatar({ name }) { return <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-bold text-blue-800 ring-4 ring-slate-50">{name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span> }
function Status({ value }) { return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${value === 'Active' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'}`}>{value}</span> }
function Actions({ client, onEdit, onDelete }) { return <div className="flex justify-end gap-2"><button type="button" onClick={() => onEdit(client)} aria-label={`Edit ${client.name}`} className="grid size-10 place-items-center rounded-xl border border-slate-200 text-[#123B4A] hover:bg-blue-50"><Pencil size={15} /></button><button type="button" onClick={() => onDelete(client.id)} aria-label={`Delete ${client.name}`} className="grid size-10 place-items-center rounded-xl border border-red-100 text-red-600 hover:bg-red-50"><Trash2 size={15} /></button></div> }
function ClientRow({ client, onEdit, onDelete }) { return <tr className="transition hover:bg-blue-50/20"><td className="px-7 py-4"><div className="flex items-center gap-3"><Avatar name={client.name} /><div><p className="text-sm font-semibold text-[#02153E]">{client.name}</p>{client.company && <p className="mt-1 text-xs text-slate-500">{client.company}</p>}</div></div></td><td className="px-4 py-4 text-sm text-slate-600">{client.email}</td><td className="px-4 py-4 text-sm whitespace-nowrap text-slate-600">{client.phone}</td><td className="px-4 py-4 text-sm text-slate-700">{client.category}</td><td className="px-4 py-4"><Status value={client.status} /></td><td className="px-4 py-4 text-sm whitespace-nowrap text-slate-600">{client.joined}</td><td className="px-7 py-4"><Actions client={client} onEdit={onEdit} onDelete={onDelete} /></td></tr> }
function ClientCard({ client, onEdit, onDelete }) { return <article className="min-w-0 p-5"><div className="flex items-start gap-3"><Avatar name={client.name} /><div className="min-w-0 flex-1"><div className="flex flex-wrap justify-between gap-2"><div><h2 className="font-semibold text-[#02153E]">{client.name}</h2><p className="mt-1 text-sm text-slate-500">{client.company || client.category}</p></div><Status value={client.status} /></div></div></div><dl className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4 text-sm"><div><dt className="text-xs text-slate-500">Email</dt><dd className="mt-1 break-all font-medium text-[#02153E]">{client.email}</dd></div><div className="grid grid-cols-2 gap-3"><div><dt className="text-xs text-slate-500">Phone</dt><dd className="mt-1 font-medium text-[#02153E]">{client.phone}</dd></div><div><dt className="text-xs text-slate-500">Joined</dt><dd className="mt-1 font-medium text-[#02153E]">{client.joined}</dd></div></div></dl><div className="mt-4"><Actions client={client} onEdit={onEdit} onDelete={onDelete} /></div></article> }

