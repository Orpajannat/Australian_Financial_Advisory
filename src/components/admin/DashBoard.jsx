import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  CalendarCheck2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

const overviewCards = [
  {
    label: 'Total clients',
    value: '1,284',
    detail: 'Active client records',
    Icon: UsersRound,
    DetailIcon: ShieldCheck,
    iconClassName: 'bg-blue-50 text-blue-700 ring-blue-100',
    detailClassName: 'text-blue-700',
  },
  {
    label: "Today's appointments",
    value: '18',
    detail: '5 awaiting confirmation',
    Icon: CalendarCheck2,
    DetailIcon: Clock3,
    iconClassName: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    detailClassName: 'text-amber-700',
  },
  {
    label: 'Published articles',
    value: '42',
    detail: 'All changes are live',
    Icon: FileText,
    DetailIcon: Globe2,
    iconClassName: 'bg-violet-50 text-violet-700 ring-violet-100',
    detailClassName: 'text-emerald-700',
  },
]

export default function DashBoard() {
  return (
    <div className="space-y-7">
      <section className="relative isolate overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_24px_70px_-35px_rgba(2,21,62,0.35)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.08),transparent_32%)]" />

        <div className="grid min-h-[390px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-14 xl:px-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
              <p className="text-xs font-bold tracking-[0.18em] text-blue-700 uppercase">
                Admin dashboard
              </p>
            </div>

            <h1 className="max-w-xl text-3xl font-semibold tracking-[-0.035em] text-[#02153E] sm:text-4xl xl:text-[44px] xl:leading-[1.12]">
              Welcome back, Admin.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Stay on top of client appointments, advisory content, and website
              activity from one clear, organised workspace.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/admin/appointment"
                type="button"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#02153E] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(2,21,62,0.8)] transition hover:-translate-y-0.5 hover:bg-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02153E]"
              >
                <CalendarDays size={18} strokeWidth={1.8} />
                Manage appointments
              </Link>

              <Link
                href="/"
                target="_blank"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-[#02153E] transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                View website
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[290px] overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-slate-50 lg:min-h-full">
            <Image
              src="/images/admin-dashboard-hero.png"
              alt="Financial adviser reviewing performance charts at a laptop"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center lg:object-[58%_center]"
            />
            <div
              className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-white to-transparent lg:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="overview-heading">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-blue-700 uppercase">
              At a glance
            </p>
            <h2
              id="overview-heading"
              className="mt-1 text-xl font-semibold tracking-tight text-[#02153E]"
            >
              Business overview
            </h2>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-slate-500 sm:mt-0">
            <CheckCircle2 size={15} className="text-emerald-600" />
            Records are up to date
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {overviewCards.map((card) => {
            const Icon = card.Icon
            const DetailIcon = card.DetailIcon

            return (
              <article
                key={card.label}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_40px_-28px_rgba(2,21,62,0.35)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_45px_-26px_rgba(2,21,62,0.42)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      {card.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#02153E]">
                      {card.value}
                    </p>
                  </div>
                  <div
                    className={`grid size-12 shrink-0 place-items-center rounded-2xl ring-1 ${card.iconClassName}`}
                  >
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p
                    className={`flex items-center gap-2 text-xs font-semibold ${card.detailClassName}`}
                  >
                    <DetailIcon size={15} strokeWidth={1.9} aria-hidden="true" />
                    {card.detail}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
