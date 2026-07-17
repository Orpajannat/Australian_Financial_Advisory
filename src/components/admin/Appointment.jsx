'use client'

import { useEffect, useRef, useState } from 'react'
import { CalendarDays, Check, Pencil, Plus, Trash2, X } from 'lucide-react'

const inputClassName =
  'mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-[#02153E] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

const initialAppointments = [
  { id: 1, name: 'Michael Brown', email: 'michael@example.com', service: 'Retirement Planning', date: 'Jul 15, 2026', time: '09:00 AM', status: 'Confirmed' },
  { id: 2, name: 'Emily Wilson', email: 'emily@example.com', service: 'Investment Advice', date: 'Jul 15, 2026', time: '11:30 AM', status: 'Pending' },
  { id: 3, name: 'James Carter', email: 'james@example.com', service: 'Business Advisory', date: 'Jul 15, 2026', time: '02:00 PM', status: 'Confirmed' },
  { id: 4, name: 'Sophia Davis', email: 'sophia@example.com', service: 'Insurance Review', date: 'Jul 15, 2026', time: '04:00 PM', status: 'Pending' },
  { id: 5, name: 'Robert Johnson', email: 'robert@example.com', service: 'Wealth Management', date: 'Jul 14, 2026', time: '03:30 PM', status: 'Cancelled' },
]

const appointmentTypeLabels = {
  'initial-consultation': 'Initial Consultation',
  'financial-review': 'Financial Review',
  'investment-strategy': 'Investment Strategy',
  'retirement-planning': 'Retirement Planning',
  'insurance-review': 'Insurance Review',
}

const statusClassNames = {
  Confirmed: 'bg-emerald-50 text-emerald-700',
  Pending: 'bg-amber-50 text-amber-700',
  Cancelled: 'bg-red-50 text-red-600',
}

