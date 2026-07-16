'use client'

import { useState } from 'react'
import {
  CalendarClock,
  CheckCircle2,
  Eye,
  FileEdit,
  FileText,
  MoreHorizontal,
  Plus,
  Save,
  Search,
  X,
} from 'lucide-react'

const inputClassName =
  'mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-[#02153E] outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'

const articles = [
  {
    title: 'Preparing for retirement with greater confidence',
    category: 'Retirement Planning',
    status: 'Published',
    author: 'Sarah Mitchell',
    updated: '14 Jul 2026',
    views: '2,418',
  },
  {
    title: 'A practical guide to building a diversified portfolio',
    category: 'Investments',
    status: 'Published',
    author: 'James Walker',
    updated: '10 Jul 2026',
    views: '1,876',
  },
  {
    title: 'Understanding your personal insurance needs',
    category: 'Insurance',
    status: 'Draft',
    author: 'Emily Chen',
    updated: '08 Jul 2026',
    views: '—',
  },
  {
    title: 'EOFY financial planning checklist for Australian families',
    category: 'Financial Planning',
    status: 'Scheduled',
    author: 'Sarah Mitchell',
    updated: '18 Jul 2026',
    views: '—',
  },
  {
    title: 'Five considerations before changing your super strategy',
    category: 'Superannuation',
    status: 'Published',
    author: 'James Walker',
    updated: '02 Jul 2026',
    views: '1,204',
  },
]

const summaryCards = [
  {
    label: 'Published',
    value: '42',
    detail: 'Live on your website',
    Icon: CheckCircle2,
    iconClassName: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  },
  {
    label: 'Drafts',
    value: '6',
    detail: 'Awaiting editorial review',
    Icon: FileEdit,
    iconClassName: 'bg-amber-50 text-amber-700 ring-amber-100',
  },
  {
    label: 'Scheduled',
    value: '3',
    detail: 'Ready for publication',
    Icon: CalendarClock,
    iconClassName: 'bg-violet-50 text-violet-700 ring-violet-100',
  },
]

const statusClassNames = {
  Published: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
  Draft: 'bg-amber-50 text-amber-700 ring-amber-600/15',
  Scheduled: 'bg-violet-50 text-violet-700 ring-violet-600/15',
}

