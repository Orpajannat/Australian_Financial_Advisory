'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Filter, Pencil, Plus, Search, Trash2, UsersRound, X } from 'lucide-react'

const initialMembers = [
  { id: 1, name: 'James Carter', role: 'Managing Director', email: 'james@aust.com', status: 'Active', image: '/images/employee1.jpg' },
  { id: 2, name: 'Sarah Mitchell', role: 'Senior Financial Advisor', email: 'sarah@aust.com', status: 'Active', image: '/images/employee2.jpg' },
]

const controlClassName = 'min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-[#02153E] outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

export default function Team() {
  const [members, setMembers] = useState(initialMembers)
  const [query, setQuery] = useState('')
  const [role, setRole] = useState('All Roles')
  const [status, setStatus] = useState('All Status')
  const [editingMember, setEditingMember] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const roles = [...new Set(members.map((member) => member.role))]
  const filteredMembers = useMemo(() => members.filter((member) => {
    const matchesQuery = `${member.name} ${member.role} ${member.email}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (role === 'All Roles' || member.role === role) && (status === 'All Status' || member.status === status)
  }), [members, query, role, status])

  function openForm(member = null) {
    setEditingMember(member)
    setIsFormOpen(true)
  }

  function closeForm() {
    setEditingMember(null)
    setIsFormOpen(false)
  }

  function saveMember(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const member = {
      id: editingMember?.id ?? Date.now(),
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      status: data.get('status'),
      image: editingMember?.image ?? null,
    }
    setMembers((current) => editingMember ? current.map((item) => item.id === editingMember.id ? member : item) : [...current, member])
    closeForm()
  }

  return (
    <div className="space-y-7">
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_50px_-34px_rgba(2,21,62,0.4)]">
      <div className="h-1 bg-gradient-to-r from-[#02153E] via-blue-700 to-cyan-500" />
      <header className="flex flex-col gap-5 px-5 py-6 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-800 ring-1 ring-blue-100">
            <UsersRound size={21} strokeWidth={1.8} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.15em] text-blue-800 uppercase">People management</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-[-0.025em] text-[#02153E] sm:text-[28px]">Team Members</h1>
            <p className="mt-1.5 text-sm text-slate-500">Manage your team and their roles.</p>
          </div>
        </div>
        <button type="button" onClick={() => openForm()} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#02153E] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_-15px_rgba(2,21,62,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:w-auto">
          <Plus size={17} aria-hidden="true" /> Add Team Member
        </button>
      </header>

      {isFormOpen && (
        <div className="border-y border-slate-200 bg-slate-50/70 px-5 py-6 sm:px-7 lg:px-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-[#02153E]">{editingMember ? 'Edit team member' : 'Add a team member'}</h2>
              <p className="mt-1 text-sm text-slate-500">Enter the memberâ€™s professional details.</p>
            </div>
            <button type="button" onClick={closeForm} aria-label="Close form" className="grid size-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-100"><X size={17} /></button>
          </div>
          <form onSubmit={saveMember} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <label className="text-sm font-semibold text-slate-700">Full name<input name="name" required defaultValue={editingMember?.name ?? ''} className={`mt-2 ${controlClassName}`} /></label>
            <label className="text-sm font-semibold text-slate-700">Role<input name="role" required defaultValue={editingMember?.role ?? ''} className={`mt-2 ${controlClassName}`} /></label>
            <label className="text-sm font-semibold text-slate-700">Email<input name="email" type="email" required defaultValue={editingMember?.email ?? ''} className={`mt-2 ${controlClassName}`} /></label>
            <label className="text-sm font-semibold text-slate-700">Status<select name="status" defaultValue={editingMember?.status ?? 'Active'} className={`mt-2 ${controlClassName}`}><option>Active</option><option>Inactive</option></select></label>
            <div className="flex flex-col-reverse gap-3 sm:col-span-2 sm:flex-row sm:justify-end xl:col-span-4">
              <button type="button" onClick={closeForm} className="min-h-11 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 hover:bg-slate-100">Cancel</button>
              <button type="submit" className="min-h-11 rounded-xl bg-[#02153E] px-5 text-sm font-semibold text-white hover:bg-blue-950">{editingMember ? 'Save changes' : 'Add member'}</button>
            </div>
          </form>
        </div>
      )}

      <div className="px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-3 md:grid-cols-[minmax(220px,1fr)_minmax(150px,0.48fr)_minmax(150px,0.48fr)_auto]">
          <label className="relative"><span className="sr-only">Search team members</span><Search size={17} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, role or email" className={`${controlClassName} pl-10`} /></label>
          <label><span className="sr-only">Filter by role</span><select value={role} onChange={(event) => setRole(event.target.value)} className={controlClassName}><option>All Roles</option>{roles.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span className="sr-only">Filter by status</span><select value={status} onChange={(event) => setStatus(event.target.value)} className={controlClassName}><option>All Status</option><option>Active</option><option>Inactive</option></select></label>
          <div className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[#02153E]"><Filter size={16} aria-hidden="true" /> Filter</div>
        </div>
      </div>
    </section>

    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_50px_-34px_rgba(2,21,62,0.4)]">
      <div className="border-b border-slate-200 px-5 py-5 sm:px-8">
        <h2 className="text-lg font-semibold text-[#02153E]">Team directory</h2>
        <p className="mt-1 text-sm text-slate-500">View and manage all team members.</p>
      </div>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[780px] text-left">
          <thead className="border-y border-slate-200 bg-slate-50/70 text-[11px] font-bold tracking-[0.1em] text-slate-500 uppercase"><tr><th className="px-8 py-4">Name</th><th className="px-5 py-4">Role</th><th className="px-5 py-4">Email</th><th className="px-5 py-4">Status</th><th className="px-8 py-4 text-right">Actions</th></tr></thead>
          <tbody className="divide-y divide-slate-100">{filteredMembers.map((member) => <MemberRow key={member.id} member={member} onEdit={openForm} onDelete={(id) => setMembers((current) => current.filter((item) => item.id !== id))} />)}</tbody>
        </table>
      </div>

      <div className="divide-y divide-slate-100 md:hidden">
        {filteredMembers.map((member) => <MemberCard key={member.id} member={member} onEdit={openForm} onDelete={(id) => setMembers((current) => current.filter((item) => item.id !== id))} />)}
      </div>
      {filteredMembers.length === 0 && <p className="px-5 py-12 text-center text-sm text-slate-500">No team members match your filters.</p>}
    </section>
    </div>
  )
}

function Avatar({ member }) {
  return member.image ? <Image src={member.image} alt="" width={48} height={48} className="size-12 rounded-full object-cover ring-4 ring-slate-50" /> : <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-bold text-blue-800 ring-4 ring-slate-50">{member.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>
}

function Status({ value }) {
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${value === 'Active' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>{value}</span>
}

function Actions({ member, onEdit, onDelete }) {
  return <div className="flex justify-end gap-2"><button type="button" onClick={() => onEdit(member)} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 px-3.5 text-xs font-semibold text-[#123B4A] hover:bg-blue-50"><Pencil size={14} /> Edit</button><button type="button" onClick={() => onDelete(member.id)} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-red-100 px-3.5 text-xs font-semibold text-red-600 hover:bg-red-50"><Trash2 size={14} /> Delete</button></div>
}

function MemberRow({ member, onEdit, onDelete }) {
  return <tr className="transition hover:bg-blue-50/20"><td className="px-8 py-5"><div className="flex items-center gap-3"><Avatar member={member} /><div><p className="text-sm font-semibold text-[#02153E]">{member.name}</p><p className="mt-1 text-xs text-slate-500">{member.role}</p></div></div></td><td className="px-5 py-5 text-sm font-medium text-slate-700">{member.role}</td><td className="px-5 py-5 text-sm text-slate-600">{member.email}</td><td className="px-5 py-5"><Status value={member.status} /></td><td className="px-8 py-5"><Actions member={member} onEdit={onEdit} onDelete={onDelete} /></td></tr>
}

function MemberCard({ member, onEdit, onDelete }) {
  return <article className="p-5"><div className="flex items-start gap-3"><Avatar member={member} /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-start justify-between gap-2"><div><h2 className="font-semibold text-[#02153E]">{member.name}</h2><p className="mt-1 text-sm text-slate-500">{member.role}</p></div><Status value={member.status} /></div><a href={`mailto:${member.email}`} className="mt-3 block truncate text-sm text-blue-800">{member.email}</a></div></div><div className="mt-5 border-t border-slate-100 pt-4"><Actions member={member} onEdit={onEdit} onDelete={onDelete} /></div></article>
}