export default function Appointment() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [appointments, setAppointments] = useState(initialAppointments)
  const [editingId, setEditingId] = useState(null)
  const formRef = useRef(null)

  useEffect(() => {
    if (!editingId || !isFormOpen || !formRef.current) return

    const appointment = appointments.find((item) => item.id === editingId)
    if (!appointment) return

    const serviceValue = Object.keys(appointmentTypeLabels).find(
      (key) => appointmentTypeLabels[key] === appointment.service,
    )
    const parsedDate = new Date(appointment.date)
    const parsedTime = new Date(`January 1, 2026 ${appointment.time}`)

    formRef.current.elements.clientName.value = appointment.name
    formRef.current.elements.email.value = appointment.email
    formRef.current.elements.phone.value = ''
    formRef.current.elements.date.value = `${parsedDate.getFullYear()}-${String(parsedDate.getMonth() + 1).padStart(2, '0')}-${String(parsedDate.getDate()).padStart(2, '0')}`
    formRef.current.elements.time.value = `${String(parsedTime.getHours()).padStart(2, '0')}:${String(parsedTime.getMinutes()).padStart(2, '0')}`
    formRef.current.elements.appointmentType.value = serviceValue ?? ''
    formRef.current.elements.notes.value = ''
  }, [appointments, editingId, isFormOpen])

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const date = new Date(`${formData.get('date')}T00:00:00`)
    const [hours, minutes] = formData.get('time').split(':').map(Number)
    const displayTime = new Date(2026, 0, 1, hours, minutes).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })

    const submittedAppointment = {
        id: editingId ?? Date.now(),
        name: formData.get('clientName'),
        email: formData.get('email'),
        service: appointmentTypeLabels[formData.get('appointmentType')],
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        time: displayTime,
        status: editingId
          ? appointments.find((item) => item.id === editingId)?.status ?? 'Pending'
          : 'Pending',
      }

    setAppointments((current) =>
      editingId
        ? current.map((item) => item.id === editingId ? submittedAppointment : item)
        : [...current, submittedAppointment],
    )
    form.reset()
    setEditingId(null)
    setIsFormOpen(false)
  }

  function closeForm() {
    setEditingId(null)
    setIsFormOpen(false)
  }

  function editAppointment(id) {
    setEditingId(id)
    setIsFormOpen(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-7">
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_14px_40px_-30px_rgba(2,21,62,0.35)]">
      <div className="h-1 bg-gradient-to-r from-[#02153E] via-blue-600 to-cyan-500" />

      <header className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-start gap-4">
          <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
            <CalendarDays size={21} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.15em] text-blue-700 uppercase">
              Client scheduling
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-[-0.025em] text-[#02153E] sm:text-[28px]">
              Appointments
            </h1>
            <p className="mt-1.5 text-sm leading-6 text-slate-500">
              Manage and track all client appointments in one place.
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={isFormOpen}
          aria-controls="new-appointment-form"
          onClick={() => {
            if (isFormOpen) {
              closeForm()
            } else {
              setEditingId(null)
              setIsFormOpen(true)
            }
          }}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#02153E] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_-15px_rgba(2,21,62,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          {isFormOpen ? (
            <X size={17} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Plus size={17} strokeWidth={2} aria-hidden="true" />
          )}
          {isFormOpen ? 'Close form' : 'New appointment'}
        </button>
      </header>

      {isFormOpen && (
        <div
          id="new-appointment-form"
          className="border-t border-slate-200 bg-slate-50/70 px-6 py-7 sm:px-8"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-[#02153E]">
                Schedule a new appointment
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Enter the client and consultation details below.
              </p>
            </div>
            <span className="hidden rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 sm:inline-flex">
              Required fields *
            </span>
          </div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
              <label className="text-sm font-semibold text-slate-700">
                Client name <span className="text-red-500">*</span>
                <input
                  name="clientName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter the client’s full name"
                  className={inputClassName}
                />
              </label>

              <label className="text-sm font-semibold text-slate-700">
                Email address <span className="text-red-500">*</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="client@example.com"
                  className={inputClassName}
                />
              </label>

              <label className="text-sm font-semibold text-slate-700">
                Phone number
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. 04XX XXX XXX"
                  className={inputClassName}
                />
              </label>

              <label className="text-sm font-semibold text-slate-700">
                Appointment date <span className="text-red-500">*</span>
                <input
                  name="date"
                  type="date"
                  required
                  className={inputClassName}
                />
              </label>

              <label className="text-sm font-semibold text-slate-700">
                Start time <span className="text-red-500">*</span>
                <input
                  name="time"
                  type="time"
                  required
                  className={inputClassName}
                />
              </label>

              <label className="text-sm font-semibold text-slate-700">
                Appointment type <span className="text-red-500">*</span>
                <select
                  name="appointmentType"
                  required
                  defaultValue=""
                  className={inputClassName}
                >
                  <option value="" disabled>
                    Select consultation type
                  </option>
                  <option value="initial-consultation">Initial consultation</option>
                  <option value="financial-review">Financial review</option>
                  <option value="investment-strategy">Investment strategy</option>
                  <option value="retirement-planning">Retirement planning</option>
                  <option value="insurance-review">Insurance review</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-slate-700 md:col-span-2 xl:col-span-3">
                Notes
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Add meeting objectives or any preparation notes..."
                  className={`${inputClassName} resize-y py-3`}
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeForm}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-[0_12px_25px_-15px_rgba(37,99,235,0.9)] transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Check size={17} strokeWidth={2} aria-hidden="true" />
                {editingId ? 'Update appointment' : 'Create appointment'}
              </button>
            </div>
          </form>
        </div>
      )}

    </section>

    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_14px_40px_-30px_rgba(2,21,62,0.35)]">
      <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
        <h2 className="text-lg font-semibold text-[#02153E]">Appointment list</h2>
        <p className="mt-1 text-sm text-slate-500">View and manage all scheduled client appointments.</p>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead className="bg-slate-50/80">
              <tr className="text-[11px] font-bold tracking-[0.12em] text-slate-500 uppercase">
                <th className="px-6 py-4 sm:px-8">Client name</th>
                <th className="px-5 py-4">Service</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Time</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-6 py-4 text-right sm:px-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="transition-colors hover:bg-blue-50/30">
                  <td className="px-6 py-5 sm:px-8">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-bold text-blue-700 ring-1 ring-blue-100">
                        {appointment.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#02153E]">{appointment.name}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{appointment.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm font-medium text-slate-700">{appointment.service}</td>
                  <td className="px-5 py-5 text-sm font-medium whitespace-nowrap text-[#02153E]">{appointment.date}</td>
                  <td className="px-5 py-5 text-sm font-medium whitespace-nowrap text-[#02153E]">{appointment.time}</td>
                  <td className="px-5 py-5">
                    <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${statusClassNames[appointment.status]}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 sm:px-8">
                    <div className="flex justify-end gap-2">
                      <button type="button" onClick={() => editAppointment(appointment.id)} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 px-3.5 text-xs font-semibold text-[#123B4A] transition hover:bg-blue-50">
                        <Pencil size={14} aria-hidden="true" /> Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => setAppointments((current) => current.filter((item) => item.id !== appointment.id))}
                        className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-red-100 px-3.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      >
                        <Trash2 size={14} aria-hidden="true" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </div>
  )
}