export default function Blog() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All')
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false)

  const filteredArticles = articles.filter((article) => {
    const matchesQuery = `${article.title} ${article.category} ${article.author}`
      .toLowerCase()
      .includes(query.toLowerCase())
    const matchesStatus = status === 'All' || article.status === status

    return matchesQuery && matchesStatus
  })

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_14px_40px_-30px_rgba(2,21,62,0.35)]">
        <div className="h-1 bg-gradient-to-r from-[#02153E] via-indigo-600 to-violet-500" />
        <header className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-start gap-4">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
              <FileText size={21} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-indigo-700 uppercase">
                Content management
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-[-0.025em] text-[#02153E] sm:text-[28px]">
                Articles &amp; insights
              </h1>
              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
                Create and maintain clear, trusted financial guidance for your
                clients and website visitors.
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-expanded={isCreateFormOpen}
            aria-controls="create-article-form"
            onClick={() => setIsCreateFormOpen((current) => !current)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#02153E] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_-15px_rgba(2,21,62,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isCreateFormOpen ? (
              <X size={17} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Plus size={17} strokeWidth={2} aria-hidden="true" />
            )}
            {isCreateFormOpen ? 'Close editor' : 'Create article'}
          </button>
        </header>

        {isCreateFormOpen && (
          <div
            id="create-article-form"
            className="border-t border-slate-200 bg-slate-50/70 px-6 py-7 sm:px-8"
          >
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#02153E]">
                  Create a new article
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Prepare clear, compliant content for your website audience.
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                Required fields *
              </span>
            </div>

            <form onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
                <label className="text-sm font-semibold text-slate-700 md:col-span-2 xl:col-span-2">
                  Article title <span className="text-red-500">*</span>
                  <input
                    name="title"
                    type="text"
                    required
                    placeholder="Enter a clear, client-focused title"
                    className={inputClassName}
                  />
                </label>

                <label className="text-sm font-semibold text-slate-700">
                  Category <span className="text-red-500">*</span>
                  <select
                    name="category"
                    required
                    defaultValue=""
                    className={inputClassName}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option>Financial Planning</option>
                    <option>Investments</option>
                    <option>Retirement Planning</option>
                    <option>Superannuation</option>
                    <option>Insurance</option>
                  </select>
                </label>

                <label className="text-sm font-semibold text-slate-700">
                  Author <span className="text-red-500">*</span>
                  <input
                    name="author"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Author’s full name"
                    className={inputClassName}
                  />
                </label>

                <label className="text-sm font-semibold text-slate-700">
                  Publication status <span className="text-red-500">*</span>
                  <select
                    name="publicationStatus"
                    required
                    defaultValue="Draft"
                    className={inputClassName}
                  >
                    <option>Draft</option>
                    <option>Scheduled</option>
                    <option>Published</option>
                  </select>
                </label>

                <label className="text-sm font-semibold text-slate-700">
                  Publication date
                  <input
                    name="publicationDate"
                    type="date"
                    className={inputClassName}
                  />
                </label>

                <label className="text-sm font-semibold text-slate-700 md:col-span-2 xl:col-span-3">
                  Article summary <span className="text-red-500">*</span>
                  <textarea
                    name="summary"
                    rows={3}
                    required
                    maxLength={240}
                    placeholder="Write a concise summary for article previews and search results..."
                    className={`${inputClassName} resize-y py-3`}
                  />
                  <span className="mt-1.5 block text-xs font-normal text-slate-400">
                    Recommended length: 140–160 characters.
                  </span>
                </label>

                <label className="text-sm font-semibold text-slate-700 md:col-span-2 xl:col-span-3">
                  Article content <span className="text-red-500">*</span>
                  <textarea
                    name="content"
                    rows={10}
                    required
                    placeholder="Write the article content here..."
                    className={`${inputClassName} resize-y py-3 leading-6`}
                  />
                </label>

                <label className="text-sm font-semibold text-slate-700 md:col-span-2">
                  SEO title
                  <input
                    name="seoTitle"
                    type="text"
                    maxLength={60}
                    placeholder="Optional title for search engines"
                    className={inputClassName}
                  />
                </label>

                <label className="text-sm font-semibold text-slate-700">
                  Featured image URL
                  <input
                    name="featuredImage"
                    type="url"
                    placeholder="https://..."
                    className={inputClassName}
                  />
                </label>
              </div>

              <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsCreateFormOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-[0_12px_25px_-15px_rgba(79,70,229,0.9)] transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <Save size={17} strokeWidth={2} aria-hidden="true" />
                  Save article
                </button>
              </div>
            </form>
          </div>
        )}
      </section>

      <section aria-label="Publication overview" className="grid gap-4 md:grid-cols-3">
        {summaryCards.map(({ label, value, detail, Icon, iconClassName }) => (
          <article
            key={label}
            className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_36px_-30px_rgba(2,21,62,0.4)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <p className="mt-1.5 text-3xl font-semibold tracking-[-0.04em] text-[#02153E]">
                  {value}
                </p>
              </div>
              <div className={`grid size-11 place-items-center rounded-xl ring-1 ${iconClassName}`}>
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </div>
            </div>
            <p className="mt-4 border-t border-slate-100 pt-3 text-xs font-medium text-slate-500">
              {detail}
            </p>
          </article>
        ))}
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_42px_-32px_rgba(2,21,62,0.4)]">
        <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 lg:flex-row lg:items-center lg:justify-between sm:px-6">
          <div>
            <h2 className="text-lg font-semibold text-[#02153E]">Content library</h2>
            <p className="mt-1 text-sm text-slate-500">
              Review, update, and monitor your advisory content.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative block">
              <span className="sr-only">Search articles</span>
              <Search
                size={17}
                className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles..."
                className="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pr-4 pl-10 text-sm text-[#02153E] outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 sm:w-64"
              />
            </label>

            <label>
              <span className="sr-only">Filter by status</span>
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 sm:w-40"
              >
                <option>All</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Scheduled</option>
              </select>
            </label>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-50/80 text-xs font-bold tracking-[0.08em] text-slate-500 uppercase">
                <th className="px-6 py-3.5">Article</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Author</th>
                <th className="px-5 py-3.5">Last updated</th>
                <th className="px-5 py-3.5">Views</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredArticles.map((article) => (
                <tr key={article.title} className="transition hover:bg-slate-50/70">
                  <td className="px-6 py-4">
                    <p className="max-w-md text-sm font-semibold text-[#02153E]">
                      {article.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{article.category}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusClassNames[article.status]}`}
                    >
                      {article.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">{article.author}</td>
                  <td className="px-5 py-4 text-sm text-slate-600">{article.updated}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                      <Eye size={15} className="text-slate-400" aria-hidden="true" />
                      {article.views}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      aria-label={`More actions for ${article.title}`}
                      className="inline-grid size-9 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-[#02153E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      <MoreHorizontal size={19} aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredArticles.length === 0 && (
            <div className="px-6 py-14 text-center">
              <p className="font-semibold text-[#02153E]">No articles found</p>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or publication status.
              </p>
            </div>
          )}
        </div>

        <footer className="flex items-center justify-between border-t border-slate-200 px-6 py-4 text-xs text-slate-500">
          <span>Showing {filteredArticles.length} of {articles.length} recent articles</span>
          <span>51 articles in total</span>
        </footer>
      </section>
    </div>
  )
}
