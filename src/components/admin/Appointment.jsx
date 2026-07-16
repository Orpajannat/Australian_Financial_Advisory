'use client'

import { useState } from 'react'
import { CalendarDays, Check, Plus, X } from 'lucide-react'

const inputClassName =
  'mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-[#02153E] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

export default function Appointment() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
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
          onClick={() => setIsFormOpen((current) => !current)}
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

          <form onSubmit={(event) => event.preventDefault()}>
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
                onClick={() => setIsFormOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-[0_12px_25px_-15px_rgba(37,99,235,0.9)] transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Check size={17} strokeWidth={2} aria-hidden="true" />
                Create appointment
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  )
}
